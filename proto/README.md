# Conceptual Structure Typing Epistemic Practice

> A taxonomy (conceptual structure) that renders the epistemic practice of epistemic agents intelligible.

> Epistemic practice can be characterized as the structured process by which an observer acquires, encodes, transforms, validates, and applies epistemic artifacts about a target domain.

> I used to much LLM for the filling of the details - and they hve move the spct to much - confusing the abstract idea - with a type of computational align tools - which is not.

Open questions:

- How to reason about edges that connect the concepts the dataset?

## Formulation

> Which are the sets of concept that characterize  epistemic practice? How to capture all of this concept in a database?

| **Category*- | **Description*- | **Instance(s)*- |
| --- | --- | --- |
|**Observation Interface & Recoding**|The sensorimotor boundary + inscription process that transduces a Domain Snapshot into a persistent encoded artifact. Includes transduction, sampling, quantization, encoding, and storage.|CMOS sensor + ADC + JPEG + SD card; thermocouple + data logger + CSV file; human retina + V1 cortex + working memory, datasets, etc.|
| **Epistemic Artifact*- | Structured object that encodes claims, constraints, or distributions over reality; the primary carrier of semantic content. | Propositions, numbers, differential equations, probabilistic models, Hypergraphs |
|**Interpretation Layer**|interpretation function (artifact → meaning assignment)|...|
| **Epistemic Tool*- | Formal or procedural mechanism used to construct, transform, or validate epistemic artifacts. | Algebraic manipulation, statistical inference, optimization algorithms, simulation methods, measurement procedures |
| **Epistemic Agent*- | Entity that performs epistemic operations by applying tools to artifacts. | Scientist, analyst, research institution, machine learning system, automated pipeline |
| **Epistemic Process (Activity)*- | Ordered sequence of tool applications over time; defines the dynamics of knowledge construction. | Scientific method, Bayesian updating loop, training pipeline, experimental cycle |
| **Epistemic Standard*- | Normative criteria used to evaluate validity, correctness, or acceptability of artifacts and processes. | Logical consistency, statistical significance, reproducibility, robustness, falsifiability |
| **Encoding Substrate (Epistemic Artifact Encoding Format)*- | Segment of reality that the epistemic practice targets or models. | Physical systems, biological systems, social systems, computational systems |
| **Epistemic Constraint*- | Limitation that bounds what can be known or inferred within the system. | Noise, limited data, computational complexity, identifiability issues, measurement error, ignorance, intractability, stochasticity, higher-order stochasticity, chaos, nonlinearity, uncertainty propagation, and observational limitations. |
| **Epistemic Infrastructure*- | Supporting environment that enables storage, computation, measurement, and communication of artifacts. | Sensors, laboratories, software systems, databases, notebooks, scientific publications |
|**Meta-Epistemic Layer**|Supporting material, energetic, social, and institutional environment that enables storage, computation, measurement, and communication of artifacts over time.|Sensors (thermocouples, cameras), laboratories (clean rooms), software systems (Jupyter, Git), databases, scientific publications, power grid, funding agencies, data repositories.|
|**Epistemic Feedback**|Signal from reality (or from another artifact) that resists or confirms prior predictions or actions; primary driver of learning and error correction.|Prediction error (residual), unexpected observation, failed intervention, successful replication, sensor saturation, model divergence, comparison between two Domain Snapshots taken at different times.|
|**Epistemic Act**|Primitive, non‑decomposable operation performed by an agent: attending, discriminating, remembering, anticipating, intervening, comparing, observing (which invokes Observation Encoding).|Attending to a sensor reading, detecting a difference, recalling an observation, emitting a prediction, pressing a measurement probe, judging similarity, encoding a raw signal into a digital value.|

### Generic Model

> How can we **model the set of concepts*- that constitute epistemic practice as a basis for intelligence? How can such a model be evaluated?

> Let us say that we represent an epistemic node (a concept, whether more abstract or less abstract) using the following format:

```json
{
  "id": "string",
  "name": "string",
  "category": "string - to which major category does it belongs or it's subtype",
  "inheritanceLevel": "number",
  "description": "string",

  "functionalRoles": ["string"],
  "realityDomains": ["string"],

  "historicalContext": {
      "summary": "history",
      "chronology": [
        {
          "year" :  "number",
          "event":  "textual description of the event",
          "associatedContext": "people, etc"
        }
      ]
  },

  "specific": {},

  "relationships": [
    {
      "relationshipType": "RELATIONSHIP_FAMILTY",
      "relationshipType": "RELATIONSHIP_TYPE",
      "targetNodeId": "node_id",
      "attributes": {}
    }
  ],

  "metadata": {
    "tags": ["string"],
    "confidenceScore": "number",
    "sourceReference": "string",
    "createdAt": "",
    "auditTrail": [{
      "reviewDate": "date",
      "reviewNote": "string"
    }]
  }
}
```

inheritanceLevel:

- What is the length of inherence (super types)?

Which are the edged types?:

