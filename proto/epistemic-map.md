# Epistemic Map

A map of all of the instances of:

| **Concept** | **Description** | **Instance(s)** |
| --- | --- | --- |
| **Epistemic Artifact** | Structured object that encodes claims, constraints, or distributions over reality; the primary carrier of semantic content. | Propositions, numbers, datasets, differential equations, probabilistic models, Hypergraphs |
| **Epistemic Tool** | Formal or procedural mechanism used to construct, transform, or validate epistemic artifacts. | Algebraic manipulation, statistical inference, optimization algorithms, simulation methods, measurement procedures |
| **Epistemic Agent** | Entity that performs epistemic operations by applying tools to artifacts. | Scientist, analyst, research institution, machine learning system, automated pipeline |
| **Epistemic Process (Activity)** | Ordered sequence of tool applications over time; defines the dynamics of knowledge construction. | Scientific method, Bayesian updating loop, training pipeline, experimental cycle |
| **Epistemic Standard** | Normative criteria used to evaluate validity, correctness, or acceptability of artifacts and processes. | Logical consistency, statistical significance, reproducibility, robustness, falsifiability |
| **Epistemic Representation** | Encoding format or substrate in which artifacts are expressed; constrains manipulation and interpretation. | Symbolic notation, matrices, tensors, Hypergraphs, data structures |
| **Epistemic Domain** | Segment of reality that the epistemic practice targets or models. | Physical systems, biological systems, social systems, computational systems |
| **Epistemic Objective** | Goal or optimization criterion guiding the construction and use of artifacts. | Prediction, explanation, control, compression, decision support |
| **Epistemic Constraint** | Limitation that bounds what can be known or inferred within the system. | Noise, limited data, computational complexity, identifiability issues, measurement error |
| **Epistemic Infrastructure** | Supporting environment that enables storage, computation, measurement, and communication of artifacts. | Sensors, laboratories, software systems, databases, notebooks, scientific publications |

## Data

### Data Schema

Nodes:

```json
{
  "id": "string",
  "name": "string",
  "type": ["string"],
  "description": "string",
  "domain": "string",
  "domain": "string",

  "roles": ["string"],

  "specific": {},

  "edges": [
    {
      "type": "EDGE_TYPE",
      "node": "node_id",
      "meta": {}
    }
  ],

  "meta": {
    "tags": ["string"],
    "confidence": "number",
    "source": "string"
  }
}
```

### Sample Data

