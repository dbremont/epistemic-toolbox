# Meta Epistemic Artifact Type Spec

> An **epistemic artifact type** is a **class of structured objects** defined by a shared:
>
> * **formal structure**,
> * **semantic interpretation**, and
> * **admissible transformations**,
>
> which collectively encode a **family of possible affirmations about reality**.

> An **epistemic artifact** is a **concrete instance** of such a type:
> a structured object that encodes **constraints, claims, or distributions over reality**, enabling systematic reasoning, inference, or decision-making.

> An epistemic artifact type is defined **not by a single instance**, but by the **space of all valid instances**, together with:
>
> * structural constraints (syntax),
> * interpretation rules (semantics),
> * transformation operators (dynamics over artifacts).

> Its identity is determined by its **position in the space of possible affirmations about reality**,
> not by its representational substrate (symbolic, numeric, graphical, etc.).

## Objective

> Our goal is to construct an **Interactive Epistemic Artifact Type Notebook**
> that enables systematic exploration of an artifact type,
> mediated by one or more **prototypical instances** to anchor intuition.

The notebook should allow a user to move fluidly between:

* **instance-level behavior**, and
* **type-level invariants and constraints**.

# Non-Functional Requirements

### Cognitive Clarity

The interface must minimize ambiguity while preserving formal rigor.
Distinctions such as *type vs instance*, *structure vs interpretation*, must be explicit.

### Progressive Disclosure

Expose the artifact type in layers:

1. Intuition (prototypical instance)
2. Structural schema (formal definition)
3. Transformation space
4. Edge cases and boundary conditions

### Low Interaction Latency

All manipulations (instance modification, transformations) must respond near real-time.

### Determinism & Reproducibility

Given the same parameters and operations, the same artifact instance must be produced.

### Epistemic Transparency

Explicitly expose:

* assumptions,
* admissibility conditions,
* invariants,
* failure modes.

### Modularity

Components must be decomposable:

* instance generator
* constraint validator
* transformation operators
* visualization modules

### Observability

The system must allow inspection of:

* internal structure of instances
* constraint satisfaction/violation
* transformation steps

# Functional Requirements

## 1. Conceptual Layer

### Purpose

Define the **artifact type as a formal object class**, not as a procedure.

### Components

* **Type Definition**
  Minimal, formal specification of the artifact type

* **Epistemic Role**
  What class of affirmations does this type encode?

* **Instance Space**
  What constitutes a valid instance?

* **Constraint System**
  Structural and semantic constraints over instances

* **Transformation Algebra**
  What operations are permitted over instances?

## 2. Instance Layer (Critical Addition)

This replaces the implicit “tool execution” mindset.

### Purpose

Expose how **individual artifacts instantiate the type**.

### Components

* **Prototypical Instance**
  A canonical example used for grounding

* **Instance Generator**
  Mechanism to construct valid (and optionally invalid) instances

* **Instance Mutation**
  Controlled perturbations of structure

* **Validation Engine**
  Determines whether an instance satisfies type constraints

## 3. Interaction Layer

> This must be reframed: interaction is over **artifact instances and type constraints**, not over “execution of a tool”.

### Purpose

The interaction layer defines how the user **engages with the space of artifacts** and the **constraints defining the type**.

### Core Principle

Interaction enables **epistemic interrogation of the type through its instances**:

> Every manipulation should reveal how structural variation affects
> validity, interpretation, and the space of possible affirmations.

### Components

#### Instance Controls

* Create / modify artifact instances
* Parameterized construction of instances

#### Constraint Controls

* Enable / disable constraints
* Inject violations deliberately

#### Transformation Controls

* Apply admissible operations to instances
* Compose transformations

#### State Inspection

* Inspect structure of the instance
* Inspect constraint satisfaction
* Inspect semantic interpretation

#### Linked Views

* Structure view (syntax)
* Interpretation view (semantics)
* Constraint satisfaction view
* Transformation trace

### Design Constraints

* Every interaction must produce an **immediate structural or semantic change**
* The mapping:

  ```
  action → instance modification → constraint evaluation → interpretation
  ```

  must be explicit
* No hidden transformations: all operations must be inspectable

# Objective of the Interaction System

Enable the user to:

### Interrogate the Artifact Type

* What defines membership in this type?
* What invariants must hold?

### Construct Instances

* How are valid artifacts generated?
* What degrees of freedom exist?

### Manipulate Structure

* How do changes affect validity and meaning?

### Observe Behavior

* How does interpretation change across instances?

### Diagnose Limits

* What are the boundary conditions of the type?
* When does an instance become invalid or undefined?

### Internalize the Type

* Build a mental model of:

  * instance space
  * constraint system
  * transformation algebra

# Outcome

The system should produce **type-level understanding**, not just instance familiarity:

> The user should be able to:
>
> * recognize valid vs invalid instances,
> * predict the effect of transformations,
> * reason about the structure of the instance space,
> * and understand the limits of the artifact type **without relying on the interface**.

# Technology Stack

* HTML
* CSS
* JavaScript
* No frameworks (e.g., React)
* Minimal external libraries (only where strictly necessary)
