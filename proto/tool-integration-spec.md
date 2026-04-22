# Epistemic Toolbox Tool Specification

## Overview

This specification defines the requirements and best practices for creating tools compatible with the Epistemic Toolbox viewer system. Tools are self-contained HTML files that are loaded dynamically into a Shadow DOM environment, providing CSS isolation while enabling bidirectional communication with the viewer.

## Architecture

### Loading Process

1. **URL Parameter**: Tools are loaded via the `?tool=name` parameter in the viewer URL
2. **File Location**: Tool files must be located at `/tool/src/{tool-name}.html`
3. **Sanitization**: Tool names are sanitized to prevent directory traversal (alphanumeric, hyphens, underscores only)
4. **Shadow DOM**: Tools are injected into a Shadow DOM for style isolation
5. **Script Execution**: Scripts are extracted and executed with access to the Shadow DOM

### Communication Protocol

The tool and viewer communicate bidirectionally using CustomEvents that cross the Shadow DOM boundary.

## Tool Requirements

### File Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tool Name - Epistemic Toolbox</title>
    <style>
        /* Tool-specific styles */
    </style>
</head>
<body>
    <!-- Tool HTML content -->
    
    <script>
        // Tool JavaScript
    </script>
</body>
</html>
```

### Required Events (Tool → Viewer)

Tools MUST emit these events to communicate with the viewer:

  #### `tool-ready`

**Purpose**: Signals that the tool is fully loaded and initialized

**When to emit**: After all scripts have executed and the tool is ready for interaction

**Event Detail**:
```javascript
{
    name: string,           // Tool name
    version: string,        // Tool version
    description?: string,  // Optional description
    capabilities?: string[] // Optional list of capabilities
}
```

**Example**:
```javascript
document.dispatchEvent(new CustomEvent('tool-ready', {
    detail: {
        name: 'My Tool',
        version: '1.0.0',
        description: 'A tool for data analysis',
        capabilities: ['export', 'filter', 'visualize']
    },
    bubbles: true,
    composed: true
}));
```

#### `tool-registerCommands`

**Purpose**: Declares the tool's available commands to the viewer for dynamic UI generation

**When to emit**: During initialization, typically before or immediately after `tool-ready`

**Event Detail**:
```javascript
{
    commands: Array<{
        toolName: string,      // Name of the tool (for identification)
        command: string,       // Command name (will be prefixed with 'tool-')
        icon: string,          // SVG icon string or icon identifier
        label?: string,        // Display label for the command (defaults to command)
        description?: string,  // Optional tooltip/description
        data?: any            // Optional data to pass when command is triggered
    }>
}
```

**Example**:
```javascript
document.dispatchEvent(new CustomEvent('tool-registerCommands', {
    detail: {
        commands: [
            {
                toolName: 'Data Analyzer',
                command: 'exportData',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
                label: 'Export Data',
                description: 'Export current data to file',
                data: { format: 'json' }
            },
            {
                toolName: 'Data Analyzer',
                command: 'filterData',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
                label: 'Filter Data',
                description: 'Apply filters to dataset'
            },
            {
                toolName: 'Data Analyzer',
                command: 'showSettings',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
                label: 'Settings',
                description: 'Configure tool options'
            }
        ]
    },
    bubbles: true,
    composed: true
}));
```

**Icon Format**:
- Icons should be provided as SVG strings
- Use `viewBox="0 0 24 24"` for consistency
- Set `fill="none"` and `stroke="currentColor"` for theming
- Use `stroke-width="2"` for consistent line weight
- The viewer will apply the current theme color to `currentColor`

#### `tool-stateChanged`

**Purpose**: Reports significant state changes to the viewer

**When to emit**: After reset, refresh, or major state updates

**Event Detail**:
```javascript
{
    action: string,      // Action that caused the change (e.g., 'reset', 'refresh', 'update')
    [stateData]: any     // Additional state-specific data
}
```

**Example**:
```javascript
document.dispatchEvent(new CustomEvent('tool-stateChanged', {
    detail: { 
        action: 'reset',
        timestamp: Date.now(),
        itemCount: 0
    },
    bubbles: true,
    composed: true
}));
```

#### `tool-error`

**Purpose**: Reports errors to the viewer

**When to emit**: When unrecoverable errors occur

**Event Detail**:
```javascript
{
    message: string,      // Error message
    [errorDetails]: any   // Additional error context
}
```

**Example**:
```javascript
document.dispatchEvent(new CustomEvent('tool-error', {
    detail: { 
        message: 'Failed to load data',
        code: 'DATA_LOAD_ERROR',
        timestamp: Date.now()
    },
    bubbles: true,
    composed: true
}));
```

### Required Event Listeners (Viewer → Tool)

Tools MUST listen for these commands from the viewer:

#### `tool-openHelp`

**Purpose**: Opens the tool's help/documentation

**Detail**: No additional data required

**Implementation**:
```javascript
document.addEventListener('tool-openHelp', (e) => {
    // Show help section/modal
    toggleHelp();
});
```

#### `tool-reset`

**Purpose**: Resets the tool to its initial state

**Detail**: No additional data required

**Implementation**:
```javascript
document.addEventListener('tool-reset', (e) => {
    // Reset tool state
    resetTool();
    
    // Notify viewer
    document.dispatchEvent(new CustomEvent('tool-stateChanged', {
        detail: { action: 'reset' },
        bubbles: true,
        composed: true
    }));
});
```

#### `tool-refresh`

**Purpose**: Refreshes or reloads tool data

**Detail**: No additional data required

**Implementation**:
```javascript
document.addEventListener('tool-refresh', (e) => {
    // Refresh tool data
    refreshTool();
    
    // Notify viewer
    document.dispatchEvent(new CustomEvent('tool-stateChanged', {
        detail: { action: 'refresh' },
        bubbles: true,
        composed: true
    }));
});
```

### Custom Commands

Tools can support custom commands following the pattern `tool-{commandName}`:

**Example**:
```javascript
document.addEventListener('tool-exportData', (e) => {
    const format = e.detail.format || 'json';
    exportData(format);
});
```

## Shadow DOM Access

The viewer provides access to the Shadow DOM through a global variable:

```javascript
const root = window.__toolShadowRoot__;
```

**Important**: This variable is set by the viewer before script execution and is cleaned up after all scripts have run.

### DOM Element Access

Always use the Shadow DOM reference to query elements:

```javascript
// Get elements from Shadow DOM
const button = root.getElementById('my-button');
const container = root.querySelector('.container');