| **Relation Family** | **Relation Type** | **Description** | **Relation Signature** | **Use** |
| --- | --- | --- | --- | --- |
| Representational | observes | Captures or measures a domain snapshot through perception or instrumentation. | Observation Interface → Domain Snapshot | Empirical sensing, experiments, perception systems |
| Representational | encodes | Transduces observations into persistent epistemic artifacts. | Observation Interface / Agent → Epistemic Artifact | Data acquisition, memory, recording |
| Representational | expresses_in | Instantiates an artifact in a specific representational substrate or encoding format. | Epistemic Artifact → Encoding Format | Formal notation, code, schemas |
| Representational | formalizes | Converts raw, implicit, or informal content into structured epistemic representation. | Tool / Agent → Epistemic Artifact | Ontologies, models, formal systems |
| Representational | abstracts_from | Extracts generalized structures or principles from lower-level artifacts. | Artifact / Theory → Lower-Level Artifact | Theory building, pattern extraction |
| Structural | composed_of | Defines constituent internal components, operations, or stages of an entity. | Tool / Process / Artifact → Subcomponent | Tool architecture, workflow decomposition |
| Structural | has_parameter | Specifies formal adjustable variables or governing parameters. | Tool / Model → Parameter | Configuration, tuning, optimization |
| Structural | has_input | Defines required epistemic inputs. | Tool / Process → Input Artifact | Pipeline specification |
| Structural | has_output | Defines produced outputs. | Tool / Process → Output Artifact | Output specification |
| Structural | implements_principle | Operationalizes an underlying formal or mathematical principle. | Tool → Principle | Fourier methods, Bayesian inference |
| Operational | uses | Agent or higher-order system employs a tool. | Agent / Tool → Tool | Scientific inquiry, automation |
| Operational | performs | Agent executes a process. | Agent → Process | Research, experimentation |
| Operational | acts_on | Tool, act, or process manipulates an artifact or domain. | Tool / Process / Act → Artifact / Domain | Data processing, intervention |
| Operational | produces | Generates a new artifact or epistemic output. | Agent / Tool / Process → Artifact | Model creation, inference products |
| Operational | transforms | Converts one artifact into another epistemic state. | Tool / Process → Artifact | Signal processing, inference |
| Operational | predicts | Produces projected future epistemic claims. | Model / Artifact → Future State | Forecasting, simulation |
| Operational | decomposes | Breaks an artifact into constituent analyzable components. | Tool → Artifact Components | Fourier analysis, PCA |
| Operational | integrates | Combines multiple epistemic sources into unified artifacts. | Tool / Process → Unified Artifact | Fusion, synthesis |
| Operational | estimates | Infers latent states, parameters, or distributions. | Tool / Process → Estimated Artifact | Bayesian methods, econometrics |
| Normative - Validation | conforms_to | Satisfies standards or evaluative criteria. | Artifact / Tool / Process → Standard | Scientific validity |
| Normative - Validation | evaluated_by | Subject is assessed by evaluative mechanism. | Artifact / Process → Standard / Tool | Benchmarking, review |
| Normative - Validation | validates | Confirms adequacy or correctness. | Process / Evidence → Artifact | Verification, replication |
| Normative - Validation | refutes | Disconfirms or falsifies a claim. | Evidence / Feedback → Artifact | Falsification |
| Normative - Validation | supports | Provides evidential reinforcement. | Evidence / Artifact → Artifact | Justification |
| Constraint | is_bounded_by | Subject exists under limiting conditions. | Artifact / Tool / Process → Constraint | Complexity, uncertainty |
| Constraint | constrains | Restricts epistemic operation, expressibility, or validity. | Constraint / Format → Subject | Formal, practical, methodological limitations |
| Constraint | distorts | Introduces systematic deviation or corruption. | Constraint → Artifact / Observation | Bias, noise |
| Constraint | depends_on | Requires enabling conditions. | Subject → Dependency | Infrastructure, quality prerequisites |
| Dynamic - Feedback | triggers | Feedback initiates epistemic adaptation. | Feedback → Process / Artifact | Revision, anomaly correction |
| Dynamic - Feedback | updates | Revises epistemic state based on new evidence. | Evidence / Feedback → Artifact / Process | Learning, Bayesian updating |
| Dynamic - Feedback | feeds_back_to | Recursive return of output into prior stages. | Output → Prior Process | Adaptive loops |
| Dynamic - Feedback | iterates_on | Repeatedly refines prior artifacts or processes. | Process → Prior Artifact / Process | Continuous improvement |
| Dynamic - Feedback | evolves_into | Develops into more advanced epistemic form. | Artifact / Process → Advanced Artifact / Process | Theory maturation |
| Infrastructure | provides | Supplies enabling material, computational, or sensory resources. | Infrastructure → Agent / Tool / Process | Labs, compute systems |
| Infrastructure | hosts | Sustains persistent epistemic systems or agents. | Institution / Infrastructure → Agent / System | Universities, organizations |
| Infrastructure | stores | Preserves epistemic artifacts over time. | Infrastructure → Artifact | Archives, repositories |
| Infrastructure | communicates | Transmits artifacts across epistemic agents. | Infrastructure / Artifact → Agent / Community | Journals, APIs |
| Infrastructure | standardizes | Establishes shared representational or methodological conventions. | Institution / Infrastructure → Standard / Format | Protocols, schemas |
| Meta-Epistemic | monitors | Tracks epistemic system quality or performance. | Meta-System → E |  |

> Note: The specific components will be formulated in the subsequent sections.

### Observation Interface & Recoding

> The sensorimotor boundary + inscription process that transduces a Domain Snapshot into a persistent encoded artifact. Includes transduction, sampling, quantization, encoding, and storage.

### Epistemic Artifact

> Structured object that encodes claims, constraints, or distributions over reality; the primary carrier of semantic content.

> In the edges specification - we need to capture the structure - that is which are the others epistemic nodes - that are somehow contain = or embdeded - or that have yield this artifact?

```json
"specific": {
  "modality": "sensorimotor | computational | cognitive",
  "structure": "summary of the ....",
  "noise_model": "probabilistic_distribution | deterministic_error_function",
}
```

### Epistemic Tool

> Formal or procedural mechanism used to construct, transform, or validate epistemic artifacts. That is anythign that can helps in the epistemic process.

```json
"specific": {
  "operation_class": "transform | infer | optimize | simulate | validate",
  "preconditions": ["assumptions", "data_requirements"],
  "guarantees": ["correctness_bound", "convergence", "consistency"],
  "determinism": "deterministic | stochastic | hybrid",
  "composability": "low | medium | high"
}
```

### Epistemic Agent

> Entity that performs epistemic operations by applying tools to artifacts.

```json
"specific": {
  "agent_type": "human | machine | hybrid_system | institution",
  "capabilities": ["perception", "inference", "learning", "intervention"],
  "goal_structure": "fixed | adaptive | multi_objective",
  "memory_model": "episodic | semantic | externalized | distributed",
  "tool_access": ["tool_ids"],
  "autonomy_level": "reactive | deliberative | self_improving",
  "error_tolerance": "low | medium | high"
}
```

### Epistemic Process (Activity)

> Ordered sequence of tool applications over time; defines the dynamics of knowledge construction.

```json
"specific": {
  "process_type": "scientific_method | training_pipeline | experimental_loop | inference_cycle",
  "step_structure": ["observe", "encode", "model", "predict", "validate"],
  "control_flow": "sequential | iterative | branching | recursive",
  "termination_criteria": "convergence | threshold | external_stop | equilibrium",
  "update_mechanism": "batch | online | incremental",
  "feedback_integration": "none | periodic | continuous"
}
```

### Epistemic Standard

> Normative criteria used to evaluate validity, correctness, or acceptability of artifacts and processes.

```json
"specific": {
  "evaluation_metrics": ["accuracy", "consistency", "precision", "recall", "robustness"],
  "thresholds": {"metric": "value"},
  "validation_method": "empirical | logical | statistical | simulation_based",
  "norm_type": "hard_constraint | soft_constraint | probabilistic_constraint",
  "reference_frame": "theory_based | data_driven | hybrid",
  "failure_modes": ["overfitting", "inconsistency", "non_reproducibility"]
}
```

### Encoding Substrate

> Encoding format or substrate in which artifacts are expressed; constrains manipulation and interpretation.

```json
  "specific": {
    "substrate_type": "physical | symbolic | neural | biological | digital",
    "material": "paper | magnetic_disk | flash_memory | DNA | neuron_firing_pattern | silicon",
    "persistence": "volatile | non_volatile | ephemeral",
  }
```

### (Segment of Reality) Epistemic Domain

> Segment of reality that the epistemic practice targets or models.

```json
"specific": {
  "domain_type": "physical_system | biological_system | social_system | computational_system",
  "boundary_definition": "closed | open | fuzzy",
  "scale": "micro | meso | macro",
  "interaction_structure": "network | field | agent_based | hybrid",
  "dynamics":  "static | evolving | non_stationary | stochastic | non_stationary deterministic stochastic evolution, non_stationary stotochatc stochastic evolution"
}
```

### Epistemic Constraint

> Limitation that bounds what can be known or inferred within the system.