```json
{
  "nodes": [
    {
      "id": "art_prop_001",
      "name": "Proposition: F=ma",
      "type": "EpistemicArtifact",
      "subtype": "Proposition",
      "description": "Newton's second law of motion as a propositional claim about force, mass, and acceleration.",
      "roles": ["input", "output", "target"],
      "specific": {},
      "edges": [
        { "type": "REPRESENTS", "node": "rep_symbolic_001", "meta": {} },
        { "type": "EVALUATES", "node": "std_logical_001", "meta": {} },
        { "type": "TARGETS", "node": "dom_physical_001", "meta": {} },
        { "type": "CONSTRAINS", "node": "con_noise_001", "meta": { "note": "Measurement noise affects verification" } }
      ],
      "meta": { "tags": ["physics", "law"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "art_num_001",
      "name": "Number: π",
      "type": "EpistemicArtifact",
      "subtype": "Mathematical Constant",
      "description": "The ratio of a circle's circumference to its diameter, a fundamental mathematical constant.",
      "roles": ["input", "output"],
      "specific": {},
      "edges": [
        { "type": "REPRESENTS", "node": "rep_symbolic_001", "meta": {} },
        { "type": "TARGETS", "node": "dom_physical_001", "meta": {} }
      ],
      "meta": { "tags": ["mathematics", "constant"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "art_dataset_001",
      "name": "Dataset: MNIST",
      "type": "EpistemicArtifact",
      "subtype": "Image Dataset",
      "description": "Handwritten digit images for training machine learning models.",
      "roles": ["input", "training"],
      "specific": {},
      "edges": [
        { "type": "REPRESENTS", "node": "rep_matrices_001", "meta": {} },
        { "type": "REPRESENTS", "node": "rep_datastruct_001", "meta": {} },
        { "type": "EVALUATES", "node": "std_robust_001", "meta": {} },
        { "type": "TARGETS", "node": "dom_comp_001", "meta": {} },
        { "type": "CONSTRAINS", "node": "con_limdata_001", "meta": {} },
        { "type": "SUPPORTED_BY", "node": "inf_db_001", "meta": {} }
      ],
      "meta": { "tags": ["vision", "benchmark"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "art_de_001",
      "name": "Differential Equation: Heat Equation",
      "type": "EpistemicArtifact",
      "subtype": "Partial Differential Equation",
      "description": "Describes the distribution of heat in a given region over time.",
      "roles": ["model", "output"],
      "specific": {},
      "edges": [
        { "type": "REPRESENTS", "node": "rep_symbolic_001", "meta": {} },
        { "type": "TARGETS", "node": "dom_physical_001", "meta": {} },
        { "type": "OPTIMIZES_FOR", "node": "obj_pred_001", "meta": {} }
      ],
      "meta": { "tags": ["physics", "PDE"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "art_pm_001",
      "name": "Probabilistic Model: Gaussian Mixture",
      "type": "EpistemicArtifact",
      "subtype": "Generative Model",
      "description": "Models data as a mixture of Gaussian distributions, used for clustering and density estimation.",
      "roles": ["model", "output"],
      "specific": {},
      "edges": [
        { "type": "REPRESENTS", "node": "rep_tensors_001", "meta": {} },
        { "type": "EVALUATES", "node": "std_robust_001", "meta": {} },
        { "type": "TARGETS", "node": "dom_bio_001", "meta": {} },
        { "type": "CONSTRAINS", "node": "con_id_001", "meta": {} }
      ],
      "meta": { "tags": ["statistics", "unsupervised"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "art_hypergraph_001",
      "name": "Hypergraph: Epistemic Map",
      "type": "EpistemicArtifact",
      "subtype": "Structural Artifact",
      "description": "Full directed, typed network of epistemic instances including all nodes and edges defined here.",
      "roles": ["meta", "representation"],
      "specific": {},
      "edges": [
        { "type": "REPRESENTS", "node": "rep_hypergraph_001", "meta": {} },
        { "type": "EVALUATES", "node": "std_consistency_001", "meta": {} },
        { "type": "SUPPORTED_BY", "node": "inf_soft_001", "meta": {} }
      ],
      "meta": { "tags": ["meta", "structure"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "art_statresult_001",
      "name": "Statistical Result: p-value",
      "type": "EpistemicArtifact",
      "subtype": "Inference Output",
      "description": "Probability of observing data given null hypothesis, used for significance testing.",
      "roles": ["output", "evidence"],
      "specific": {},
      "edges": [
        { "type": "EVALUATES", "node": "std_signif_001", "meta": {} },
        { "type": "TARGETS", "node": "dom_bio_001", "meta": {} }
      ],
      "meta": { "tags": ["statistics", "inference"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "art_optmodel_001",
      "name": "Optimized Neural Network Weights",
      "type": "EpistemicArtifact",
      "subtype": "Model Parameters",
      "description": "Learned weights of a neural network after optimization.",
      "roles": ["output", "model"],
      "specific": {},
      "edges": [
        { "type": "OPTIMIZES_FOR", "node": "obj_ctrl_001", "meta": {} },
        { "type": "TARGETS", "node": "dom_comp_001", "meta": {} }
      ],
      "meta": { "tags": ["deep learning", "weights"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "tool_alg_001",
      "name": "Algebraic Manipulation",
      "type": "EpistemicTool",
      "subtype": "Symbolic Solver",
      "description": "Transform symbolic expressions using algebraic rules.",
      "roles": ["transformer"],
      "specific": {
        "input_types": ["Proposition", "Number"],
        "output_types": ["Proposition", "Number"],
        "algorithmic_class": "Symbolic",
        "deterministic": true
      },
      "edges": [
        { "type": "OPERATES_ON", "node": "art_prop_001", "meta": {} },
        { "type": "OPERATES_ON", "node": "art_num_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_prop_001", "meta": { "derivation": "simplified" } }
      ],
      "meta": { "tags": ["algebra", "symbolic"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "tool_statinf_001",
      "name": "Statistical Inference",
      "type": "EpistemicTool",
      "subtype": "Frequentist/Bayesian",
      "description": "Draw conclusions about populations from sample data.",
      "roles": ["analyzer"],
      "specific": {
        "input_types": ["Dataset"],
        "output_types": ["StatisticalResult"],
        "algorithmic_class": "Probabilistic",
        "deterministic": false
      },
      "edges": [
        { "type": "OPERATES_ON", "node": "art_dataset_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_statresult_001", "meta": {} },
        { "type": "OPTIMIZES_FOR", "node": "obj_pred_001", "meta": {} }
      ],
      "meta": { "tags": ["statistics", "inference"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "tool_opt_001",
      "name": "Gradient Descent",
      "type": "EpistemicTool",
      "subtype": "Optimization Algorithm",
      "description": "Iteratively minimizes a loss function by following the negative gradient.",
      "roles": ["optimizer"],
      "specific": {
        "input_types": ["ProbabilisticModel", "Dataset"],
        "output_types": ["Model Parameters"],
        "algorithmic_class": "Numerical Optimization",
        "deterministic": false
      },
      "edges": [
        { "type": "OPERATES_ON", "node": "art_pm_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_optmodel_001", "meta": {} },
        { "type": "OPTIMIZES_FOR", "node": "obj_ctrl_001", "meta": {} }
      ],
      "meta": { "tags": ["optimization", "gradient"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "tool_sim_001",
      "name": "Monte Carlo Simulation",
      "type": "EpistemicTool",
      "subtype": "Simulation Method",
      "description": "Approximate complex systems using repeated random sampling.",
      "roles": ["simulator"],
      "specific": {
        "input_types": ["DifferentialEquation", "ProbabilisticModel"],
        "output_types": ["Number", "StatisticalResult"],
        "algorithmic_class": "Stochastic",
        "deterministic": false
      },
      "edges": [
        { "type": "OPERATES_ON", "node": "art_de_001", "meta": {} },
        { "type": "OPERATES_ON", "node": "art_pm_001", "meta": {} },
        { "type": "OPTIMIZES_FOR", "node": "obj_pred_001", "meta": {} }
      ],
      "meta": { "tags": ["simulation", "stochastic"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "tool_meas_001",
      "name": "LIGO Measurement Procedure",
      "type": "EpistemicTool",
      "subtype": "Physical Measurement",
      "description": "Procedure to detect gravitational waves using laser interferometry.",
      "roles": ["sensor"],
      "specific": {
        "input_types": ["PhysicalSystems"],
        "output_types": ["Dataset"],
        "algorithmic_class": "Physical Sensing",
        "deterministic": true
      },
      "edges": [
        { "type": "PRODUCES", "node": "art_dataset_001", "meta": {} },
        { "type": "TARGETS", "node": "dom_physical_001", "meta": {} },
        { "type": "SUPPORTED_BY", "node": "inf_lab_001", "meta": {} }
      ],
      "meta": { "tags": ["physics", "measurement"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "agent_sci_001",
      "name": "Scientist",
      "type": "EpistemicAgent",
      "subtype": "Human Researcher",
      "description": "Individual who formulates hypotheses, designs experiments, and interprets results.",
      "roles": ["executor", "creator"],
      "specific": {
        "capabilities": ["hypothesis formation", "experimental design", "data analysis", "theoretical reasoning"],
        "cognitive_type": "human"
      },
      "edges": [
        { "type": "USES", "node": "tool_alg_001", "meta": {} },
        { "type": "USES", "node": "tool_statinf_001", "meta": {} },
        { "type": "USES", "node": "tool_opt_001", "meta": {} },
        { "type": "USES", "node": "tool_sim_001", "meta": {} },
        { "type": "USES", "node": "tool_meas_001", "meta": {} },
        { "type": "PART_OF", "node": "proc_sci_method_001", "meta": {} }
      ],
      "meta": { "tags": ["human", "researcher"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "agent_analyst_001",
      "name": "Data Analyst",
      "type": "EpistemicAgent",
      "subtype": "Human Analyst",
      "description": "Professional who cleans, models, and interprets data to support decisions.",
      "roles": ["executor"],
      "specific": {
        "capabilities": ["data wrangling", "statistical modeling", "visualization"],
        "cognitive_type": "human"
      },
      "edges": [
        { "type": "USES", "node": "tool_statinf_001", "meta": {} },
        { "type": "USES", "node": "tool_opt_001", "meta": {} }
      ],
      "meta": { "tags": ["analyst", "data"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "agent_ml_001",
      "name": "Machine Learning System",
      "type": "EpistemicAgent",
      "subtype": "Neural Network Trainer",
      "description": "Automated system that learns from data using gradient-based optimization.",
      "roles": ["automated executor"],
      "specific": {
        "capabilities": ["backpropagation", "batch processing", "hyperparameter tuning"],
        "cognitive_type": "machine"
      },
      "edges": [
        { "type": "USES", "node": "tool_opt_001", "meta": {} },
        { "type": "USES", "node": "tool_statinf_001", "meta": {} },
        { "type": "PART_OF", "node": "proc_train_001", "meta": {} }
      ],
      "meta": { "tags": ["ML", "automation"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_sci_method_001",
      "name": "Scientific Method",
      "type": "EpistemicProcess",
      "subtype": "Methodology",
      "description": "Iterative cycle of hypothesis, experiment, analysis, and conclusion.",
      "roles": ["workflow"],
      "specific": {
        "steps": ["proc_hypothesis_001", "proc_datacollection_001", "proc_dataanalysis_001", "proc_interpretation_001"],
        "composition_type": "iterative"
      },
      "edges": [
        { "type": "USES", "node": "tool_alg_001", "meta": {} },
        { "type": "USES", "node": "tool_statinf_001", "meta": {} },
        { "type": "USES", "node": "tool_meas_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_prop_001", "meta": {} },
        { "type": "TARGETS", "node": "dom_physical_001", "meta": {} },
        { "type": "OPTIMIZES_FOR", "node": "obj_expl_001", "meta": {} },
        { "type": "EVALUATES", "node": "std_falsify_001", "meta": {} }
      ],
      "meta": { "tags": ["science", "cycle"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_hypothesis_001",
      "name": "Hypothesis Formulation",
      "type": "EpistemicProcess",
      "subtype": "Creative Step",
      "description": "Proposing a testable explanation based on prior knowledge.",
      "roles": ["subprocess"],
      "specific": { "steps": [], "composition_type": "sequential" },
      "edges": [
        { "type": "PART_OF", "node": "proc_sci_method_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_prop_001", "meta": {} }
      ],
      "meta": { "tags": ["hypothesis"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_datacollection_001",
      "name": "Data Collection",
      "type": "EpistemicProcess",
      "subtype": "Experimental Step",
      "description": "Gathering measurements or observations.",
      "roles": ["subprocess"],
      "specific": { "steps": [], "composition_type": "sequential" },
      "edges": [
        { "type": "PART_OF", "node": "proc_sci_method_001", "meta": {} },
        { "type": "USES", "node": "tool_meas_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_dataset_001", "meta": {} }
      ],
      "meta": { "tags": ["experiment"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_dataanalysis_001",
      "name": "Data Analysis",
      "type": "EpistemicProcess",
      "subtype": "Analytical Step",
      "description": "Applying statistical and computational tools to extract insights.",
      "roles": ["subprocess"],
      "specific": { "steps": [], "composition_type": "sequential" },
      "edges": [
        { "type": "PART_OF", "node": "proc_sci_method_001", "meta": {} },
        { "type": "USES", "node": "tool_statinf_001", "meta": {} },
        { "type": "USES", "node": "tool_opt_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_statresult_001", "meta": {} }
      ],
      "meta": { "tags": ["analysis"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_interpretation_001",
      "name": "Interpretation",
      "type": "EpistemicProcess",
      "subtype": "Synthesis Step",
      "description": "Drawing conclusions and relating results to theory.",
      "roles": ["subprocess"],
      "specific": { "steps": [], "composition_type": "sequential" },
      "edges": [
        { "type": "PART_OF", "node": "proc_sci_method_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_prop_001", "meta": {} }
      ],
      "meta": { "tags": ["interpretation"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_bayes_001",
      "name": "Bayesian Updating Loop",
      "type": "EpistemicProcess",
      "subtype": "Iterative Inference",
      "description": "Update prior beliefs with new evidence to form posterior.",
      "roles": ["workflow"],
      "specific": {
        "steps": ["proc_prior_001", "proc_likelihood_001", "proc_posterior_001"],
        "composition_type": "iterative"
      },
      "edges": [
        { "type": "USES", "node": "tool_statinf_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_pm_001", "meta": {} },
        { "type": "OPTIMIZES_FOR", "node": "obj_pred_001", "meta": {} }
      ],
      "meta": { "tags": ["bayesian", "inference"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_train_001",
      "name": "Training Pipeline",
      "type": "EpistemicProcess",
      "subtype": "Machine Learning Pipeline",
      "description": "Sequence of data loading, model training, and evaluation.",
      "roles": ["workflow"],
      "specific": {
        "steps": ["proc_dataload_001", "proc_modeltrain_001", "proc_eval_001"],
        "composition_type": "sequential"
      },
      "edges": [
        { "type": "USES", "node": "tool_opt_001", "meta": {} },
        { "type": "USES", "node": "tool_statinf_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_optmodel_001", "meta": {} },
        { "type": "TARGETS", "node": "dom_comp_001", "meta": {} },
        { "type": "OPTIMIZES_FOR", "node": "obj_ctrl_001", "meta": {} }
      ],
      "meta": { "tags": ["ML", "pipeline"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "std_logical_001",
      "name": "Logical Consistency",
      "type": "EpistemicStandard",
      "subtype": "Formal Criterion",
      "description": "Absence of contradictions within a set of propositions.",
      "roles": ["quality metric"],
      "specific": {
        "criterion": "No contradictory statements",
        "threshold": null,
        "evaluation_method": "Formal logic verification"
      },
      "edges": [
        { "type": "EVALUATES", "node": "art_prop_001", "meta": {} }
      ],
      "meta": { "tags": ["logic", "consistency"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "std_signif_001",
      "name": "Statistical Significance (p < 0.05)",
      "type": "EpistemicStandard",
      "subtype": "Inference Criterion",
      "description": "Threshold for rejecting null hypothesis based on p-value.",
      "roles": ["decision rule"],
      "specific": {
        "criterion": "p-value < alpha",
        "threshold": 0.05,
        "evaluation_method": "Hypothesis test"
      },
      "edges": [
        { "type": "EVALUATES", "node": "art_statresult_001", "meta": {} }
      ],
      "meta": { "tags": ["statistics", "significance"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "std_robust_001",
      "name": "Robustness",
      "type": "EpistemicStandard",
      "subtype": "Stability Criterion",
      "description": "Insensitivity of results to small perturbations in assumptions or data.",
      "roles": ["quality metric"],
      "specific": {
        "criterion": "Stable under minor changes",
        "threshold": null,
        "evaluation_method": "Sensitivity analysis"
      },
      "edges": [
        { "type": "EVALUATES", "node": "art_pm_001", "meta": {} },
        { "type": "EVALUATES", "node": "art_dataset_001", "meta": {} }
      ],
      "meta": { "tags": ["stability", "robustness"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "std_falsify_001",
      "name": "Falsifiability",
      "type": "EpistemicStandard",
      "subtype": "Philosophical Criterion",
      "description": "A theory must be testable and capable of being proven false.",
      "roles": ["demarcation"],
      "specific": {
        "criterion": "Empirical testability with potential counterexamples",
        "threshold": null,
        "evaluation_method": "Logical analysis of theory structure"
      },
      "edges": [
        { "type": "EVALUATES", "node": "art_prop_001", "meta": {} }
      ],
      "meta": { "tags": ["philosophy", "popper"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "rep_symbolic_001",
      "name": "Symbolic Notation",
      "type": "EpistemicRepresentation",
      "subtype": "Mathematical Language",
      "description": "Formal symbols and operators (e.g., F=ma, ∫) for expressing artifacts.",
      "roles": ["encoding"],
      "specific": {
        "format": "symbolic",
        "constraints": ["Well-formed formula", "Operator precedence"]
      },
      "edges": [],
      "meta": { "tags": ["notation", "math"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "rep_matrices_001",
      "name": "Matrices",
      "type": "EpistemicRepresentation",
      "subtype": "Linear Algebra",
      "description": "Two-dimensional arrays for representing linear transformations or data tables.",
      "roles": ["encoding"],
      "specific": {
        "format": "numeric",
        "constraints": ["Rectangular shape", "Element type consistency"]
      },
      "edges": [],
      "meta": { "tags": ["linear algebra", "data"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "rep_tensors_001",
      "name": "Tensors",
      "type": "EpistemicRepresentation",
      "subtype": "Multidimensional Arrays",
      "description": "Generalization of matrices to higher dimensions, used in ML and physics.",
      "roles": ["encoding"],
      "specific": {
        "format": "numeric",
        "constraints": ["Dimension consistency", "Contravariant/covariant rules"]
      },
      "edges": [],
      "meta": { "tags": ["tensor", "ML"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "rep_hypergraph_001",
      "name": "Hypergraph Representation",
      "type": "EpistemicRepresentation",
      "subtype": "Graph-based",
      "description": "Nodes and hyperedges capturing multi-way relationships among epistemic instances.",
      "roles": ["encoding"],
      "specific": {
        "format": "computational",
        "constraints": ["Directed/typed edges", "Hyperedge cardinality"]
      },
      "edges": [],
      "meta": { "tags": ["hypergraph", "structure"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "rep_datastruct_001",
      "name": "Data Structures",
      "type": "EpistemicRepresentation",
      "subtype": "Computational",
      "description": "In-memory formats like arrays, lists, trees, or hash maps.",
      "roles": ["encoding"],
      "specific": {
        "format": "computational",
        "constraints": ["Memory layout", "Access complexity"]
      },
      "edges": [],
      "meta": { "tags": ["CS", "data"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "dom_physical_001",
      "name": "Physical Systems",
      "type": "EpistemicDomain",
      "subtype": "Natural World",
      "description": "Realm of matter, energy, and fundamental forces (e.g., particles, planets).",
      "roles": ["target"],
      "specific": {
        "ontology": "Physics",
        "scale": "macro to quantum"
      },
      "meta": { "tags": ["physics", "reality"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "dom_bio_001",
      "name": "Biological Systems",
      "type": "EpistemicDomain",
      "subtype": "Life Sciences",
      "description": "Organisms, cells, ecosystems, and genetic networks.",
      "roles": ["target"],
      "specific": {
        "ontology": "Biology",
        "scale": "molecular to ecological"
      },
      "meta": { "tags": ["biology", "life"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "dom_comp_001",
      "name": "Computational Systems",
      "type": "EpistemicDomain",
      "subtype": "Information Processing",
      "description": "Algorithms, software, hardware, and data flow.",
      "roles": ["target"],
      "specific": {
        "ontology": "Computer Science",
        "scale": "bit to distributed system"
      },
      "meta": { "tags": ["computing", "information"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "obj_pred_001",
      "name": "Prediction",
      "type": "EpistemicObjective",
      "subtype": "Forecasting",
      "description": "Accurately forecasting future or unobserved states.",
      "roles": ["goal"],
      "specific": {
        "goal_type": "prediction",
        "metric": "Mean squared error / accuracy"
      },
      "meta": { "tags": ["forecast", "ML"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "obj_expl_001",
      "name": "Explanation",
      "type": "EpistemicObjective",
      "subtype": "Causal Understanding",
      "description": "Providing interpretable mechanisms behind phenomena.",
      "roles": ["goal"],
      "specific": {
        "goal_type": "explanation",
        "metric": "Causal coherence / counterfactual consistency"
      },
      "meta": { "tags": ["causality", "science"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "obj_ctrl_001",
      "name": "Control",
      "type": "EpistemicObjective",
      "subtype": "Intervention",
      "description": "Manipulating a system to achieve desired outcomes.",
      "roles": ["goal"],
      "specific": {
        "goal_type": "control",
        "metric": "Tracking error / settling time"
      },
      "meta": { "tags": ["engineering", "robotics"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "con_noise_001",
      "name": "Measurement Noise",
      "type": "EpistemicConstraint",
      "subtype": "Data Imperfection",
      "description": "Random errors corrupting observations.",
      "roles": ["limitation"],
      "specific": {
        "constraint_type": "data",
        "severity": "medium"
      },
      "edges": [
        { "type": "CONSTRAINS", "node": "art_dataset_001", "meta": {} },
        { "type": "CONSTRAINS", "node": "proc_datacollection_001", "meta": {} }
      ],
      "meta": { "tags": ["noise", "error"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "con_limdata_001",
      "name": "Limited Data",
      "type": "EpistemicConstraint",
      "subtype": "Sample Size",
      "description": "Insufficient observations for reliable inference.",
      "roles": ["limitation"],
      "specific": {
        "constraint_type": "data",
        "severity": "high"
      },
      "edges": [
        { "type": "CONSTRAINS", "node": "art_dataset_001", "meta": {} },
        { "type": "CONSTRAINS", "node": "tool_statinf_001", "meta": {} }
      ],
      "meta": { "tags": ["sparsity", "sample"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "con_comp_001",
      "name": "Computational Complexity",
      "type": "EpistemicConstraint",
      "subtype": "Resource Limit",
      "description": "Exponential time or memory requirements for exact inference.",
      "roles": ["limitation"],
      "specific": {
        "constraint_type": "computational",
        "severity": "high"
      },
      "edges": [
        { "type": "CONSTRAINS", "node": "tool_opt_001", "meta": {} },
        { "type": "CONSTRAINS", "node": "proc_train_001", "meta": {} }
      ],
      "meta": { "tags": ["complexity", "NP-hard"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "con_id_001",
      "name": "Identifiability Issues",
      "type": "EpistemicConstraint",
      "subtype": "Model Ambiguity",
      "description": "Different parameter sets yield identical predictions.",
      "roles": ["limitation"],
      "specific": {
        "constraint_type": "theoretical",
        "severity": "medium"
      },
      "edges": [
        { "type": "CONSTRAINS", "node": "art_pm_001", "meta": {} }
      ],
      "meta": { "tags": ["identifiability", "statistics"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "inf_db_001",
      "name": "Relational Database",
      "type": "EpistemicInfrastructure",
      "subtype": "Storage System",
      "description": "Structured data storage with SQL querying.",
      "roles": ["support"],
      "specific": {
        "resource_type": "software",
        "capacity": "Terabyte scale"
      },
      "edges": [
        { "type": "SUPPORTED_BY", "node": "art_dataset_001", "meta": {} }
      ],
      "meta": { "tags": ["database", "storage"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "inf_lab_001",
      "name": "Physics Laboratory",
      "type": "EpistemicInfrastructure",
      "subtype": "Facility",
      "description": "Controlled environment with precision instruments.",
      "roles": ["support"],
      "specific": {
        "resource_type": "institutional",
        "capacity": "Vibration-isolated, temperature-controlled"
      },
      "edges": [
        { "type": "SUPPORTED_BY", "node": "tool_meas_001", "meta": {} }
      ],
      "meta": { "tags": ["lab", "experiment"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "inf_soft_001",
      "name": "Graph Analysis Software (NetworkX)",
      "type": "EpistemicInfrastructure",
      "subtype": "Library",
      "description": "Software for creating, manipulating, and analyzing graphs.",
      "roles": ["support"],
      "specific": {
        "resource_type": "software",
        "capacity": "100k nodes, 1M edges"
      },
      "edges": [
        { "type": "SUPPORTED_BY", "node": "art_hypergraph_001", "meta": {} }
      ],
      "meta": { "tags": ["graph", "software"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_prior_001",
      "name": "Prior Definition",
      "type": "EpistemicProcess",
      "subtype": "Bayesian Step",
      "description": "Specifying prior distribution over parameters.",
      "roles": ["subprocess"],
      "specific": { "steps": [], "composition_type": "sequential" },
      "edges": [
        { "type": "PART_OF", "node": "proc_bayes_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_pm_001", "meta": {} }
      ],
      "meta": { "tags": ["prior", "bayesian"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_likelihood_001",
      "name": "Likelihood Computation",
      "type": "EpistemicProcess",
      "subtype": "Bayesian Step",
      "description": "Calculating probability of data given parameters.",
      "roles": ["subprocess"],
      "specific": { "steps": [], "composition_type": "sequential" },
      "edges": [
        { "type": "PART_OF", "node": "proc_bayes_001", "meta": {} },
        { "type": "USES", "node": "tool_statinf_001", "meta": {} }
      ],
      "meta": { "tags": ["likelihood", "bayesian"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_posterior_001",
      "name": "Posterior Update",
      "type": "EpistemicProcess",
      "subtype": "Bayesian Step",
      "description": "Combine prior and likelihood to obtain posterior.",
      "roles": ["subprocess"],
      "specific": { "steps": [], "composition_type": "sequential" },
      "edges": [
        { "type": "PART_OF", "node": "proc_bayes_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_pm_001", "meta": {} }
      ],
      "meta": { "tags": ["posterior", "bayesian"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_dataload_001",
      "name": "Data Loading",
      "type": "EpistemicProcess",
      "subtype": "Pipeline Step",
      "description": "Reading and preprocessing raw data.",
      "roles": ["subprocess"],
      "specific": { "steps": [], "composition_type": "sequential" },
      "edges": [
        { "type": "PART_OF", "node": "proc_train_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_dataset_001", "meta": {} }
      ],
      "meta": { "tags": ["data", "pipeline"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_modeltrain_001",
      "name": "Model Training",
      "type": "EpistemicProcess",
      "subtype": "Pipeline Step",
      "description": "Optimizing model parameters using gradient descent.",
      "roles": ["subprocess"],
      "specific": { "steps": [], "composition_type": "sequential" },
      "edges": [
        { "type": "PART_OF", "node": "proc_train_001", "meta": {} },
        { "type": "USES", "node": "tool_opt_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_optmodel_001", "meta": {} }
      ],
      "meta": { "tags": ["training", "optimization"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    },
    {
      "id": "proc_eval_001",
      "name": "Evaluation",
      "type": "EpistemicProcess",
      "subtype": "Pipeline Step",
      "description": "Assessing model performance on held-out data.",
      "roles": ["subprocess"],
      "specific": { "steps": [], "composition_type": "sequential" },
      "edges": [
        { "type": "PART_OF", "node": "proc_train_001", "meta": {} },
        { "type": "EVALUATES", "node": "std_robust_001", "meta": {} },
        { "type": "PRODUCES", "node": "art_statresult_001", "meta": {} }
      ],
      "meta": { "tags": ["evaluation", "testing"], "confidence": 1.0, "source": "Epistemic Map Generator" }
    }
  ]
}
```

