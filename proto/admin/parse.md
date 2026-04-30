# Parse and Extract the Conceptual Structure Typing Epistemic Practice

> A taxonomy (conceptual structure) that renders the epistemic practice of epistemic agents intelligible.

> Epistemic practice can be characterized as the structured process by which an observer acquires, encodes, transforms, validates, and applies epistemic artifacts about a target domain.

> I used to much LLM for the filling of the details - and they hve move the spct to much - confusing the abstract idea - with a type of computational align tools - which is not.

## Goal Set

- To construct a rigorous, domain-general conceptual structure taxonomy that formally characterizes epistemic practice as a structured system of knowledge acquisition, encoding, transformation, validation, and application—independent of any specific computational tooling implementation.
- Relational Ontology Goal: Construct a comprehensive edge-type framework that captures all structural, operational, normative, dynamic, and infrastructural relations within epistemic practice.
- Knowledge Systems Modeling Goal: Provide a formal foundation for modeling how epistemic agents and institutions generate, maintain, and evolve knowledge.
- To systematically learn from other epistemic agents by modeling how they parse, represent, validate, critique, correct, and refine artifacts that refer to reality.
- Study tools, and mechanisms, and other dimenios to be a better epistemic agent.
- To develop structured methods for detecting epistemic failure modes such as bias, distortion, uncertainty, invalid inference, and representational limitations.
- To identify and formalize best practices for observation, inference, validation, and knowledge correction across disciplines.
- To study epistemic tools, reasoning mechanisms, methodological frameworks, and cognitive strategies in order to improve epistemic performance.
- To master core epistemic tool set domains including mathematics, logic, statistics, computation, scientific methodology, systems theory, modeling, simulation, measurement science, and domain-specific analytical frameworks in order to maximize epistemic capability.
- Note: That epistemic artifact (are description of the world) - they are not parametrized description - but descriptions - that can be valiaded - not a theoretical tool Structural Causal Model (SCM) is a artifact but Structural Caussaling Modelling is the tool toolset.

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

### Edge Type

> Which are the edged types?

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

### Sample Dataset

```json
[
  {
    "id": "standard_04",
    "name": "Law of Large Numbers",
    "category": "Epistemic Standard",
    "inheritanceLevel": 1,
    "description": "Convergence of averages",
    "functionalRoles": ["norm"],
    "realityDomains": [],
    "historicalContext": {
      "summary": "",
      "chronology": []
    },
    "specific": {},
    "relationships": [
      {
        "relationshipType": "subtype_of",
        "targetNodeId": "cat_standard",
        "attributes": {}
      }
    ],
    "metadata": {
      "tags": ["stochastic", "convergence", "statistics", "theory"],
      "confidenceScore": 1.0,
      "sourceReference": "curated",
      "createdAt": "",
      "auditTrail": []
    }
  },
  {
    "id": "process_05",
    "name": "Abduction",
    "category": "Epistemic Process (Activity)",
    "inheritanceLevel": 1,
    "description": "Abduction is an epistemic process aimed at inferring and ranking candidate explanations for a given set of observations, based on how likely those observations would be under each hypothesis in a space of possible worlds.",
    "functionalRoles": ["process"],
    "realityDomains": [],
    "historicalContext": {
      "summary": "",
      "chronology": []
    },
    "specific": {},
    "relationships": [
      {
        "relationshipType": "subtype_of",
        "targetNodeId": "cat_process",
        "attributes": {}
      }
    ],
    "metadata": {
      "tags": ["#activity"],
      "confidenceScore": 1.0,
      "sourceReference": "curated",
      "createdAt": "",
      "auditTrail": []
    }
  }
]
```

## Partial Extraction Work