```json
"specific": {
  "constraint_type": "informational | computational | physical | statistical | epistemic",
  "source": "measurement | model | environment | resource_limit",
  "effect": "reduces_precision | limits_observability | increases_uncertainty",
  "scope": "local | global | system_wide",
  "severity": "low | medium | high | fundamental"
}
```

### Epistemic Infrastructure

> Supporting environment that enables storage, computation, measurement, and communication of artifacts.

```json
"specific": {
  "elementType": ["sensors", "databases", "compute_units", "communication_channels"],
  "latency": "time_delay_distribution",
  "reliability": "failure_probability",
  "scalability": "linear | sublinear | superlinear",
  "interoperability": "low | medium | high",
  "maintenance_model": "manual | automated | self_healing"
}
```

### Epistemic Feedback

> Signal from reality (or from another artifact) that resists or confirms prior predictions or actions; primary driver of learning and error correction.

```json
"specific": {
  "signal_type": "error | confirmation | anomaly | reinforcement",
  "source": "environment | model | external_agent | system_internal",
  "latency": "immediate | delayed | distributed",
  "target": "artifact | tool | process | agent",
  "update_role": "corrective | reinforcing | destabilizing"
}
```

### Epistemic Act

> Primitive, non‑decomposable operation performed by an agent: attending, discriminating, remembering, anticipating, intervening, comparing, observing (which invokes Observation Encoding).

```json
"specific": {
  "act_type": "observe | compare | encode | retrieve | predict | intervene | discriminate",
  "input_state": "sensory_data | artifact | memory_state",
  "output_state": "updated_artifact | decision | signal",
  "atomicity": "atomic | semi_decomposable",
}
```

## Sample Data