// Set up event listeners
if (button) {
    button.addEventListener('click', handleClick);
}
```

### Best Practices for DOM Access

1. **Null Checks**: Always check if elements exist before accessing them
2. **Lazy Loading**: Create helper functions to get elements when needed
3. **Error Handling**: Gracefully handle missing elements

```javascript
function getToolElements() {
    if (!root) return null;
    
    return {
        button: root.getElementById('my-button'),
        display: root.getElementById('display'),
        container: root.querySelector('.container')
    };
}

const elements = getToolElements();
if (elements?.button) {
    elements.button.addEventListener('click', handleClick);
}
```

## State Management

### Initial State Pattern

Define an initial state object for easy reset:

```javascript
const initialState = {
    counter: 0,
    items: [],
    lastAction: null,
    timestamp: Date.now()
};

let toolState = { ...initialState };
```

### Reset Function

```javascript
function resetTool() {
    toolState = { ...initialState, timestamp: Date.now() };
    updateUI();
    
    // Notify viewer
    document.dispatchEvent(new CustomEvent('tool-stateChanged', {
        detail: { action: 'reset' },
        bubbles: true,
        composed: true
    }));
}
```

### UI Updates

```javascript
function updateUI() {
    const elements = getToolElements();
    if (!elements) return;
    
    if (elements.display) {
        elements.display.textContent = toolState.counter;
    }
}
```

## Styling Guidelines

### CSS Isolation

Since tools run in Shadow DOM, styles are automatically isolated. However, follow these guidelines:

1. **Avoid Global Selectors**: Don't use `body`, `html`, or other global selectors
2. **Use Specific Selectors**: Prefer class selectors over tag selectors
3. **Color Variables**: Use the viewer's color variables for consistency:

```css
:root {
    --bg-deep: #080a0f;
    --bg-primary: #0d1117;
    --bg-elevated: #151b24;
    --fg-primary: #f0f4f8;
    --fg-secondary: #8b95a5;
    --fg-muted: #4a5568;
    --accent-primary: #d4a84b;
    --accent-secondary: #5ec4b2;
}
```

### Responsive Design

Tools should be responsive and work within the viewer's container:

```css
.tool-container {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
}

@media (max-width: 768px) {
    .tool-container {
        padding: 0.5rem;
    }
}
```

## Initialization Pattern

### Complete Initialization Example

```javascript
// ============================================
// GET SHADOW ROOT REFERENCE
// ============================================
const root = window.__toolShadowRoot__;

// ============================================
// STATE MANAGEMENT
// ============================================
const initialState = {
    data: [],
    selected: null,
    timestamp: Date.now()
};

let toolState = { ...initialState };

// ============================================
// DOM ELEMENTS
// ============================================
let elements = null;

function getToolElements() {
    if (!root) return null;
    
    if (!elements) {
        elements = {
            container: root.getElementById('container'),
            button: root.getElementById('action-btn'),
            display: root.getElementById('display')
        };
    }
    
    return elements;
}

// ============================================
// UI FUNCTIONS
// ============================================
function updateUI() {
    const els = getToolElements();
    if (!els) return;
    
    if (els.display) {
        els.display.textContent = JSON.stringify(toolState.data);
    }
}