Schema:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.org/conceptual-structure-node.schema.json",
  "title": "Conceptual Structure Typing Node Schema",
  "description": "Schema for representing epistemic, conceptual, or systemic structures as typed nodes within a conceptual hypergraph.",
  "type": "object",
  "required": [
    "id",
    "name",
    "category",
    "inheritanceLevel",
    "description",
    "functionalRoles",
    "realityDomains",
    "historicalContext",
    "relationships",
    "metadata"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Unique identifier for the node."
    },
    "name": {
      "type": "string",
      "description": "Canonical name of the conceptual structure."
    },
    "category": {
      "type": "string",
      "description": "Major category, subtype, or ontological classification."
    },
    "inheritanceLevel": {
      "type": "number",
      "minimum": 0,
      "description": "Depth within conceptual or taxonomic inheritance hierarchy."
    },
    "description": {
      "type": "string",
      "description": "Formal description of the structure."
    },
    "functionalRoles": {
      "type": "array",
      "description": "Primary functional roles served by this structure.",
      "items": {
        "type": "string"
      }
    },
    "realityDomains": {
      "type": "array",
      "description": "Domains of reality, knowledge, or systems in which this structure operates.",
      "items": {
        "type": "string"
      }
    },
    "historicalContext": {
      "type": "object",
      "required": [
        "summary",
        "chronology"
      ],
      "properties": {
        "summary": {
          "type": "string",
          "description": "Historical summary of the conceptual structure."
        },
        "chronology": {
          "type": "array",
          "description": "Chronological development timeline.",
          "items": {
            "type": "object",
            "required": [
              "year",
              "event",
              "associatedContext"
            ],
            "properties": {
              "year": {
                "type": "number",
                "description": "Year of the event."
              },
              "event": {
                "type": "string",
                "description": "Description of the historical event."
              },
              "associatedContext": {
                "type": "string",
                "description": "Relevant actors, institutions, or contextual factors."
              }
            },
            "additionalProperties": false
          }
        }
      },
      "additionalProperties": false
    },
    "specific": {
      "type": "object",
      "description": "Domain-specific extension fields for specialized conceptual structures.",
      "additionalProperties": true
    },
    "relationships": {
      "type": "array",
      "description": "Connections to other conceptual nodes.",
      "items": {
        "type": "object",
        "required": [
          "relationshipFamily",
          "relationshipType",
          "targetNodeId",
          "attributes"
        ],
        "properties": {
          "relationshipFamily": {
            "type": "string",
            "description": "High-level relation family classification."
          },
          "relationshipType": {
            "type": "string",
            "description": "Specific relationship type."
          },
          "targetNodeId": {
            "type": "string",
            "description": "Identifier of the target node."
          },
          "attributes": {
            "type": "object",
            "description": "Additional relation-specific metadata.",
            "additionalProperties": true
          }
        },
        "additionalProperties": false
      }
    },
    "metadata": {
      "type": "object",
      "required": [
        "tags",
        "confidenceScore",
        "sourceReference",
        "createdAt",
        "auditTrail"
      ],
      "properties": {
        "tags": {
          "type": "array",
          "description": "Semantic or retrieval tags.",
          "items": {
            "type": "string"
          }
        },
        "confidenceScore": {
          "type": "number",
          "minimum": 0,
          "maximum": 1,
          "description": "Confidence score representing epistemic reliability."
        },
        "sourceReference": {
          "type": "string",
          "description": "Reference to source material or provenance."
        },
        "createdAt": {
          "type": "string",
          "format": "date-time",
          "description": "Creation timestamp."
        },
        "auditTrail": {
          "type": "array",
          "description": "Review and revision history.",
          "items": {
            "type": "object",
            "required": [
              "reviewDate",
              "reviewNote"
            ],
            "properties": {
              "reviewDate": {
                "type": "string",
                "format": "date",
                "description": "Date of review."
              },
              "reviewNote": {
                "type": "string",
                "description": "Review notes or modifications."
              }
            },
            "additionalProperties": false
          }
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```

Specifictis:

**Epistemic Artifact**

> Structured object that encodes claims, constraints, or distributions over reality; the primary carrier of semantic content.

> In the edges specification - we need to capture the structure - that is which are the others epistemic nodes - that are somehow contain = or embdeded - or that have yield this artifact?

```json
"specific": {
  "modality": "sensorimotor | computational | cognitive",
  "structure": "summary of the ....",
  "noise_model": "probabilistic_distribution | deterministic_error_function",
}
```

**Epistemic Tool**

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

**Epistemic Agent**

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

**Epistemic Process (Activity)**

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

**Epistemic Standard**

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

**Encoding Substrate**

> Encoding format or substrate in which artifacts are expressed; constrains manipulation and interpretation.

```json
  "specific": {
    "substrate_type": "physical | symbolic | neural | biological | digital",
    "material": "paper | magnetic_disk | flash_memory | DNA | neuron_firing_pattern | silicon",
    "persistence": "volatile | non_volatile | ephemeral",
  }
```

**(Segment of Reality) Epistemic Domain**

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

**Epistemic Constraint**

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

**Epistemic Infrastructure**

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

**Epistemic Feedback**

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

**Epistemic Act**

> Primitive, non‑decomposable operation performed by an agent: attending, discriminating, remembering, anticipating, intervening, comparing, observing (which invokes Observation Encoding).

```json
"specific": {
  "act_type": "observe | compare | encode | retrieve | predict | intervene | discriminate",
  "input_state": "sensory_data | artifact | memory_state",
  "output_state": "updated_artifact | decision | signal",
  "atomicity": "atomic | semi_decomposable",
}
```


Document From Which the Elements Will be Extracted

Diviate this into two steps:

- One planning step - by which you are going to produce a table of the elemnts to be extract to be confirm by the syer
- The other once the confirmation have been recieved is to proceed

=====

# Causality

> In this note we explore the deep concept of causation and causal models.
> 

> **Causation** refers to the **relationship** between events in which one event **affects** another—specifically, where the occurrence or change of one event brings about a change in another.
> 

> **My Take: Causation is in the mind of the observer; not a fundamental feature of reality.**
> 

> Note: A **Causal Model** is basically a **structural-dynamical model** of something.
> 

> Causality:  Piece of Reality * Technique → Causal Model.
> 

![Untitled](Causality/Untitled.png)

![How to think about system interventions?](Causality/image.png)

How to think about system interventions?

## Index

## Meta

> Evaluation Framework.
> 

### **✅** Evaluation

> What is my **epistemic assessment** of this topic? How well do I understand this subject?
> 

> See more in [](https://www.notion.so/1cfc0f5171ec80a1ad0ee6cc17ade968?pvs=21) & [](https://www.notion.so/250c0f5171ec8010a8d3caa5d0a1266e?pvs=21)
> 

| **Meta-Dimension** | **Note** |
| --- | --- |
| **Note Quality** | … |
| **Completeness** | … |
| **Coherence & Structure** | … |
| **Epistemic Self-Assessment** | … |
| **Should I Reorganize This -in My Content Forest?** |  |
| **What’s my study Strategy? Should I Change It?** |  |

### **🌌** Signature

> A comprehensive list of aspects to cover in order to understand a topic.
> 

| Aspect | Causal Modeling |
| --- | --- |
| Nucleus (Deepest Essence) 🧬 | Causal modeling is the formal representation of cause-effect relationships between variables, aiming to understand how interventions or changes in one variable propagate through a system. It’s about inferring mechanisms, not just correlations. |
| Evidentia (Evidence) 📊 | Evidence comes from observational data, experiments, randomized controlled trials, simulations, and sometimes expert knowledge. Verification involves statistical tests, causal inference algorithms (e.g., do-calculus, structural equation modeling), sensitivity analysis, and out-of-sample prediction under interventions. |
| Telos (Intent) 🎯 | Purpose: predict the effect of interventions, inform decisions, and understand mechanisms. Tools: directed acyclic graphs (DAGs), structural equation models, counterfactual frameworks, and causal discovery algorithms. Outcomes: policy guidance, risk assessment, system optimization, and scientific understanding. |
| Gnosis (Understanding) 🧠 | To build mental representation: |
|  | • Understand variables, confounders, mediators, moderators |
|  | • Conceptualize causal diagrams and structural equations |
|  | • Learn to distinguish correlation vs causation |
|  | • Have a foundation in statistics, probability, and logic |
|  | • Develop hierarchical, flexible, connected mental models adaptable to new data and scenarios |
| Epignosis (Application) 🛠️ | Applied in epidemiology, economics, AI interpretability, policy design, medicine, and engineering systems. Advanced skills: counterfactual reasoning, designing interventions, sensitivity analysis, and causal discovery from complex datasets. |
| Relatio (Connections) 🔗 | Interdisciplinary links with statistics, machine learning, systems biology, epidemiology, econometrics, psychology, decision science, philosophy of science, network theory, and dynamical systems. |
| Idoneitas (Suitability) 📐 | Effectiveness measured by predictive accuracy under interventions, consistency with experimental results, robustness to confounders, and ability to identify actionable causal insights. |
| Limites (Limits) ⛔ | Boundaries: |
|  | • Cannot infer causality from correlation alone |
|  | • Limited by unobserved confounders |
|  | • Sensitive to model mis-specification |
|  | • Complexity scales poorly with high-dimensional systems |
|  | • Some systems are too stochastic or emergent for tractable causal modeling |
| Contextus (Context) 🌍 | Emerged from statistics, philosophy of science, and experimental design, formalized by Pearl, Rubin, and others. Historically tied to scientific reasoning, epidemiology, economics, and AI. |
| Dynamis (Evolution) 🌱 | Evolving with machine learning, agent-based modeling, complex systems, and big data analytics. Future directions: automated causal discovery, integration with reinforcement learning, handling highly dynamic or emergent systems. |
| Critica (Critique) 🔍 | Common criticisms: |
|  | • Over-reliance on models with strong assumptions |
|  | • Difficulty with latent variables or feedback loops |
|  | • Risk of misinterpretation in policy decisions |
|  | • Ongoing debates about causality in observational studies vs experiments |
| Verbum Usus (Language Use) 🗣️ | “Causal modeling” is used across scientific, engineering, and policy discourse to denote formal causal inference. Variations: |
|  | • Statistics: DAGs and structural equations |
|  | • AI: causal representation learning |
|  | • Social sciences: causal inference from observational studies |
|  | Usage trends increasingly emphasize algorithmic and computational approaches. |

### 📕 Terminology

> **Afectar (**`afficere`**) :** *hacer algo a alguien o algo*, *ejercer una acción sobre.*
> 

| **Term** | **Description** | **Key Distinction from Causation** |
| --- | --- | --- |
| **Influence** | The capacity to shape or alter outcomes, often indirectly. | May lack direct or necessary connection; often about *tendency* or *pressure*. |
| **Correlation** | A statistical association between variables without implied direction or cause. | No directionality or mechanism; correlation ≠ causation. |
| **Condition** | A circumstance or requirement that must be present for something to occur. | A condition may be necessary, but not sufficient for causation. |
| **Determinant** | A factor that strongly influences an outcome, often statistically identified. | Often used empirically to mean "important cause," but not always in a strict sense. |
| **Factor** | Any element contributing to a result or situation. | Vague about mechanism or necessity; can be causal, enabling, or merely contextual. |
| **Driver** | A dominant force or influence behind a trend or change. | Stronger than “influence”; implies direction and salience. |
| **Mechanism** | The process or system through which an effect is produced. | Describes *how* causation operates, not whether it exists. |
| **Effect** | The outcome or result of a cause. | Defines causation from the result side; implies causality but doesn't establish it alone. |
| **Precondition** | A required state or circumstance that enables a cause to take effect. | Necessary for cause to operate, but not a cause itself. |
| **Trigger** | An event or condition that initiates a process or reaction. | Often an initiating cause, not necessarily the root or structural one. |
| **Antecedent** | Something that comes before an event. | Causally ambiguous; not all antecedents are causes. |
| **Catalyst** | An agent that accelerates or facilitates a process without being the main cause. | Facilitates or accelerates causation but isn’t a primary cause. |
| **Stimulus** | An external event or input provoking a reaction. | Often part of a cause-effect pair, but doesn’t imply full causality. |
| **Constraint** | A limit or restriction shaping possible actions or outcomes. | Not a cause of an event, but a shaper of causal possibilities. |
| **Enablement** | A condition that permits or empowers an effect to occur. | Removes barriers or provides conditions; not a cause itself. |
| **Necessity** | A condition without which the effect cannot occur. | Necessary ≠ sufficient; focuses on the *dependence* aspect of causation. |
| **Sufficiency** | A condition that, if present, guarantees the effect. | A sufficient cause may not be *the* cause; focuses on completeness. |
| **Impetus** | A motivating force behind an action or change, often loosely defined. | Often metaphorical; less formal than "cause." |
| **Association** | A statistical relationship between two or more variables; when one changes, the other tends to change too. | No implied direction, mechanism, or necessity; weaker than causation. |

## Effective Abstraction

> How to think  about causality?
> 

Causality in Complex Systems Effective Abstractions:

- Coupling
- Influence
- Interaction
- Intervention
- Dependency
- Counterfactual
- Counterfactual
- Structural Causal Model (SCM)

## Formulation

> Causation refers to a very deep aspect of reality, in which events are connected through lawful dependence — where one state or occurrence gives rise to another across time.
> 

> **Causality** refers to the theoretical framework and principles that define cause-and-effect relationships, often formalized through models (e.g., structural causal models or potential outcomes), while **causation** specifically denotes the empirical act or instance of one event directly producing another, typically inferred through observation, experimentation, or statistical analysis.
> 

> Causality is the structured pattern of constraint between events or states such that the realization of one condition systematically affects the possibility or probability of another.
> 

> Core Question: Why this effects?
> 

> Action → Effect.
> 

> **Causality**:  Piece of Reality * Technique → Causal Model.
> 
- **Piece of Reality** – some phenomenon or subset of the real world you want to understand.
- **Technique** – the formal, conceptual, or computational method used to analyze it (e.g., statistical models, structural equations, DAGs, simulations).
- **Causal Model** – the output: a representation that encodes relationships, interventions, and predicted effects.

---

Minimal Structural Requirement for Causation

For a relation C(A,B) to count as causal, it must involve:

1. **Asymmetry** If A causes B, then B does not cause A (in the same sense).
2. **Directedness** There is an orientation: A → B.
3. **Non-simultaneous dependency (in some ordering)** A occupies an earlier position than B in some ordered structure.

This ordering can be:

- Temporal
- Logical
- Structural
- Dynamical
- Counterfactual

## Formalization

> How can the notion of causation be formalized to aid operationalization?
> 

### Problematization

> Which are the formalization goal?
> 

![image.png](Causality/image%201.png)

| Perspective | Explanation |
| --- | --- |
| **Theory of Influence** | How one event/factor *affects* or *brings about* another. |
| **Theory of Change** | How changes in one thing produce changes in another over time or conditions. |
| **Theory of Dependence** | How some phenomena *depend* on others for their occurrence or state. |
| **Theory of Explanation** | How to explain why things happen — by identifying causal relationships. |
| **Theory of Mechanisms** | How underlying processes or structures produce observed effects. |
| **Theory of Counterfactuals** | How the world would differ if some event had or had not occurred. |
| **Theory of Intervention** | How manipulating one factor causes change in another (basis for experiments). |

### **Formalization  Space**

| **Formalization** | **Formalism** | **Description** |
| --- | --- | --- |
| **Counterfactual Formalization** |  | Defines causation in terms of *difference-making*: “If A had not occurred, B would not have occurred.” |
|  | **Structural Causal Models (SCM)** | Uses directed acyclic graphs (DAGs) and structural equations to represent and compute counterfactuals. |
|  | **Potential Outcomes Framework (Rubin Model)** | Represents causation through contrasts between potential outcomes (Y₁, Y₀) under different treatments. |
|  | **Lewisian Counterfactual Semantics** | Defines causation via possible-world semantics: *C causes E if E would not occur in the nearest possible world where C does not occur.* |
| **Interventionist Formalization** |  | Defines causation through *manipulability*: C causes E if an intervention on C changes E. |
|  | **Do-Calculus** | Algebraic rules for reasoning about interventions and identifying causal effects from observational data. |
|  | **Causal Bayesian Networks** | Probabilistic graphical models that incorporate interventions as variable manipulations. |
|  | **Manipulability Models (Woodward)** | Philosophical operationalization: causation as invariant relationships under interventions. |
| **Probabilistic Formalization** |  | Describes causation as a statistical dependency such that P(E |
|  | **Suppes’ Probabilistic Causality** | Defines causation as probabilistic raising: P(E |
|  | **Bayesian Probabilistic Models** | Causation inferred via posterior probability updates on causal hypotheses. |
|  | **Stochastic Process Models** | Capture probabilistic dependencies in evolving systems. |
| **Mechanistic Formalization** |  | Explains causation as a sequence of intermediate processes linking cause and effect. |
|  | **Process Theories of Causation (Salmon, Dowe)** | Causation as a physical process transmitting conserved quantities (e.g., energy, momentum). |
|  | **Entity-Mechanism Framework (Machamer-Darden-Craver)** | Mechanisms as organized entities and activities producing regular changes. |
|  | **Causal Graph Dynamics** | Describes evolving graph structures where local interactions produce global causal patterns. |
| **Dynamical Systems Formalization** |  | Models causation as lawful state transitions in dynamical systems or computational processes. |
|  | **Differential Equation Models** | Describe continuous causal change via deterministic or stochastic differential equations. |
|  | **State-Space Models** | Represent causal evolution as transitions between system states (xₜ → xₜ₊₁). |
|  | **System Dynamics (Forrester Models)** | Causal feedback loops represented via stocks, flows, and feedback structures. |
|  | **Agent-Based Models (ABM)** | Causation modeled as emergent behavior from local agent rules. |
| **Information-Theoretic Formalization** |  | Quantifies causal influence as directed information flow (e.g., transfer entropy, Granger causality). |
|  | **Granger Causality** | X causes Y if past values of X improve prediction of Y beyond Y’s own history. |
|  | **Transfer Entropy** | Quantifies directional information flow from X to Y. |
|  | **Directed Information** | Measures causal influence in communication-theoretic terms. |
|  | **Integrated Information Theory (IIT)** | Treats causal structure as integrated information across system partitions. |
|  | **Causal Emergence (Hoel)** | Quantifies causal power at different system scales via information metrics. |

### Theory

> Which are the theories of causation?
> 

| **Theory of Causation** | **Description** |
| --- | --- |
| **Plato’s Theory of Causation** | Causes are related to the participation of things in eternal Forms or Ideas; causation is linked to metaphysical ideals and the "Form of the Good." |
| **Aristotle’s Four Causes** | Aristotle’s influential framework identifying four types of causes: material (what something is made of), formal (the form or essence), efficient (the agent or mover), and final (the purpose or end). |
| **Medieval Scholastic Causation** | Integration of Aristotelian causes with Christian theology; causation involves God's will as the ultimate cause, plus natural efficient and final causes in the created world. Key thinkers include Thomas Aquinas. |
| **Regularity Theory (Hume)** | David Hume argued that causation is based on observed constant conjunction and habit of mind, not on direct perception of necessary connection. |
| **Counterfactual Theory** | Causation is defined by dependence on what would happen under alternate scenarios (if cause hadn’t occurred, effect wouldn’t either). |
| **Manipulation/Interventionist Theory** | Causal relations are those that would change under hypothetical interventions or manipulations. |
| **Probabilistic Theory** | Causes raise the probability of their effects rather than guaranteeing them deterministically. |
| **INUS Condition Theory (Mackie)** | Causes are parts of complex conditions that are insufficient alone but non-redundant parts of conditions sufficient for the effect. |
| **Process Theory** | Causation as a physical process transmitting conserved quantities like energy or momentum. |
| **Mechanistic Theory** | Causes are components of mechanisms that interact in organized ways to produce effects. |
| **Narrative or Historical Theory** | Understanding causation as a chain of events in historical or narrative contexts. |
| **Agency or Intentional Theory** | Causation attributed to agents’ intentions and deliberate actions producing effects. |
| **Leibniz’s Theory of Causation** | Every event has a metaphysical sufficient reason; causes and effects are connected by necessity and pre-established harmony. |
| **Hume’s Skeptical Approach** | Causation is not something we observe directly but infer by mental habits and expectations; rejects necessary connection beyond observed patterns. |

## Modelling

> In a **causal model**, we try to represent a phenomenon using a set of elements or factors and their interactions—how they influence each other—and the resulting effects. The model formalizes assumptions about these relationships, allowing us to predict outcomes under interventions, analyze counterfactual scenarios, and understand the underlying mechanisms driving the observed behavior.
> 

> A **causal model** is a representation of the relationships between variables in a system, aiming to understand how changes in one variable can **influence** or cause changes in other variables.
> 

### Factor

> Exploration of the **Factor Space or Taxonomy**.
> 

> A causal factor is any element, condition, or variable that contributes to producing, modifying, or influencing an outcome within a system.
> 

| **Category** | **Type** | **Role** | **Factor(s)** |
| --- | --- | --- | --- |
| **Role in System** | Direct cause | Factor that exerts a direct effect on the outcome; changes in this factor produce measurable changes in the target. | Medication, intervention, stimulus |
|  | Indirect / Mediator | Transmits the effect of one factor to another; explains part of the causal pathway. | Enzyme activity, economic policy |
|  | Confounder | Influences both cause and effect, potentially biasing causal inference if not controlled for. | Age, socioeconomic status, baseline health |
|  | Effect modifier / Moderator | Alters the strength or direction of the causal relationship; interactions are important. | Gender, environmental context, genotype |
|  | Spurious cause | Appears causal due to correlation but has no true causal effect; often due to unobserved factors. | Coincidental correlation, proxy variable |
| **Nature** | Physical / Material | Tangible, measurable factors in the environment or system. | Temperature, pressure, chemical concentration |
|  | Biological / Physiological | Internal system properties that affect outcomes. | Hormone levels, gene expression, blood pressure |
|  | Behavioral / Agent-driven | Human or agent actions influencing outcomes, often mediating system effects. | Decisions, habits, adherence, consumption |
|  | Environmental / Contextual | External conditions that shape causal pathways. | Climate, institutions, laws, infrastructure |
|  | Abstract / Latent | Unobserved or inferred factors included in models; often estimated from data. | Risk propensity, intelligence, latent variables |
| **Temporal  (Structural)** | Necessary cause | Without this factor, the outcome cannot occur. | Pathogen in disease, oxygen for fire |
|  | Sufficient cause | Presence guarantees the outcome. | Complete causal mechanism, combination of factors |
|  | Contributory / Probabilistic cause | Increases likelihood of outcome; neither necessary nor sufficient alone. | Smoking for lung cancer, diet for obesity |
|  | Feedback / Circular | Participates in recursive loops, producing cyclical or reinforcing effects. | Predator-prey dynamics, supply-demand loop |
|  | Threshold / Tipping-point | Effect occurs only after factor exceeds a certain level or threshold. | Critical mass, toxin dose, social adoption |
|  | Emergent / Systemic | Effects arise from complex interactions; cannot be attributed to any single factor. | Market stability, ecosystem resilience |
| **Data (Measurement)** | Observable | Directly measurable factor in data; can be incorporated into models. | Measured blood pressure, temperature |
|  | Latent / Unobservable | Cannot be directly measured; often modeled indirectly. | Cognitive ability, social norms |
|  | Proxy | Used to approximate unobservable factors; may introduce bias if misaligned. | Zip code as socioeconomic indicator |

### Causal Structure

> …
> 

### **Counterfactual**

> **Counterfactual**: It’s counter to the facts. It’s about imagining the different outcomes of processes, It’s knowing that different futures we’re possible. It’s acknowleging that it’s hard to forecast. This idea can be related with the **Hindsight bias**. http://bayes.cs.ucla.edu/PRIMER/primer-ch4.pdf
> 

### Causal Path

> A **causal path** refers to the **sequence of actions, decisions, conditions, or oversights** that culminate in a specific event or outcome (e.g., a leaking pipe). Below are alternative terms and frames for referring to this idea in various contexts:
> 

> **History**: The chronological record of relevant past actions or events.
> 

> **Historical Pathway**: The structured unfolding of decisions, interactions, and environmental conditions over time that lead to a particular outcome.
> 

> **Causal Chain**:  A linear or branching sequence of causes, where each link contributes to the final effect.
> 

> **Chain of Events**: A sequence of events, not all of which may be causal, that precede the outcome.
> 

> **Causal Pathway**:  A detailed and often multilevel route through which an outcome emerges, often involving mechanisms and intermediaries.
> 

## Causality in Complex Systems

> These tools **don’t assume linearity or single-point causation** — they model **influence**, **dependency**, and **system-level structure**.
> 

Useful approaches include:

- **Causal networks & graph models** (like Bayesian networks or DAGs)
- **Granger causality** (in time-series, especially economics)
- **Information-theoretic approaches** (e.g., transfer entropy)
- **Dynamical systems theory** (e.g., attractors and bifurcations)
- **Agent-based modeling** (to explore distributed cause-effect patterns)

Reification: 

- In complex systems, every statistical regularity observed at the interface is always the product of layered interactions within the system, not a simple property of a single factor.

## Pitfall

### Against Reification: Causality in Layers

When researchers say *“the causal impact of having children on women’s outcomes”*, they usually mean: *“conditional on everything else we can control for, the statistical discontinuity at childbirth can be interpreted as if children caused this effect.”* But that hides a lot of complexity.

Here’s how we can **deconstruct** the idea:

Causality in layers

The effect of “having a child” is not a single mechanism, but a **bundle of layered processes**, such as:

- **Biological/physical layer**: pregnancy, recovery, breastfeeding, health impacts.
- **Household division of labor**: how tasks are reallocated between partners.
- **Workplace structures**: parental leave policies, flexibility, employer expectations.
- **Cultural norms**: expectations that women, more than men, will provide primary childcare.
- **Institutional arrangements**: childcare availability, subsidies, legal protections.

All of these contribute to the “child penalty,” but they are distinct causal pathways.

The problem of **causal language**

In economics papers, the phrase *“causal effect”* often comes from a clean **research design** (like difference-in-differences or regression discontinuity). But what is estimated is:

- the *net average effect* of the event “first childbirth” on women’s outcomes,
- not the unpacking of which mechanisms are responsible.

So when the paper says “causal,” it is **methodological causality** (identification of an effect) rather than **ontological causality** (what in reality makes the effect happen).

Why this matters

- If you don’t **layer causality**, you risk reifying “children” as an abstract causal agent — when in fact it’s the *interaction of children with social, economic, cultural, and institutional structures*.
- Policy design depends on the decomposition: if most of the penalty comes from workplace rigidities, the fix is very different than if it comes from cultural expectations in households.

“The earnings penalty associated with childbearing is a composite causal effect arising from biological, social, and institutional layers. Statistical methods can isolate the overall penalty, but explaining its structure requires decomposing the layered causal mechanisms.”

## Conceptual Model

[Conceptual Model: Causality](Causality/Conceptual%20Model%20Causality%2015fc0f5171ec806a9340c93a43889be8.csv)

## *Limits*

> Which are the limits of causal modelling?
> 

> Should we explicitly encode interactions (e.g., via structural equations or DAGs), or let them emerge from richer frameworks such as generative physics, simulations, or agent-based dynamics?
> 

> Can we realistically encode models with hundreds of variables, or does complexity make this impractical?
> 

| **Limit** | **Challenge** |
| --- | --- |
| **Encoding / Representation** | How do we know that our causal model correctly captures the true causal structure of the system? Misrepresentation or omitted variables can lead to incorrect conclusions. |
| **Observability / Data Availability** | Many causal factors may be unobserved or unmeasurable. Limited or biased data restricts the model's accuracy. |
| **Confounding / Hidden Variables** | Hidden confounders can induce spurious correlations, making causal inference unreliable. |
| **Complexity / Nonlinearity** | Highly nonlinear or high-dimensional systems may be impossible to fully model with current methods. |
| **Intervention Limitations** | Some causal relationships cannot be experimentally tested due to ethical, technical, or practical constraints. |
| **Temporal Ambiguity** | Determining the correct temporal ordering of events can be difficult, especially with cross-sectional data. |
| **Context Dependence / Generalizability** | Causal effects may vary across populations, environments, or time, limiting the generalizability of a model. |
| **Counterfactual Reasoning Limits** | Inferring what would happen under unobserved interventions relies on assumptions that may not hold. |
| **Computational / Algorithmic Limitations** | Complex causal discovery algorithms may be computationally intensive or fail to converge on a correct solution. |

## Use

| **Domain** | **Use** | **Description** |
| --- | --- | --- |
| **Philosophy** | Ontological Analysis | Understanding the nature of being by identifying necessary and sufficient causal relations. |
|  | Explanation Theory | Framing why events happen through causal chains (e.g., Aristotelian causes, counterfactual theories). |
|  | Free Will & Responsibility | Determining moral agency based on causal responsibility. |
| **Science** | Experimental Design | Establishing causal relationships through controlled interventions and manipulations. |
|  | Theory Formation | Formulating laws or models that encode causal mechanisms (e.g., Newtonian mechanics). |
|  | Prediction and Explanation | Using causality to explain phenomena and predict future events or system behavior. |
| **Statistics & AI** | Causal Inference | Estimating the effects of interventions from observational or experimental data (e.g., DAGs, SCMs). |
|  | Counterfactual Reasoning | Modeling hypothetical outcomes under alternative scenarios. |
|  | Fairness & Bias Detection | Identifying and mitigating unfair causal influences in algorithmic decisions. |
| **Law** | Legal Responsibility | Assigning liability or blame based on proximate and actual causes of an event. |
|  | Torts and Negligence | Evaluating damages by establishing causal connections between actions and harms. |
| **Medicine & Epidemiology** | Diagnosis & Etiology | Identifying the cause of diseases or symptoms (e.g., pathogen–disease link). |
|  | Public Health Policy | Designing interventions by understanding causal pathways (e.g., smoking → cancer). |
| **Economics** | Policy Evaluation | Assessing the causal impact of policies (e.g., minimum wage on employment). |
|  | Structural Modeling | Using causal models (e.g., DSGE, SEM) to simulate policy changes and their effects. |
| **History & Sociology** | Historical Causation | Explaining historical events through chains of social, economic, or political causes. |
|  | Social Mechanism Explanation | Understanding how individual and collective actions produce social outcomes. |
| **Engineering & Systems** | Root Cause Analysis | Tracing system failures to their underlying causes (e.g., fault trees, fishbone diagrams). |
|  | Control System Design | Using feedback loops where outputs causally influence future inputs. |
| **Education** | Concept Learning | Teaching students to understand relationships between variables, phenomena, or ideas. |
|  | Misconception Correction | Identifying incorrect causal beliefs and replacing them with accurate causal models. |
| **Everyday Reasoning** | Decision-Making | Inferring what actions will cause desired or undesired outcomes. |
|  | Blame Attribution | Assigning fault or praise based on perceived causal role in outcomes. |
|  | Planning | Anticipating effects of actions in order to sequence them efficiently. |

## Case Study

- Can we really talk about “causes” of something like World War I?

## ❓ QA

- How to improve things? [**A Guide to Improving Computational Systems in a Principled Way**](../Breviarium/Conceptual%20Model%20Guide/A%20Guide%20to%20Improving%20Computational%20Systems%20in%20a%20Pr%201bec0f5171ec808fb56ffd094de27a12.md)
- How to intervene a complex system?
- Are there frameworks that account for interactions between units (e.g., network causal models)?
- Which are the failures of  current **causal frameworks**?
- What are the main limitations of current causal frameworks (e.g., Pearl's do-calculus, Rubin's potential outcomes)?
- Do current causal frameworks attempt to model the entire underlying system under investigation? What are the consequences of not modeling the entire system in causal inference?
- How do randomized controlled trials (RCTs) fit into causal inference, and what are their limitations?
- How do current causal frameworks account for "side effects" or unintended consequences of interventions?
- Which are the consequence of running multiple experiments?
- What is the relationship between **causal modelling** and **experimentation**?
- Explanation (Why) (reverse engineering)
    - What are the causes of a specific outcome or behavior in a system?
    - Which variables or factors have a causal influence on the system?
- Intervention (Which are the consequences) (prediction)
    - How will a specific intervention or change in the system affect its behavior or outcomes?
    - What would have happened to the system if a different action or intervention had been taken?
    - How will a local change propagate through the system and affect its global behavior?
    - Can we predict the system's behavior under new interventions or conditions?
    - How can we design interventions to achieve a desired outcome while minimizing unintended consequences?
    - Will the changes persist over time or is just temporal?

### Does a “cause” always exist to explain something?

> Not necessarily. Seeking a causal explanation is often a habit of the mind, a way we organize our perception of events. However, in stochastic systems, highly complex systems, or chaotic systems, a single, well-defined cause may not exist. In these contexts, outcomes often arise from multiple interacting factors, probabilistic patterns, or emergent dynamics rather than from a single identifiable cause.

## References

- [Cognitive](../Modelo/Human/Cognitive%208292b945586b49d3b3e2c3323d8bb53a.md)
- [Guia Mayor](../Guia%20Mayor%20cce02f04c4724677ba46b314151134db.md)
- [Representation](../Modelo/Human/Cognitive/Conceptual%20Model%20Cognition/Representation%2016fc0f5171ec80c6bb5fc675d075f9b1.md)
- [A Guide to Study](../Breviarium/Conceptual%20Model%20Guide/A%20Guide%20to%20Study%20c24ba1c6d4084de1b741ff4fef7a1749.md)
- [](https://www.notion.so/245c0f5171ec80749daec722e73b8a81?pvs=21)
- [A Guide to Language and Cognition](../Breviarium/Conceptual%20Model%20Guide/A%20Guide%20to%20Language%20and%20Cognition%201aac0f5171ec804794dbc97bc4999e9c.md)
- [](https://www.notion.so/24ac0f5171ec8020aec7f11bae9eb632?pvs=21)
- [Reichenbach’s Common Cause Principle](https://plato.stanford.edu/entries/physics-Rpcc/)
- https://en.wikipedia.org/wiki/Causal_model
- https://gwern.net/causality
- https://plato.stanford.edu/entries/causal-models/
- https://gist.github.com/dbremont/914cdbcf861238742ea1d41c7bf0d08e#causality
- https://github.com/Computational-Turbulence-Group/SURD
- [ ]  [Ontology](../Modelo/Philosophia%20Naturalis/Conceptual%20Model%20Philosophia%20Naturalis/Ontology%20138eea37a34f43ed87c16d1818629723.md)
- [ ]  https://plato.stanford.edu/entries/causation-metaphysics/
- [ ]  https://plato.stanford.edu/entries/causation-physics/
- [ ]  https://plato.stanford.edu/entries/aristotle-causality/
- [ ]  https://plato.stanford.edu/entries/events/
- [ ]  https://plato.stanford.edu/entries/agency/
- https://plato.stanford.edu/entries/aristotle-causality/
- https://plato.stanford.edu/entries/kant-hume-causality/
- https://plato.stanford.edu/entries/causation-medieval/
- https://plato.stanford.edu/entries/arabic-islamic-causation/
- https://plato.stanford.edu/entries/qm-retrocausality/
- https://plato.stanford.edu/entries/occasionalism/
- https://plato.stanford.edu/entries/causation-probabilistic/
- https://plato.stanford.edu/entries/causation-backwards/
- https://plato.stanford.edu/entries/mental-causation/
- https://plato.stanford.edu/entries/causation-law/
- https://plato.stanford.edu/entries/causation-counterfactual/
- https://plato.stanford.edu/entries/causation-mani/
- https://plato.stanford.edu/entries/leibniz-causation/
- https://plato.stanford.edu/entries/determinism-causal/
- [Correlation](Observational/Conceptual%20Model%20Observational/Correlation%2020cc0f5171ec8067ae1cf62c8673990e.md)
- https://causalwizard.app/reading/
- [Judea Pearl Publications](https://bayes.cs.ucla.edu/csl_papers.html)
- https://arxiv.org/abs/cs/0011012?utm_source=chatgpt.com
- Hall, Ned, John Collins, and Laurie Paul. Two concepts of causation. MIT Press, Cambridge, MA, 2004.
- [**Probabilistic Graphical Model** (**PGM**)](Observational/Conceptual%20Model%20Observational/Probabilistic%20Graphical%20Model%20(PGM)%20c0efe1010a8e4bf8afc346102c6a1254.md)
- https://public.econ.duke.edu/~kdh9/Courses/Causality%20Course/ReadingList.htm [Duke Causation Course]
- https://en.wikipedia.org/wiki/Swiss_cheese_model
- [Root Cause Analysis (RCA)](../Miscellanea/Management/Quantitative%20Management/Conceptual%20Model%20QM/Root%20Cause%20Analysis%20(RCA)%20236c0f5171ec80df9aebee5c3f24f6f1.md)
- https://philosophy.stackexchange.com/questions/111955/what-is-causation
- [Event Structure](../Formal%20System/Conceptual%20Model%20Formal%20System/Event%20Structure%20241c0f5171ec8097b06ae76b37c7bf3d.md)
- [**Computational Irreducibility**](../Modelo/Philosophia%20Naturalis/Conceptual%20Model%20Philosophia%20Naturalis/Computational%20Irreducibility%20241c0f5171ec805a9d2aee411573479c.md)
- https://iep.utm.edu/causation/
- *Causation* (Book) David Lewis (1973)
- Causality and Explanation Wesley Salmon (1984)
- A Theory of Causality James Woodward (2003)
- Causal Diagrams for Empirical Research Judea Pearl (1995)
- The Logic of Structural Models Judea Pearl (2000)
- A New Look at the Statistical Model Identification Hirotugu Akaike (1974)
- A Theory of Causal Learning in Children: Causal Maps and Bayes Nets - Gopnik et al. (2004)
- Identification of Causal Effects Using Instrumental Variables - Angrist & Imbens (1995)
- Counterfactual Reasoning and Learning Systems - Bottou et al. (2013)
- https://en.wikipedia.org/wiki/Retrocausality
- [Epiphenomenon](../Modelo/Philosophia%20Naturalis/Conceptual%20Model%20Philosophia%20Naturalis/Epiphenomenon%202e2c0f5171ec80e1a93ee13de24bbc04.md)