```json
[
  {
    "id": "cat_obs_iface",
    "name": "Observation Interface & Recoding",
    "inheritanceLevel": 0,
    "description": "The sensorimotor boundary + inscription process that transduces a Domain Snapshot into a persistent encoded artifact.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_artifact",
    "name": "Epistemic Artifact",
    "inheritanceLevel": 0,
    "description": "Structured object that encodes claims, constraints, or distributions over reality; the primary carrier of semantic content.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_interp",
    "name": "Interpretation Layer",
    "inheritanceLevel": 0,
    "description": "Interpretation function that assigns meaning to an epistemic artifact.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_tool",
    "name": "Epistemic Tool",
    "inheritanceLevel": 0,
    "description": "Formal or procedural mechanism used to construct, transform, or validate epistemic artifacts.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_agent",
    "name": "Epistemic Agent",
    "inheritanceLevel": 0,
    "description": "Entity that performs epistemic operations by applying tools to artifacts.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_process",
    "name": "Epistemic Process (Activity)",
    "inheritanceLevel": 0,
    "description": "Ordered sequence of tool applications over time; defines the dynamics of knowledge construction.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_standard",
    "name": "Epistemic Standard",
    "inheritanceLevel": 0,
    "description": "Normative criteria used to evaluate validity, correctness, or acceptability of artifacts and processes.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_substrate",
    "name": "Encoding Substrate",
    "inheritanceLevel": 0,
    "description": "Encoding format or substrate in which artifacts are expressed; constrains manipulation and interpretation.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_domain",
    "name": "Epistemic Domain (Segment of Reality)",
    "inheritanceLevel": 0,
    "description": "Segment of reality that the epistemic practice targets or models.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_constraint",
    "name": "Epistemic Constraint",
    "inheritanceLevel": 0,
    "description": "Limitation that bounds what can be known or inferred within the system.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_infra",
    "name": "Epistemic Infrastructure",
    "inheritanceLevel": 0,
    "description": "Supporting environment that enables storage, computation, measurement, and communication of artifacts.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_meta",
    "name": "Meta‑Epistemic Layer",
    "inheritanceLevel": 0,
    "description": "Material, energetic, social, and institutional environment enabling artifact handling over time.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_feedback",
    "name": "Epistemic Feedback",
    "inheritanceLevel": 0,
    "description": "Signal from reality (or another artifact) that resists or confirms prior predictions, driving learning.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },
  {
    "id": "cat_act",
    "name": "Epistemic Act",
    "inheritanceLevel": 0,
    "description": "Primitive, non‑decomposable operation performed by an agent.",
    "roles": ["abstract_category"],
    "specific": {},
    "edges": [],
    "meta": { "tags": ["top-level"], "confidence": 1.0, "source": "taxonomy" }
  },

  {
    "id": "obs_iface_01",
    "name": "CMOS Sensor + ADC + JPEG pipeline",
    "inheritanceLevel": 1,
    "description": "Transduces light → digital image, compresses and stores as JPEG.",
    "roles": ["sensor", "encoder"],
    "specific": {
      "modality": "sensorimotor",
      "structure": "photon → charge → ADC → JPEG file",
      "noise_model": "Poisson-Gaussian"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_obs_iface", "meta": {} },
      { "type": "encodes", "node": "artifact_01", "meta": {} }
    ],
    "meta": { "tags": ["imaging"], "confidence": 0.95, "source": "curated" }
  },
  {
    "id": "obs_iface_02",
    "name": "Human Visual Observation + Working Memory",
    "inheritanceLevel": 1,
    "description": "Retina → V1 → working memory buffer; volatile encoded snapshot.",
    "roles": ["biological sensor"],
    "specific": {
      "modality": "cognitive",
      "structure": "retina → LGN → V1 → memory",
      "noise_model": "Weber-Fechner"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_obs_iface", "meta": {} },
      { "type": "encodes", "node": "artifact_07", "meta": {} }
    ],
    "meta": { "tags": ["human"], "confidence": 0.92, "source": "cogsci" }
  },
  {
    "id": "artifact_01",
    "name": "Digital Image",
    "inheritanceLevel": 1,
    "description": "2D RGB pixel array + metadata.",
    "roles": ["artifact"],
    "specific": {
      "modality": "sensorimotor",
      "structure": "raster (R,G,B)",
      "noise_model": "per-pixel Gaussian"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_artifact", "meta": {} },
      { "type": "instantiates", "node": "artifact_06", "meta": {} }
    ],
    "meta": { "tags": ["image"], "confidence": 1.0 }
  },
  {
    "id": "artifact_02",
    "name": "Numerical Measurement (scalar + uncertainty)",
    "inheritanceLevel": 1,
    "description": "e.g., 9.81 ± 0.01 m/s².",
    "roles": ["artifact"],
    "specific": {
      "modality": "sensorimotor",
      "structure": "value, unit, uncertainty",
      "noise_model": "Gaussian"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_artifact", "meta": {} }
    ],
    "meta": { "tags": ["measurement"], "confidence": 1.0 }
  },
  {
    "id": "artifact_03",
    "name": "Scientific Hypothesis (Proposition)",
    "inheritanceLevel": 1,
    "description": "Falsifiable claim in natural/formal language.",
    "roles": ["artifact"],
    "specific": {
      "modality": "cognitive",
      "structure": "logical form",
      "noise_model": "none"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_artifact", "meta": {} }
    ],
    "meta": { "tags": ["hypothesis"], "confidence": 1.0 }
  },
  {
    "id": "artifact_04",
    "name": "Bayesian Network Model",
    "inheritanceLevel": 1,
    "description": "DAG with conditional probability tables.",
    "roles": ["artifact"],
    "specific": {
      "modality": "computational",
      "structure": "nodes, edges, CPDs",
      "noise_model": "probabilistic"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_artifact", "meta": {} }
    ],
    "meta": { "tags": ["bayesian"], "confidence": 0.98 }
  },
  {
    "id": "artifact_05",
    "name": "Time Series Dataset",
    "inheritanceLevel": 1,
    "description": "Ordered (t, value) pairs.",
    "roles": ["artifact"],
    "specific": {
      "modality": "sensorimotor",
      "structure": "timestamped sequence",
      "noise_model": "correlated + white"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_artifact", "meta": {} }
    ],
    "meta": { "tags": ["time series"], "confidence": 1.0 }
  },
  {
    "id": "artifact_06",
    "name": "Differential Equation Model",
    "inheritanceLevel": 1,
    "description": "ODE/PDE system with parameters.",
    "roles": ["artifact"],
    "specific": {
      "modality": "computational",
      "structure": "equations, ICs",
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_artifact", "meta": {} }
    ],
    "meta": { "tags": ["dynamics"], "confidence": 1.0 }
  },
  {
    "id": "artifact_07",
    "name": "Visual Mental Image",
    "inheritanceLevel": 1,
    "description": "Ephemeral working-memory trace.",
    "roles": ["artifact"],
    "specific": {
      "modality": "cognitive",
      "structure": "feature sketch",
      "noise_model": "decay + interference"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_artifact", "meta": {} }
    ],
    "meta": { "tags": ["memory"], "confidence": 0.85 }
  },
  {
    "id": "interp_01",
    "name": "Semantic Interpretation Mapping",
    "inheritanceLevel": 0,
    "description": "Maps artifact → meaning, linking to domain claims.",
    "roles": ["interpretation"],
    "specific": {},
    "edges": [
      { "type": "subtype_of", "node": "cat_interp", "meta": {} }
    ],
    "meta": { "tags": ["semantics"], "confidence": 0.9 }
  },
  {
    "id": "tool_01",
    "name": "Linear Regression",
    "inheritanceLevel": 1,
    "description": "Fits linear model by OLS.",
    "roles": ["inference tool"],
    "specific": {
      "inputs": ["scalar measurements"],
      "operation_class": "infer",
      "preconditions": ["linearity", "homoscedasticity"],
      "guarantees": ["BLUE"],
      "determinism": "deterministic",
      "composability": "high"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_tool", "meta": {} }
    ],
    "meta": { "tags": ["regression"], "confidence": 1.0 }
  },
  {
    "id": "tool_02",
    "name": "t-test (Statistical Hypothesis Test)",
    "inheritanceLevel": 1,
    "description": "Evaluates null hypothesis, produces p‑value.",
    "roles": ["validation tool"],
    "specific": {
      "inputs": ["dataset", "hypothesis"],
      "operation_class": "validate",
      "preconditions": ["random sample", "normality"],
      "guarantees": ["type I error control"],
      "determinism": "deterministic",
      "composability": "medium"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_tool", "meta": {} }
    ],
    "meta": { "tags": ["hypothesis test"], "confidence": 1.0 }
  },
  {
    "id": "tool_03",
    "name": "Bayesian Updating Rule",
    "inheritanceLevel": 1,
    "description": "Prior × likelihood → posterior.",
    "roles": ["inference tool"],
    "specific": {
      "inputs": ["prior", "likelihood", "data"],
      "operation_class": "infer",
      "preconditions": ["proper prior"],
      "guarantees": ["coherence"],
      "determinism": "deterministic",
      "composability": "high"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_tool", "meta": {} }
    ],
    "meta": { "tags": ["bayesian"], "confidence": 1.0 }
  },
  {
    "id": "tool_04",
    "name": "Measurement Calibration Procedure",
    "inheritanceLevel": 1,
    "description": "Maps raw readings to calibrated units.",
    "roles": ["measurement tool"],
    "specific": {
      "inputs": ["raw output", "reference"],
      "operation_class": "transform",
      "preconditions": ["known reference"],
      "guarantees": ["traceable accuracy"],
      "determinism": "deterministic",
      "composability": "medium"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_tool", "meta": {} }
    ],
    "meta": { "tags": ["calibration"], "confidence": 1.0 }
  },
  {
    "id": "tool_05",
    "name": "Runge‑Kutta ODE Solver",
    "inheritanceLevel": 1,
    "description": "Numerical ODE simulation.",
    "roles": ["simulation tool"],
    "specific": {
      "inputs": ["ODE model", "ICs"],
      "operation_class": "simulate",
      "preconditions": ["Lipschitz"],
      "guarantees": ["order-4 convergence"],
      "determinism": "deterministic",
      "composability": "high"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_tool", "meta": {} }
    ],
    "meta": { "tags": ["simulation"], "confidence": 1.0 }
  },
  {
    "id": "agent_01",
    "name": "Human Scientist",
    "inheritanceLevel": 1,
    "description": "Biological cognitive agent capable of experimentation, theorizing, and learning.",
    "roles": ["agent"],
    "specific": {
      "agent_type": "human",
      "capabilities": ["perception", "inference", "intervention"],
      "goal_structure": "adaptive",
      "memory_model": "episodic + externalized",
      "autonomy_level": "deliberative"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_agent", "meta": {} }
    ],
    "meta": { "tags": ["human"], "confidence": 1.0 }
  },
  {
    "id": "agent_02",
    "name": "Automated Experimentation Pipeline",
    "inheritanceLevel": 1,
    "description": "Machine agent cycling hypothesis‑experiment‑update.",
    "roles": ["agent"],
    "specific": {
      "agent_type": "machine",
      "capabilities": ["inference", "learning", "intervention"],
      "goal_structure": "fixed (optimization)",
      "memory_model": "externalized (DB)",
      "autonomy_level": "self_improving"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_agent", "meta": {} }
    ],
    "meta": { "tags": ["AI"], "confidence": 0.9 }
  },
  {
    "id": "agent_03",
    "name": "Research Institution",
    "inheritanceLevel": 1,
    "description": "Collective agent (humans + infrastructure) sustaining knowledge production.",
    "roles": ["agent"],
    "specific": {
      "agent_type": "institution",
      "capabilities": ["knowledge accumulation", "norm enforcement"],
      "goal_structure": "multi-objective",
      "memory_model": "distributed (publications)",
      "autonomy_level": "deliberative"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_agent", "meta": {} }
    ],
    "meta": { "tags": ["institution"], "confidence": 0.95 }
  },
  {
    "id": "process_01",
    "name": "Scientific Method Cycle",
    "inheritanceLevel": 1,
    "description": "Hypothesize → design → collect → analyze → refine.",
    "roles": ["process"],
    "specific": {
      "process_type": "scientific_method",
      "step_structure": ["hypothesize", "experiment", "analyze"],
      "control_flow": "iterative",
      "termination_criteria": "corroboration/falsification",
      "update_mechanism": "incremental",
      "feedback_integration": "continuous"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_process", "meta": {} }
    ],
    "meta": { "tags": ["method"], "confidence": 1.0 }
  },
  {
    "id": "process_02",
    "name": "Bayesian Inference Loop",
    "inheritanceLevel": 1,
    "description": "Prior → observe → posterior → new prior.",
    "roles": ["process"],
    "specific": {
      "process_type": "inference_cycle",
      "step_structure": ["set prior", "observe", "update"],
      "control_flow": "recursive",
      "termination_criteria": "convergence",
      "update_mechanism": "online",
      "feedback_integration": "continuous"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_process", "meta": {} }
    ],
    "meta": { "tags": ["bayesian"], "confidence": 1.0 }
  },
  {
    "id": "process_03",
    "name": "Supervised Learning Training Pipeline",
    "inheritanceLevel": 1,
    "description": "Data → clean → split → fit → validate → deploy.",
    "roles": ["process"],
    "specific": {
      "process_type": "training_pipeline",
      "step_structure": ["ingest", "train", "validate"],
      "control_flow": "iterative (epochs)",
      "termination_criteria": "validation loss plateau",
      "update_mechanism": "mini-batch",
      "feedback_integration": "continuous"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_process", "meta": {} }
    ],
    "meta": { "tags": ["ML"], "confidence": 1.0 }
  },
  {
    "id": "standard_01",
    "name": "Statistical Significance (p < 0.05)",
    "inheritanceLevel": 1,
    "description": "Null hypothesis rejection threshold.",
    "roles": ["norm"],
    "specific": {
      "evaluation_metrics": ["p-value"],
      "thresholds": { "p": 0.05 },
      "validation_method": "statistical",
      "norm_type": "hard_constraint",
      "reference_frame": "frequentist",
      "failure_modes": ["p-hacking", "multiple comparisons"]
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_standard", "meta": {} }
    ],
    "meta": { "tags": ["significance"], "confidence": 1.0 }
  },
  {
    "id": "standard_02",
    "name": "Reproducibility Criterion",
    "inheritanceLevel": 1,
    "description": "Independent repetition yields consistent results.",
    "roles": ["norm"],
    "specific": {
      "evaluation_metrics": ["reproduction success rate"],
      "thresholds": { "success_rate": 0.9 },
      "validation_method": "empirical",
      "norm_type": "soft_constraint",
      "failure_modes": ["unrecorded procedures", "drift"]
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_standard", "meta": {} }
    ],
    "meta": { "tags": ["reproducibility"], "confidence": 0.95 }
  },
  {
    "id": "standard_03",
    "name": "Falsifiability Requirement",
    "inheritanceLevel": 0,
    "description": "Hypothesis must be logically refutable.",
    "roles": ["demarcation"],
    "specific": {
      "evaluation_metrics": ["logical possibility of refutation"],
      "thresholds": { "possibility": "binary" },
      "validation_method": "logical",
      "norm_type": "hard_constraint",
      "failure_modes": ["ad hoc modifications"]
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_standard", "meta": {} }
    ],
    "meta": { "tags": ["Popper"], "confidence": 0.9 }
  },
  {
    "id": "substrate_01",
    "name": "Digital JSON File",
    "inheritanceLevel": 1,
    "description": "Structured text serialization on non‑volatile memory.",
    "roles": ["encoding"],
    "specific": {
      "substrate_type": "digital",
      "material": "flash/disk",
      "persistence": "non_volatile"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_substrate", "meta": {} }
    ],
    "meta": { "tags": ["digital"], "confidence": 1.0 }
  },
  {
    "id": "substrate_02",
    "name": "Printed Text on Paper",
    "inheritanceLevel": 1,
    "description": "Physical archival record.",
    "roles": ["encoding"],
    "specific": {
      "substrate_type": "physical",
      "material": "paper",
      "persistence": "non_volatile"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_substrate", "meta": {} }
    ],
    "meta": { "tags": ["paper"], "confidence": 1.0 }
  },
  {
    "id": "substrate_03",
    "name": "Neural Firing Pattern (Working Memory)",
    "inheritanceLevel": 1,
    "description": "Ephemeral biological substrate.",
    "roles": ["encoding"],
    "specific": {
      "substrate_type": "biological",
      "material": "neural tissue",
      "persistence": "ephemeral"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_substrate", "meta": {} }
    ],
    "meta": { "tags": ["neural"], "confidence": 0.85 }
  },
  {
    "id": "domain_01",
    "name": "Classical Mechanical System",
    "inheritanceLevel": 1,
    "description": "Macroscopic bodies, Newtonian dynamics.",
    "roles": ["target"],
    "specific": {
      "domain_type": "physical_system",
      "boundary_definition": "closed",
      "scale": "macro",
      "interaction_structure": "field + contact",
      "dynamics": "deterministic nonlinear"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_domain", "meta": {} }
    ],
    "meta": { "tags": ["physics"], "confidence": 1.0 }
  },
  {
    "id": "domain_02",
    "name": "Biological Ecosystem",
    "inheritanceLevel": 1,
    "description": "Interacting populations, nutrient flows.",
    "roles": ["target"],
    "specific": {
      "domain_type": "biological_system",
      "boundary_definition": "open",
      "scale": "meso",
      "interaction_structure": "food web",
      "dynamics": "stochastic non-stationary"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_domain", "meta": {} }
    ],
    "meta": { "tags": ["ecology"], "confidence": 0.98 }
  },
  {
    "id": "domain_03",
    "name": "Human Social Network",
    "inheritanceLevel": 1,
    "description": "Individuals, ties, influence.",
    "roles": ["target"],
    "specific": {
      "domain_type": "social_system",
      "boundary_definition": "fuzzy",
      "scale": "macro",
      "interaction_structure": "agent‑based network",
      "dynamics": "non-stationary stochastic"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_domain", "meta": {} }
    ],
    "meta": { "tags": ["sociology"], "confidence": 0.9 }
  },
  {
    "id": "constraint_01",
    "name": "Measurement Noise",
    "inheritanceLevel": 0,
    "description": "Stochastic perturbation limiting precision.",
    "roles": ["limitation"],
    "specific": {
      "constraint_type": "physical",
      "source": "measurement",
      "effect": "reduces_precision",
      "scope": "local",
      "severity": "medium"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_constraint", "meta": {} }
    ],
    "meta": { "tags": ["noise"], "confidence": 1.0 }
  },
  {
    "id": "constraint_02",
    "name": "Limited Sample Size",
    "inheritanceLevel": 0,
    "description": "Finite observations increase uncertainty.",
    "roles": ["limitation"],
    "specific": {
      "constraint_type": "statistical",
      "source": "resource_limit",
      "effect": "increases_uncertainty",
      "scope": "local",
      "severity": "high"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_constraint", "meta": {} }
    ],
    "meta": { "tags": ["small n"], "confidence": 1.0 }
  },
  {
    "id": "constraint_03",
    "name": "Computational Intractability",
    "inheritanceLevel": 0,
    "description": "NP‑hardness forces approximations.",
    "roles": ["limitation"],
    "specific": {
      "constraint_type": "computational",
      "source": "resource_limit",
      "effect": "limits_precision",
      "scope": "global",
      "severity": "fundamental"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_constraint", "meta": {} }
    ],
    "meta": { "tags": ["NP-hard"], "confidence": 1.0 }
  },
  {
    "id": "infra_01",
    "name": "General-Purpose Laboratory",
    "inheritanceLevel": 1,
    "description": "Physical facility with instruments and environmental controls.",
    "roles": ["infrastructure"],
    "specific": {
      "elementType": ["sensors", "workstations"],
      "latency": "variable",
      "reliability": "high",
      "scalability": "low",
      "interoperability": "medium",
      "maintenance_model": "manual"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_infra", "meta": {} }
    ],
    "meta": { "tags": ["lab"], "confidence": 1.0 }
  },
  {
    "id": "infra_02",
    "name": "Cloud Computing Platform",
    "inheritanceLevel": 1,
    "description": "Elastic virtualized compute and storage.",
    "roles": ["infrastructure"],
    "specific": {
      "elementType": ["compute_units", "storage"],
      "latency": "10‑500ms",
      "reliability": "high (SLA)",
      "scalability": "superlinear",
      "interoperability": "high",
      "maintenance_model": "automated"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_infra", "meta": {} }
    ],
    "meta": { "tags": ["cloud"], "confidence": 1.0 }
  },
  {
    "id": "meta_01",
    "name": "Funding Agency",
    "inheritanceLevel": 1,
    "description": "Provides financial resources, shapes research priorities.",
    "roles": ["meta"],
    "specific": {},
    "edges": [
      { "type": "subtype_of", "node": "cat_meta", "meta": {} }
    ],
    "meta": { "tags": ["funding"], "confidence": 0.95 }
  },
  {
    "id": "meta_02",
    "name": "Scientific Journal",
    "inheritanceLevel": 1,
    "description": "Disseminates validated artifacts, permanent record.",
    "roles": ["meta"],
    "specific": {},
    "edges": [
      { "type": "subtype_of", "node": "cat_meta", "meta": {} }
    ],
    "meta": { "tags": ["publishing"], "confidence": 1.0 }
  },
  {
    "id": "feedback_01",
    "name": "Prediction Error Signal",
    "inheritanceLevel": 0,
    "description": "Mismatch between predicted and observed, driving model update.",
    "roles": ["feedback"],
    "specific": {
      "signal_type": "error",
      "source": "environment",
      "latency": "immediate",
      "target": "model artifact",
      "update_role": "corrective"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_feedback", "meta": {} }
    ],
    "meta": { "tags": ["error"], "confidence": 1.0 }
  },
  {
    "id": "feedback_02",
    "name": "Experimental Anomaly",
    "inheritanceLevel": 0,
    "description": "Observation contradicting theory, triggering revision.",
    "roles": ["feedback"],
    "specific": {
      "signal_type": "anomaly",
      "source": "environment",
      "latency": "delayed",
      "target": "hypothesis",
      "update_role": "destabilizing"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_feedback", "meta": {} }
    ],
    "meta": { "tags": ["surprise"], "confidence": 0.9 }
  },
  {
    "id": "act_01",
    "name": "Observation Act",
    "inheritanceLevel": 0,
    "description": "Directing sensor to target, triggering transduction.",
    "roles": ["act"],
    "specific": {
      "act_type": "observe",
      "input_state": "environmental energy",
      "output_state": "encoded artifact",
      "atomicity": "atomic"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_act", "meta": {} }
    ],
    "meta": { "tags": ["observation"], "confidence": 1.0 }
  },
  {
    "id": "act_02",
    "name": "Comparison Act",
    "inheritanceLevel": 0,
    "description": "Detecting similarity/difference between two artifacts.",
    "roles": ["act"],
    "specific": {
      "act_type": "compare",
      "input_state": "two artifacts",
      "output_state": "similarity judgment",
      "atomicity": "semi_decomposable"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_act", "meta": {} }
    ],
    "meta": { "tags": ["discrimination"], "confidence": 0.9 }
  },
  {
    "id": "act_03",
    "name": "Prediction Act",
    "inheritanceLevel": 0,
    "description": "Generating expected artifact from a model.",
    "roles": ["act"],
    "specific": {
      "act_type": "predict",
      "input_state": "model + current state",
      "output_state": "predicted artifact",
      "atomicity": "atomic"
    },
    "edges": [
      { "type": "subtype_of", "node": "cat_act", "meta": {} }
    ],
    "meta": { "tags": ["anticipation"], "confidence": 1.0 }
  }
]
```