## Node Types

```markdown
EpistemicArtifact
EpistemicTool
EpistemicAgent
EpistemicProcess
EpistemicStandard
EpistemicRepresentation
EpistemicDomain
EpistemicObjective
EpistemicConstraint
EpistemicInfrastructure
```

### Edgets Types

- USES                (Agent/Process → Tool)
- OPERATES_ON         (Tool → Artifact)
- PRODUCES            (Process/Tool → Artifact)
- EVALUATES           (Standard → Artifact/Process)
- REPRESENTS          (Representation → Artifact)
- TARGETS             (Artifact/Process → Domain)
- OPTIMIZES_FOR       (Process/Tool → Objective)
- CONSTRAINS          (Constraint → Artifact/Process)
- SUPPORTED_BY        (Artifact/Process → Infrastructure)
- PART_OF             (Node → Process)

### Specificity


#### 4.2 Epistemic Tool

```json id="tool-specific"
{
  "input_types": ["EpistemicType"],
  "output_types": ["EpistemicType"],
  "algorithmic_class": "string",
  "deterministic": "boolean"
}
```

### 4.3 Epistemic Agent

```json id="agent-specific"
{
  "capabilities": ["string"],
  "cognitive_type": "human | machine | hybrid"
}
```

#### 4.4 Epistemic Process