// ============================================
// EVENT LISTENERS (VIEWER → TOOL)
// ============================================
document.addEventListener('tool-openHelp', (e) => {
    toggleHelp();
});

document.addEventListener('tool-reset', (e) => {
    toolState = { ...initialState, timestamp: Date.now() };
    updateUI();
    
    document.dispatchEvent(new CustomEvent('tool-stateChanged', {
        detail: { action: 'reset' },
        bubbles: true,
        composed: true
    }));
});

document.addEventListener('tool-refresh', (e) => {
    toolState.timestamp = Date.now();
    updateUI();
    
    document.dispatchEvent(new CustomEvent('tool-stateChanged', {
        detail: { action: 'refresh' },
        bubbles: true,
        composed: true
    }));
});

// ============================================
// INTERACTIVE ELEMENTS
// ============================================
function setupInteractiveElements() {
    const els = getToolElements();
    if (!els) return;
    
    if (els.button) {
        els.button.addEventListener('click', () => {
            toolState.data.push({ id: Date.now() });
            updateUI();
        });
    }
}

// ============================================
// COMMAND REGISTRATION
// ============================================
function registerToolCommands() {
    document.dispatchEvent(new CustomEvent('tool-registerCommands', {
        detail: {
            commands: [
                {
                    toolName: 'My Tool',
                    command: 'exportData',
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
                    label: 'Export Data',
                    description: 'Export current data to file',
                    data: { format: 'json' }
                },
                {
                    toolName: 'My Tool',
                    command: 'clearData',
                    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
                    label: 'Clear Data',
                    description: 'Clear all data from the tool'
                }
            ]
        },
        bubbles: true,
        composed: true
    });
}

// ============================================
// CUSTOM COMMAND HANDLERS
// ============================================
document.addEventListener('tool-exportData', (e) => {
    const format = e.detail.format || 'json';
    console.log('Exporting data in format:', format);
    // Implement export logic
    exportData(format);
});

document.addEventListener('tool-clearData', (e) => {
    console.log('Clearing data');
    toolState.data = [];
    updateUI();
    
    document.dispatchEvent(new CustomEvent('tool-stateChanged', {
        detail: { action: 'clear', itemCount: 0 },
        bubbles: true,
        composed: true
    }));
});

// ============================================
// INITIALIZATION
// ============================================
function initializeTool() {
    console.log('Initializing tool...');
    
    // Set up interactive elements
    setupInteractiveElements();
    
    // Register commands with viewer (before tool-ready)
    registerToolCommands();
    
    // Update UI
    updateUI();
    
    // Notify viewer
    document.dispatchEvent(new CustomEvent('tool-ready', {
        detail: {
            name: 'My Tool',
            version: '1.0.0',
            description: 'A sample tool',
            capabilities: ['reset', 'refresh', 'help', 'export', 'clear']
        },
        bubbles: true,
        composed: true
    }));
    
    console.log('Tool initialized');
}

// Initialize immediately
initializeTool();
```

## Best Practices

### 1. Event Handling

- Always use `bubbles: true` and `composed: true` for events to cross Shadow DOM boundary
- Include relevant metadata in event detail objects
- Emit `tool-ready` after all initialization is complete

### 2. Error Handling

```javascript
try {
    // Tool logic
} catch (err) {
    console.error('Tool error:', err);
    
    document.dispatchEvent(new CustomEvent('tool-error', {
        detail: { 
            message: err.message,
            stack: err.stack
        },
        bubbles: true,
        composed: true
    }));
}
```

### 3. Performance

- Debounce rapid UI updates
- Use `requestAnimationFrame` for animations
- Clean up event listeners when appropriate

### 4. Accessibility

- Use semantic HTML elements
- Provide ARIA labels for interactive elements
- Ensure keyboard navigation works

### 5. Code Organization

- Separate concerns: state, UI, events
- Use clear function names
- Add comments for complex logic

## Testing Checklist

Before deploying a tool, verify:

- [ ] Tool loads without errors in the viewer
- [ ] `tool-ready` event is emitted on initialization
- [ ] `tool-reset` command resets tool state
- [ ] `tool-refresh` command refreshes tool data
- [ ] `tool-openHelp` command shows help section
- [ ] `tool-stateChanged` events are emitted appropriately
- [ ] `tool-error` events are emitted on errors
- [ ] UI updates correctly after state changes
- [ ] Tool is responsive on different screen sizes
- [ ] Styles are properly isolated
- [ ] All interactive elements work correctly
- [ ] Tool works in Shadow DOM environment

## Example Tool Structure

See `tool/src/example.html` for a complete reference implementation demonstrating:
- State management
- Event listeners
- UI updates
- Help section
- Error handling
- Custom commands

## Viewer Integration

The viewer (`tool/view.html` + `tool/js/view.js`) provides:

1. **Loading**: Fetches and parses tool HTML
2. **Shadow DOM**: Creates isolated environment
3. **Script Execution**: Executes tool scripts with proper scope
4. **Control Panel**: Provides dynamic command dropdown based on tool registration
5. **Error Handling**: Displays error messages if tool fails to load
6. **Event Logging**: Logs tool events to console for debugging

### Viewer Command Handling

The viewer listens for the `tool-registerCommands` event and dynamically populates the control panel dropdown with the tool's declared commands.

**Viewer Implementation Pattern**:

```javascript
// In viewer (tool/js/view.js)

// Store registered commands
let registeredCommands = [];

// Listen for command registration
document.addEventListener('tool-registerCommands', (e) => {
    const { commands } = e.detail;
    registeredCommands = commands;
    
    // Clear existing dropdown items (except standard ones)
    clearCustomCommands();
    
    // Add custom commands to dropdown
    commands.forEach(cmd => {
        addCommandToDropdown(cmd);
    });
    
    console.log('Registered commands:', commands);
});

// Add command to dropdown menu
function addCommandToDropdown(cmd) {
    const menu = document.getElementById('tool-options-menu');
    
    // Create button element
    const btn = document.createElement('button');
    btn.className = 'tool-option-btn';
    btn.title = cmd.description || cmd.label || cmd.command;
    
    // Set button content with icon and label
    btn.innerHTML = `
        ${cmd.icon}
        <span>${cmd.label || cmd.command}</span>
    `;
    
    // Add click handler
    btn.addEventListener('click', () => {
        // Dispatch command to tool
        ToolAPI.sendCommand(cmd.command, cmd.data || {});
        
        // Close menu
        const optionsMenu = document.getElementById('tool-options-menu');
        const menuBtn = document.getElementById('tool-menu-btn');
        optionsMenu.classList.remove('show');
        menuBtn.classList.remove('active');
    });
    
    // Insert before the divider (if exists) or append
    const divider = menu.querySelector('.tool-option-divider');
    if (divider) {
        menu.insertBefore(btn, divider);
    } else {
        menu.appendChild(btn);
    }
}

// Clear custom commands from dropdown
function clearCustomCommands() {
    const menu = document.getElementById('tool-options-menu');
    const customButtons = menu.querySelectorAll('.tool-option-btn[data-custom="true"]');
    customButtons.forEach(btn => btn.remove());
}
```

**Standard Commands**:

The viewer always provides these standard commands in the dropdown:
- **Help**: Dispatches `tool-openHelp`
- **Reset**: Dispatches `tool-reset`
- **Refresh**: Dispatches `tool-refresh`

Custom commands registered by the tool are added above a divider in the dropdown menu.

**Command Dispatch Flow**:

1. Tool emits `tool-registerCommands` with command definitions
2. Viewer receives event and stores command definitions
3. Viewer dynamically creates dropdown buttons for each command
4. User clicks a command button in the dropdown
5. Viewer dispatches `tool-{commandName}` event to the tool
6. Tool's event listener handles the command
7. Tool optionally emits `tool-stateChanged` to notify viewer

**Example Flow**:

```javascript
// Tool registers commands
document.dispatchEvent(new CustomEvent('tool-registerCommands', {
    detail: {
        commands: [
            {
                toolName: 'Data Analyzer',
                command: 'exportData',
                icon: '<svg>...</svg>',
                label: 'Export Data',
                description: 'Export current data to file',
                data: { format: 'json' }
            }
        ]
    },
    bubbles: true,
    composed: true
}));

// Viewer creates dropdown button with "Export Data" label and icon

// User clicks "Export Data" button

// Viewer dispatches event
ToolAPI.sendCommand('exportData', { format: 'json' });

// Tool handles the command
document.addEventListener('tool-exportData', (e) => {
    const format = e.detail.format;
    exportData(format);
});
```

## Troubleshooting

### Tool Not Loading

- Check file path: `/tool/src/{tool-name}.html`
- Verify tool name in URL parameter
- Check browser console for errors

### Events Not Working

- Ensure `bubbles: true` and `composed: true` are set
- Verify event names match exactly (case-sensitive)
- Check that `window.__toolShadowRoot__` is accessible

### Styles Not Applying

- Remember styles are isolated in Shadow DOM
- Check that styles are in `<style>` tags
- Verify CSS selectors are specific enough

### DOM Elements Not Found

- Use `root.getElementById()` instead of `document.getElementById()`
- Ensure elements exist before script execution
- Add null checks for all DOM queries

## Version History

- **1.0.0** (2026-04-09): Initial specification

## References

- Example Tool: `tool/src/example.html`
- Viewer: `tool/view.html`
- Viewer Logic: `tool/js/view.js`
