# Validate the Category of Concepts

> Let's match a concept against this set of categories - usign this rules

> Which are the sets of concept that characterize  epistemic practice? How to capture all of this concept in a database?

| **Category** | **Description** | **Instance(s)** |
| --- | --- | --- |
| **Observation Interface & Recoding** | The sensorimotor boundary + inscription process that transduces a Domain Snapshot into a persistent encoded artifact. Includes transduction, sampling, quantization, encoding, and storage. | CMOS sensor + ADC + JPEG + SD card; thermocouple + data logger + CSV file; human retina + V1 cortex + working memory. |
| **Epistemic Artifact** | Structured object and **specific object** that encodes claims, constraints, or distributions over reality; the primary carrier of semantic content. | Propositions, numbers, datasets, differential equations, probabilistic models, Hypergraphs, property encoding, … |
| **Epistemic Artifact Encoding Form (Artifact Form) (Artifact Blueprint)** | Encoding format or substrate in which artifacts are expressed; constrains manipulation and interpretation. | Directed Acyclic Graph (DAG), Structural Equation (functional notation), Polynomial Equation, … |
| **Epistemic Tool** | Formal or procedural mechanism used to construct, transform, representation form ( abstract artifact)or validate epistemic artifacts. | Algebraic manipulation, statistical inference, optimization algorithms, simulation methods, measurement procedures,  generic or abstract class of artifact or let’s called it by representational form. |
| **Epistemic Agent** | Entity that performs epistemic operations by applying tools to artifacts. | Scientist, analyst, research institution, machine learning system, automated pipeline |
| **Epistemic Process (Activity)** | Ordered sequence of tool applications over time; defines the dynamics of knowledge construction. | Scientific method, Bayesian updating loop, training pipeline, experimental cycle |
| **Epistemic Standard** | Normative criteria used to evaluate validity, correctness, or acceptability of artifacts and processes. | Logical consistency, statistical significance, reproducibility, robustness, falsifiability |
| **Encoding Substrate** | Segment of reality that the epistemic practice targets or models. | Physical systems, biological systems, social systems, computational systems |
| **Epistemic Constraint** | Limitation that bounds what can be known or inferred within the system. | Noise, limited data, computational complexity, identifiability issues, measurement error, ignorance, intractability, stochasticity, higher-order stochasticity, chaos, nonlinearity, uncertainty propagation, and observational limitations. |
| **Epistemic Infrastructure** | Supporting environment that enables storage, computation, measurement, and communication of artifacts. | Sensors, laboratories, software systems, databases, notebooks, scientific publications |
| **Meta-Epistemic Layer** | Supporting material, energetic, social, and institutional environment that enables storage, computation, measurement, and communication of artifacts over time. | Sensors (thermocouples, cameras), laboratories (clean rooms), software systems (Jupyter, Git), databases, scientific publications, power grid, funding agencies, data repositories. |
| **Epistemic Feedback** | Signal from reality (or from another artifact) that resists or confirms prior predictions or actions; primary driver of learning and error correction. | Prediction error (residual), unexpected observation, failed intervention, successful replication, sensor saturation, model divergence, comparison between two Domain Snapshots taken at different times. |
| **Epistemic Act** | Primitive, non‑decomposable operation performed by an agent: attending, discriminating, remembering, anticipating, intervening, comparing, observing (which invokes Observation Encoding). | Attending to a sensor reading, detecting a difference, recalling an observation, emitting a prediction, pressing a measurement probe, judging similarity, encoding a raw signal into a digital value. |
| Epistemic Principle | Foundational normative, structural, or strategic rule that governs how epistemic agents should construct, validate, organize, or revise knowledge. Principles shape the selection of standards, tools, and processes by defining the underlying logic of inquiry. | Empiricism, falsifiability, parsimony (Occam’s Razor), Bayesian coherence, causal reasoning, reproducibility, predictive adequacy, reductionism, systems thinking, explanatory power, measurement invariance |


## Rules

> Use this rules to guide the process of identication of concept that drives - underlies - explain or are used the epistemic practice of agents.

| Rule                                                        | Definition (Operational Form)                                                                                                                                         | Primary Distinction Axis           |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **1. Classify by epistemic function**                       | Assign each element to a single primary epistemic role (artifact, tool, encoding form, agent, act, process, principle, standard, constraint, infrastructure, domain). | Global functional typing           |
| **2. Artifact vs Tool separation**                          | Artifact = instantiated, truth-apt representation of a domain; Tool = procedure that transforms, infers, or evaluates representations.                                | Representation vs operation        |
| **3. Principle vs Standard separation**                     | Principle = foundational explanatory constraint; Standard = operationalized evaluative criterion derived from principles.                                             | Foundational vs normative          |
| **4. Act vs Process separation**                            | Act = atomic epistemic operation; Process = ordered composition of acts with temporal structure.                                                                      | Atomic vs composite temporality    |
| **5. Encoding forms as a distinct category**                | Encoding forms are syntactic/structural systems that define representational validity but do not assert truths or perform operations.                                 | Meta-representational substrate    |
| **6. Encoding forms are inert; tools are active**           | Encoding forms define valid expressions; tools execute transformations, inference, or validation over those expressions.                                              | Syntax vs computation              |
| **7. Artifact requires instantiation within encoding form** | An artifact exists only when an encoding form is populated with domain-referential, truth-evaluable content.                                                          | Structural instantiation condition |
| **8. Domain is ontologically independent**                  | The target domain exists independently of its representations and must be identified separately from epistemic constructs.                                            | Ontology vs representation         |
| **9. Infrastructure as enabling substrate**                 | Infrastructure consists of physical/computational systems enabling epistemic operations without encoding domain content.                                              | Support vs content                 |
| **10. Constraints as epistemic limits**                     | Constraints are conditions that restrict possible states of knowledge or valid inference, not descriptive claims.                                                     | Limitation vs representation       |
| **11. Feedback as corrective mechanism**                    | Feedback is any process that evaluates and adjusts epistemic outputs based on error or deviation.                                                                     | Correction dynamics                |
| **12. Prevent category collapse (no drift)**                | An entity must not simultaneously belong to multiple primary epistemic categories under the same role.                                                                | Mutual exclusivity                 |
| **13. Explicit relational modeling required**               | All epistemic relations (causal, inferential, compositional) must be explicitly represented, not implied.                                                             | Structural explicitness            |
| **14. Structural interrogation of candidates**              | Classification requires checking decomposability, referentiality, and operational behavior.                                                                           | Validation criteria                |
| **15. Artifact requires empirical or domain grounding**     | Artifacts must refer to or model a concrete or well-defined domain state, not abstract templates.                                                                     | Grounding condition                |
| **16. Tools must transform or produce artifacts**           | A valid tool must output, modify, evaluate, or generate epistemic artifacts as its primary function.                                                                  | Operational closure                |
| **17. Artifact vs Encoding Form** | The encoding form (or artifact form) - one it's abstarct - cannot not be constrated with reality - and the other it.|

Use this table

Category  .. Rule Set
Category    Evaluation