## Web Based Tool 'Conceptual Structure Typing Epistemic Practice' Interface

> Let’s design a **web-based*- tool for interacting with a dataset that represents the **Conceptual Structure of Epistemic Practice Typing**.

Which types of questions or used cases should the tools support?

- **Structural decomposition:*- The tool should answer questions that reveal how any epistemic entity is hierarchically composed into typed components, relations, and substructures within the epistemic graph.
- **Dependency analysis:*- The tool should answer questions that trace what epistemic entities, tools, constraints, or infrastructures must exist for a given artifact or process to be possible or valid.
- **Transformation pathways:*- The tool should answer questions that reconstruct the ordered sequence of epistemic operations by which inputs are converted into outputs across tools, artifacts, and processes.
- **Comparative analysis:*- The tool should answer questions that identify structural, functional, or inferential differences and similarities between two or more epistemic entities across their graph representations.
- **Functional role attribution:*- The tool should answer questions that determine what epistemic function a node or subgraph performs within a larger inference system, such as generation, validation, or control.
- **Constraint analysis:*- The tool should answer questions that identify the limiting conditions, uncertainties, or structural bottlenecks that restrict what can be inferred, constructed, or validated.
- **Feedback tracing:*- The tool should answer questions that track how information from validation signals, errors, or environmental responses propagates back into and modifies epistemic structures.
- **Validity evaluation:*- The tool should answer questions that determine how and why an epistemic artifact or process is considered justified, reliable, or acceptable under specific epistemic standards.
- **Generative inference:*- The tool should answer questions that infer what new epistemic artifacts, models, or structures can be systematically constructed from existing components and relations.
- **Counterfactual simulation:*- The tool should answer questions that evaluate how epistemic structures, outputs, or processes would change under hypothetical modifications of nodes, edges, or constraints.
- **Temporal evolution:*- The tool should answer questions that reconstruct how epistemic entities and their relations emerge, change, stabilize, or decay across time within the system.
- **Similarity and embedding analysis:*- The tool should answer questions that locate epistemic entities within a latent representational space defined by structural, functional, or inferential proximity.