```json id="process-specific"
{
  "steps": ["node_id"],
  "composition_type": "sequential | iterative | recursive"
}
```

#### 4.5 Epistemic Standard

```json id="standard-specific"
{
  "criterion": "string",
  "threshold": "number | null",
  "evaluation_method": "string"
}
```

#### 4.6 Epistemic Representation

```json id="representation-specific"
{
  "format": "symbolic | numeric | visual | computational"
}
```

#### 4.7 Epistemic Domain

```json id="domain-specific"
{
  "ontology": "string",
  "scale": "string"
}
```

#### 4.8 Epistemic Objective

```json id="objective-specific"
{
  "goal_type": "prediction | explanation | control | compression",
  "metric": "string"
}
```

#### 4.9 Epistemic Constraint

```json id="constraint-specific"
{
  "constraint_type": "data | computational | theoretical",
  "severity": "low | medium | high"
}
```

#### 4.10 Epistemic Infrastructure

```json id="infrastructure-specific"
{
  "resource_type": "hardware | software | institutional",
  "capacity": "string"
}
```

## Non Functional Requirement

- An streamly elegant and sophisticated black like theme.

## Functional Requirements

Sections:

How to structure our Epistemic Map into sections?

- Hypergraph View
- Epistemic Map Hypergraph Epistemic Artifact Section Set
- About

