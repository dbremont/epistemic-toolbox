// Tool API for communicating with the loaded tool
const ToolAPI = {
    // Reference to the shadow root
    shadowRoot: null,
    
    // Send a command to the tool by dispatching an event
    sendCommand: function(command, data = {}) {
        if (!this.shadowRoot) {
            console.warn('Tool not loaded yet');
            return;
        }
        
        // Dispatch event that the tool's event listeners will catch
        console.log(`Dispatching event: tool-${command}`);
        const event = new CustomEvent(`tool-${command}`, {
            detail: data,
            bubbles: true,
            composed: true
        });
        this.shadowRoot.dispatchEvent(event);
    },
    
    // Open the tool's help
    openHelp: function() {
        this.sendCommand('openHelp');
    },
    
    // Reset the tool
    reset: function() {
        this.sendCommand('reset');
    },
    
    // Refresh the tool
    refresh: function() {
        this.sendCommand('refresh');
    },
    
    // Send a custom command
    custom: function(command, data) {
        this.sendCommand(command, data);
    }
};

    // Execute tool script with access to shadow root
    function executeScript(root, scriptCode) {
        const scriptEl = document.createElement('script');
        scriptEl.textContent = `(function(root) {
            window.__toolShadowRoot__ = root;
            try {
                ${scriptCode}
            } catch (err) {
                console.error('Error executing tool script:', err);
            }
        })(window.__toolShadowRoot__);`;
        
        document.head.appendChild(scriptEl);
        document.head.removeChild(scriptEl);
    }

    // Load the tool from the URL parameter
    async function loadTool() {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const toolContentWrapper = document.getElementById('tool-content-wrapper');
    const toolContentHost = document.getElementById('tool-content-host');
    const toolLoading = document.getElementById('tool-loading');
    const toolControls = document.getElementById('tool-controls');
    const errorMessage = document.getElementById('errorMessage');
    const toolTitle = document.getElementById('tool-title');
    const toolPath = document.getElementById('tool-path');
    const navToolName = document.getElementById('nav-tool-name');
    const toolHeader = document.querySelector('.tool-header');

    // Get the tool name from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const toolName = urlParams.get('tool');

    if (!toolName) {
        loading.style.display = 'none';
        error.style.display = 'flex';
        errorMessage.textContent = 'No tool specified in URL. Please provide a tool name.';
        return;
    }

    try {
        // Sanitize the tool name to prevent directory traversal
        const sanitizedName = toolName.replace(/[^a-zA-Z0-9_-]/g, '');
        const toolUrl = `/tool/src/${sanitizedName}.html`;

        // Update title, path, and navigation display
        const formattedName = sanitizedName.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        toolTitle.textContent = formattedName;
        toolPath.textContent = `/tool/src/${sanitizedName}.html`;
        navToolName.textContent = formattedName;

        // Hide the duplicate tool header section
        toolHeader.style.display = 'none';

        // Fetch the tool HTML
        const response = await fetch(toolUrl);
        if (!response.ok) {
            throw new Error(`Failed to load tool: ${response.statusText}`);
        }

        const html = await response.text();

        // Parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Create a Shadow DOM for style isolation
        const shadowRoot = toolContentHost.attachShadow({ mode: 'open' });
        ToolAPI.shadowRoot = shadowRoot;

        // Extract and copy all style elements
        const styles = doc.querySelectorAll('style');
        styles.forEach(style => {
            const newStyle = document.createElement('style');
            newStyle.textContent = style.textContent;
            shadowRoot.appendChild(newStyle);
        });

        // Extract link elements (for external stylesheets)
        const links = doc.querySelectorAll('link[rel="stylesheet"]');
        links.forEach(link => {
            const newLink = document.createElement('link');
            Array.from(link.attributes).forEach(attr => {
                newLink.setAttribute(attr.name, attr.value);
            });
            shadowRoot.appendChild(newLink);
        });

        // Inject HTML body content (without scripts)
        const bodyClone = doc.body.cloneNode(true);
        const scripts = bodyClone.querySelectorAll('script');
        scripts.forEach(script => script.remove());
        shadowRoot.innerHTML = bodyClone.innerHTML;

        // Make shadowRoot globally accessible for script execution
        window.__toolShadowRoot__ = shadowRoot;
        
        // Execute scripts with proper scope
        const originalScripts = doc.body.querySelectorAll('script');
        console.log('Found', originalScripts.length, 'scripts to execute');
        
        originalScripts.forEach((script) => {
            const code = script.textContent;
            console.log('Script code length:', code.length);
            
            if (code.trim()) {
                executeScript(shadowRoot, code);
                console.log('Script executed');
            }
        });
        
        // Clean up global variable
        delete window.__toolShadowRoot__;

        // Wait for tool to initialize
        await new Promise(resolve => setTimeout(resolve, 300));

        // Listen for tool-to-viewer events
        document.addEventListener('tool-ready', (e) => {
            console.log('Tool is ready:', e.detail);
        });

        document.addEventListener('tool-stateChanged', (e) => {
            console.log('Tool state changed:', e.detail);
        });

        document.addEventListener('tool-error', (e) => {
            console.error('Tool error:', e.detail);
        });

        // Set up control panel buttons
        setupControlPanel();

        // Hide loading and show content
        loading.style.display = 'none';
        toolContentWrapper.style.display = 'block';
        toolControls.style.display = 'flex';
        toolLoading.style.display = 'none';

    } catch (err) {
        console.error('Error loading tool:', err);
        loading.style.display = 'none';
        toolContentWrapper.style.display = 'none';
        toolControls.style.display = 'none';
        error.style.display = 'flex';
        errorMessage.textContent = err.message || 'Failed to load the tool. Please try again.';
    }
}

// Set up control panel event listeners
function setupControlPanel() {
    const btnHelp = document.getElementById('btn-help');
    const btnReset = document.getElementById('btn-reset');
    const btnRefresh = document.getElementById('btn-refresh');
    const menuBtn = document.getElementById('tool-menu-btn');
    const optionsMenu = document.getElementById('tool-options-menu');

    // Toggle menu visibility
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isMenuVisible = optionsMenu.classList.contains('show');
        optionsMenu.classList.toggle('show');
        menuBtn.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!optionsMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            optionsMenu.classList.remove('show');
            menuBtn.classList.remove('active');
        }
    });

    // Menu option clicks
    btnHelp.addEventListener('click', () => {
        ToolAPI.openHelp();
        optionsMenu.classList.remove('show');
        menuBtn.classList.remove('active');
    });

    btnReset.addEventListener('click', () => {
        ToolAPI.reset();
        optionsMenu.classList.remove('show');
        menuBtn.classList.remove('active');
    });

    btnRefresh.addEventListener('click', () => {
        ToolAPI.refresh();
        optionsMenu.classList.remove('show');
        menuBtn.classList.remove('active');
    });
}

// Load tool when page loads
document.addEventListener('DOMContentLoaded', loadTool);