Structure:

- **Overview*- – A panoramic entry point that orients the user by situating the entire conceptual structure within the broader landscape of epistemic practice, revealing its foundational categories and the questions it is designed to answer.
      - **Degree Distribution**: A statistical signature that quantifies the connective asymmetry of the epistemic system, revealing hub artifacts, bottleneck standards, or over‑constrained tools that silently shape inferential capacity.
      - Clustering Coefficient Distribution
      - Connected Components Structure
      - Hierarchical Depth Distribution
      - ...
- **Representation**: How do we represent the data in a way that reveals the structure of epistemic practice? Which epistemic artifacts enable intelligible inference from the dataset?
  - **Graph View**: – A non‑binary relational map that exposes the multi‑entity nature of epistemic acts, where a single hyperedge can jointly connect an artifact, its tool, its agent, and its constraint, thereby recovering the polyadic structure of actual practice.
    - Lenses
      - **Community Cluster Map**:  A macro‑scale topology that groups nodes by structural or functional affinity, making visible the emergent epistemic neighborhoods—such as “validation circuits” or “observation loops”—that would be invisible in a simple node‑link diagram.
      - Overlays
      - Heatmaps
      - Centrality
      - ....
    - Projections
      - **Graph Embedding**: A latent geometric projection that places every epistemic entity in a continuous space where proximity encodes structural similarity, enabling analogical reasoning, anomaly detection, and the discovery of functionally equivalent but non‑obvious elements.
      - ...
  - **Nodes Evolution Map**: ...
  - **Comparison Matrix View**: Contrast two or more instances of the same category (e.g., two different Epistemic Artifacts or two Tools).
  - **Query Interface**: – The analytic probe that allows the user to articulate graph‑pattern questions in terms of edge semantics, inheritance levels, and specific fields, converting the static knowledge graph into a reflectively searchable space of epistemic motifs.
  - **Specific Instance Level View**: A tool to help explore each node in the dataset.
  - **Timeline View**:  – A historicizing lens that recovers the temporal dimension of justification, revealing how standards emerged, how artifacts were revised, and how the validity of a claim is always path‑dependent and situated in a genealogy of prior acts.
