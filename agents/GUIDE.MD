# AI Guide – Component Philosophy

This repository is a personal component workshop.

Think of it like shadcn/ui, but:

* not a design system
* not a polished UI library
* not meant to be exhaustive or consistent

The goal is to build, experiment, and iterate on UI components in public.

---

## What This Repo Is

* A collection of handcrafted UI components
* Components are built one at a time, intentionally
* Each component can explore a single idea, interaction, or pattern
* Components may evolve, break, or be rewritten

This repo values:

* clarity over completeness
* experimentation over consistency
* learning over perfection

---

## What This Repo Is Not

* Not a design system
* Not a themeable enterprise UI kit
* Not guaranteed to be stable
* Not optimized for every edge case

Components do not need to:

* match each other perfectly
* follow a strict visual language
* support every variant or prop

---

## Component Philosophy

* Components should be copy-paste friendly
* Prefer simple APIs over flexible ones
* Fewer props is better than more props
* Composition > configuration
* Avoid premature abstractions

If a component feels too generic, it is probably over-engineered.

---

## Adding Components

* Each component lives in its own file
* Components should be readable without external context
* Styles live close to the component
* Avoid global magic

Components may:

* duplicate code
* solve similar problems differently
* exist purely as experiments

---

## Instructions for AI

When generating or modifying components in this repo:

* Do not introduce a full design system
* Do not add unnecessary variants
* Do not over-generalize
* Prefer explicit, boring code

Assume the reader is a developer who will read and tweak the code manually.

If unsure, choose the simpler implementation.

---

## Mental Model

Treat this repo like a sketchbook:

* ideas are allowed to be rough
* components can be opinionated
* experiments are welcome

Progress > polish.