Epistemic Map Hypergraph Epistemic Artifact Set:

| **Epistemic Artifact**      | **Artifact Type**          | **Description**                                     | **Representation**                 | **Evaluation (Standards)**              |
| --------------------------- | -------------------------- | --------------------------------------------------- | ---------------------------------- | --------------------------------------- |
| **Hypergraph (Epistemic Map)**   | Structural Artifact        | Full directed, typed network of epistemic instances | Node-link diagram, adjacency JSON  | Consistency, connectivity, completeness |
| **Artifact Set (SubHypergraph)** | Collection Artifact        | Subset of nodes filtered by type                    | Table view, induced subHypergraph       | Coverage, correctness                   |
| **Community Cluster Map**   | Structural / Statistical   | Groups of densely connected nodes                   | Colored cluster Hypergraph              | Modularity, separation clarity          |
| **Neighborhood Hypergraph**      | Relational Artifact        | Local k-hop subHypergraph around a node                  | Ego network                        | Local completeness, interpretability    |
| **Derivation Hypergraph (DAG)**  | Structural Artifact        | SubHypergraph of derivational relations                  | Directed acyclic Hypergraph             | Acyclicity, traceability                |
| **Derivation Tree**         | Structural Artifact        | Hierarchical view of a single artifact’s lineage    | Tree layout                        | Clarity, depth correctness              |
| **Process Pipeline**        | Process Artifact           | Sequences of transformations (tool → artifact)      | Flow diagram / DAG                 | Completeness, logical validity          |
| **Flow Sankey**             | Quantitative Flow Artifact | Weighted flow between stages or node types          | Sankey diagram                     | Flow clarity, imbalance detection       |
| **Representation Coverage** | Statistical Artifact       | Mapping artifact → representation types             | Matrix (artifact × representation) | Completeness, diversity                 |
| **Evaluation Coverage**     | Statistical Artifact       | Mapping artifact → evaluation standards             | Matrix (artifact × standard)       | Rigor, sufficiency                      |
| **Adjacency Heatmap**       | Statistical Artifact       | Density of connections between nodes/types          | Matrix heatmap                     | Pattern visibility, sparsity detection  |
| **Degree Distribution**     | Statistical Artifact       | Distribution of node connectivity                   | Histogram / log-log plot           | Scale-free behavior, anomalies          |
| **Type Distribution**       | Statistical Artifact       | Distribution of node types                          | Bar chart / pie chart              | Balance, interpretability               |
| **Centrality Map**          | Metric Artifact            | Importance scores across nodes                      | Node-colored Hypergraph / vector        | Stability, sensitivity                  |
| **Hypergraph Embedding**         | Geometric Artifact         | Projection of Hypergraph into vector space               | 2D/3D scatter plot                 | Structure preservation, clustering      |