- **Meta Epistemic Artifact Set**: A set of epistemic artifact about **'Conceptual Structure Typing Epistemic Practice'**.
  - Metric Set
  - Hierarchical Depth Distribution
  - Clustering Coefficient Distribution
- Admin Toolbox
  - Add new relationships between nodes.
  - ...
- **Documentation**: :  The reflexive layer that makes the representational choices themselves subject to epistemic scrutiny, explicating the edge‑type semantics, the inheritance hierarchy, the field definitions, and the data provenance so the map is never mistaken for the territory.
- **About**:  – The final act of intellectual situating that positions the tool and its taxonomy inside a research program, acknowledging the contingent, historically located act of schema design without which the entire apparatus would remain a disembodied mirror of itself.

### Generic Design Spec

Tech Stack:

- Vanilla HTML, JS,
- Can used libraries etc for Hypergraphs,  stype etc, but not frameworks
- Follow  a general design - for each page with footer - and asides for the toolbox.

Rules:

- The data should be loaded from json.
- The view should be separate from the data.
- Be able to handle 100,000 nodes.
- Handle partial load of the element.
- `...`

1. Design Philosophy

- **Editorial Density:** Information is presented with high signal-to-noise ratio. Whitespace is structural (dividers, padding), not decorative.
- **Epistemic Layering:** The UI mirrors the subject matter: a fixed, structural background (the graph substrate) with a foreground of human-readable narrative and data.
- **System Visibility:** The interface always communicates its underlying state (time, schema version, load state) via peripheral monospaced metadata.

2. Color Tokens

The palette relies on extreme dark values with two distinct semantic accents.
- **Backgrounds:** `--bg-void` (Deepest), `--bg-surface` (Elevated), `--bg-card` (Interactive).
- **Text:** `--text-primary` (Headers), `--text-secondary` (Body), `--text-muted` (Metadata/Labels).
- **Accents:**
    - `--accent-gold`: Used for structural/narrative elements (borders, eyebrows, primary hovers).
    - `--accent-cyan`: Used for computational/active elements (focus states, live data, highlights, links).
- **Borders:** `--border-subtle` (1px, low-opacity white). Used to define structure without visual weight.

3. Typography System

Three typefaces establish a strict hierarchy between narrative, function, and data.
- **Display (Cormorant Garamond):** Human context. Used for page titles, narrative quotes, and section headers. Often italicized for narrative voice.
- **Body (Inter):** Explanatory context. Used for descriptive paragraphs and standard UI text.
- **Mono (JetBrains Mono):** System context. Used for metadata, data values, system specs, inputs, and interactive triggers. Always uppercase for labels; standard case for values.

4. Layout & Structure

- **Content Widths:** Standard reading width `1000px`; Wide system width `1200px`.
- **Structural Dividers:** Use `1px solid var(--border-subtle)` for horizontal and vertical boundaries. Avoid heavy shadows; use hairline borders and background shifts to define elevation.
- **Narrative Accent:** When isolating a quote or core concept, apply a `1px solid var(--accent-gold)` left border.
- **Grid Matrices:** For dense data or navigation, use `gap: 1px; background: var(--border-subtle)` on the container to create hairline grid borders between child elements.

5. Generic Component Rules

- **Inputs (Query/Search):** Must use `--font-mono`. Background `--bg-surface`. Focus state transitions border to `--accent-cyan` with a subtle glow (`box-shadow: 0 0 15px rgba(91, 240, 231, 0.05)`).
- **Data Strips/Metrics:** Always format as `Value` (Mono, `1.5rem`, Cyan) over `Label` (Mono, `0.65rem`, Muted, Uppercase).
- **Interactive Cells/Cards:** Background `--bg-void`. Hover shifts background to `--bg-surface`. Active/Selected state shifts top border or text to `--accent-cyan`.
- **Chips/Tags:** Mono font, `0.6rem`, `--bg-card` fill. Hover/Active adopts Cyan text and border.

6. Interaction & Motion

- **Scroll Reveal:** Elements enter via `.reveal` class. Initial: `opacity: 0; translateY(20px)`. Visible: `opacity: 1; translateY(0)`. Transition: `0.8s ease-out`.
- **Hover Transitions:** Standard duration `0.3s ease`.
- **Focus States:** Never use default browser outlines. Replace with border-color shifts and subtle glows.

7. Atmospheric Layer

Every page must include the **Ambient Canvas** as a fixed background (`z-index: 0`). It renders a subtle, slow-moving constellation graph to reinforce the epistemic topology of the dataset without obstructing the UI.

### Home Page

- What is the goal of the Home Page? How this page should be evaluated? What should be the content of the page?

The Home Page is a high-level epistemic routing interface whose function is to:

> Transform an undifferentiated query or exploratory intent into a structured navigation into epistemic subspaces (overview, representation, query, timeline, etc.), while revealing the system’s global structure at minimal cognitive load.

> The Home Page is a meta-epistemic dispatcher that maps undifferentiated user intent into structurally appropriate epistemic subsystems while exposing only the minimal global signature necessary for orientation.

1. Goal of the Home Page

- Transform undifferentiated user intent into structured navigation across epistemic subsystems (Overview, Representation, Query, Timeline, Node Explorer)
- Act as a meta-epistemic routing interface for the entire system
- Provide minimal but sufficient global structural orientation
- Compress epistemic complexity into navigable entry points without exposing full analytical detail
- Map user intent → appropriate epistemic operation space

2. Formal Role Definition

- Distributional compressor of the full epistemic graph
- Routing surface into epistemic views and operations
- First-order abstraction filter over system complexity
- Meta-epistemic dispatcher for navigation decisions
- Intent-to-structure translation layer

3. Evaluation Criteria

- **Routing Efficiency**

  - User can reach any major subsystem (Overview / Representation / Query / Timeline / Node Explorer) in ≤2 interactions

- **Intent Resolution Accuracy**

  - Ambiguous user intent is correctly mapped to appropriate epistemic subsystem

- **Cognitive Load Compression**

  - User does not need prior system understanding to begin navigation

- **Structural Transparency**

  - System exposes available epistemic operations without exposing internal complexity

- **Non-Redundancy**

  - Does not replicate Overview metrics or Representation visualizations

4. Dataset Identity Strip

- Node count (|V|)
- Edge count (|E|)
- Category entropy (diversity of epistemic classes)
- Edge-type entropy (diversity of relations)
- Graph density (global connectivity indicator)

5. Primary Routing Layer

- Analyze Structure → Overview (diagnostics, topology, system structure)
- Explore Relations → Graph / embedding / neighborhood exploration
- Trace Knowledge Flow → Process / feedback / temporal dynamics
- Inspect Entity → Node-level epistemic artifact inspection
- Query System → Formal graph query interface
- Compare Entities → Structural comparison matrix

6. System Map Preview (Compressed Topology View)

- Macro clustering sketch (abstracted graph regions)
- Dominant node categories (high-frequency epistemic classes)
- Dominant edge types (most structurally influential relations)
- Hub regions (top-k degree nodes aggregated into clusters)

Constraints:

- Maximum 50–100 abstracted nodes
- No full graph rendering
- No deep interaction or traversal logic
- Only structural compression, not exploration

7. Active Epistemic Dynamics Snapshot

- Most connected epistemic artifacts (high-degree nodes)
- Dominant active tools (frequent transformation operators)
- Most constrained domains (constraint-heavy subspaces)
- Strongest feedback loops (dense validation cycles)
- Most central agents (control or coordination hubs)

Constraint:

- Not temporal history
- Not evolution tracking
- Pure structural activity density projection


8. Entry Guidance (Intent Disambiguation Layer)

- “I want to understand how this system works” → Overview
- “I want to see how things connect” → Graph View
- “I want to find why something fails” → Constraint Analysis
- “I want to understand evolution over time” → Timeline View
- “I want to inspect a node” → Node Explorer
- “I want to compare structures” → Comparison Matrix
- “I want to query relationships” → Query Interface

9. Excluded Content (Hard Separation Constraints)

- ❌ Full graph visualizations (Representation layer responsibility)
- ❌ Full statistical distributions (Overview responsibility)
- ❌ Node tooltips or local neighborhoods (Graph responsibility)
- ❌ Full query language UI (Query module responsibility)
- ❌ Temporal evolution charts (Timeline responsibility)
- ❌ Deep semantic interpretation of nodes (Node Explorer responsibility)

### Overview Design Spec

- What is the goal of the overview page? How this page should be evaluated? What should be the content of the page?

> The Overview is a projection of the epistemic graph into structural invariants that describe inference capacity, constraint structure, and control topology.

- Introduction

- Data Set Characterization:
  - Node count (|V|)
  - Edge count (|E|)
  - Edge-type entropy
  - Category entropy
  - Graph density
  - Average branching factor

- Graph Shape Signature
  - Degree Distribution (hub formation / decentralization)
  - Betweenness Centrality Distribution (control points of inference flow)
  - Clustering Coefficient Distribution (local closure of reasoning)
  - Connected Components Structure (fragmentation vs integration)
  - Hierarchical Depth Distribution (vertical epistemic stratification)

### Representation Design Spec

#### Graph View Design Spec

**Guiding questions:**

- What should be the Graph visualization goal?
- How this section should be evaluated? Which are the others visualization options or (toggles that the graph may be able to support?)
- Whick kinds of visual lenses can be created from the dataset?
  - Cluter
  - Heatmaps
  - Overlays
  - Centrality
  - ...
- Which projections or alternatives views can be supported?
  - Graph Embedding
  - Category projection
  - ...
- Which statistics (graph) -> R should we also show to aid the understanding of the graph?

**Functionalty Set:**

- Support native graph visualization using a force-directed rendering engine as the primary spatialization system.
- When hoover the nodes - show a sophisticated visualization.
- Hovering a node highlights all hyperedges incident to it.
- Visual Lenses (Interpretive Overlays)
  - Community Cluster Map – Groups nodes by structural/functional affinity (e.g., “validation circuits”, “observation loops”).
  - Domain Cluster Map -> ...
  - Overlays – Semi‑transparent layers that add contextual information (e.g., constraint severity, feedback strength).
  - Heatmaps – Color‑coded intensity maps over nodes/edges (e.g., eigenvector centrality, constraint density).
  - Centrality visualization – Visual encoding of degree, betweenness, or eigenvector centrality (e.g., node sizing, border thickness).
- Alterantives Views:
  - Graph embedding – Latent geometric projection where proximity encodes structural similarity (supports analogical reasoning and anomaly detection).
  - Category projection – Collapses hyperedges to show only nodes of a selected epistemic category (Artifact, Agent, Tool, etc.).
- Embedding space browser – After computing a graph embedding, provide a 2D/3D scatter plot where Euclidean distance ≈ structural dissimilarity. Brushing selects nodes in the main view.
-
- Nodes drawn as colour‑coded category glyphs (Artifact = square, Agent = diamond, Tool = hexagon, etc.).
- Support the search of nodes.
- Statistics Modal:
  - Graph Density
  - Node Count |V|
  - Fiedler Eigenvalue
  - Hyperedge Count |E|
  - Average Path Length
  - Connected Components Count
  - Average Hyperedge Cardinality
- Category toggles – Show/hide entire epistemic classes (e.g., hide all Constraints to expose only Artifacts and Tools).
- Edge‑type filtering – Display only edges of a selected type (depends_on, validates, encodes, etc.).
- Inheritance level pruning – Collapse or expand nodes based on depth in the type hierarchy.
- Epistemic role glossary – Hover over any edge type or category to see its formal definition (from your taxonomy).

**Node Tooltip:**

The tooltip is a local epistemic lens on a node:

It does not describe the node.
It exposes its position in the epistemic system.

So every tooltip must answer:

- What is this?
- What does it connect to?
- What does it depend on?
- How is it evaluated?
- What is its epistemic role?
- What is it's centrality? (Eigenvector Centrality)
- Revision tracking – Highlight nodes whose reviewHistory changed in a selected time window.

## References

- https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)
- https://www.decisiondeskhq.com/
- https://projects.economist.com/us-2020-forecast/president
- https://web.archive.org/web/20250305183642/
- https://projects.fivethirtyeight.com/
- https://cosmograph.app/
- https://en.wikipedia.org/wiki/Eigenvector_centrality