## Design Spec

- Overview Page
- Exploration Page:

    - Separate **ontology**, **Hypergraph**, and **visualization** clearly
    - Do not mix different visualization types in one view
    - Support **k-hop neighborhood exploration**
    - Limit visible Hypergraph size (e.g., 100 nodes max)
    - Use **progressive expansion / collapse** for scalability
    - Hoover and greap sophisticated tooltip for the nodes.
    - used a site bar - for the section - collapsable - tool icon, tool + name.
        - Hypergraph View Main View
            - Centrality Representation
            - Evaluation Coverage  (Modal)
            - Community Discovery
        - Representation Coverage
        - Hypergraph Embedding
        - Adjacency Heatmap
        - Node Domain  Cluster
        - Degree Distribution


Node Tooltip:

The tooltip is a local epistemic lens on a node:

It does not describe the node.
It exposes its position in the epistemic system.

So every tooltip must answer:

- What is this?
- What does it connect to?
- What does it depend on?
- How is it evaluated?
- What is its epistemic role?

┌──────────────────────────────┐
│ HEADER                        │
│ Name + Type Badge            │
├──────────────────────────────┤
│ EPistemic Signature          │
│ Role + Domain + Objective    │
├──────────────────────────────┤
│ DESCRIPTION (compressed)     │
├──────────────────────────────┤
│ RELATIONAL CORE              │
│ Incoming / Outgoing edges    │
├──────────────────────────────┤
│ EPISTEMIC STATUS             │
│ Standards + Constraints      │
├──────────────────────────────┤
│ LOCAL NEIGHBORHOOD           │
│ k-hop summary                │
├──────────────────────────────┤
│ ACTIONS                      │
│ expand / focus / trace       │
└──────────────────────────────┘

## Tech Stack

- Vanilla HTML, JS,
- Can used libraries etc for Hypergraphs,  stype etc, but not frameworks

## References

- https://www.decisiondeskhq.com/
- https://projects.economist.com/us-2020-forecast/president
- https://web.archive.org/web/20250305183642/
- https://projects.fivethirtyeight.com/
- https://cosmograph.app/