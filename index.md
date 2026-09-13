---
layout: home
lang: en
---

## What

**SDM (Spec-Driven Methodology)** is a methodology for treating methodological artifacts as specifications: written once, verified by machine, with all derived output generated automatically.

> **Ontology → Profile → Coverage → Export**

## Lifecycle (artifacts, not commands)

- **Ontology** — a graph of nodes (any type: skills, topics, concepts, talks) and their relationships
- **Profile** — what is selected from the ontology and to what threshold
- **Coverage** — what is missing: a set of gap nodes by a fixed definition
- **Export** — where the result goes (MCP, Obsidian, web, CLI, documents)

Who performs the steps (human or agent) does not matter — the artifact chain is the same.

## Ontology and nodes

Ontology is a single graph: `ontology/`, nodes with a `kind` field (skill, topic, concept, talk…). The set of kinds is open — the methodology does not fix it. A single graph may mix kinds. To separate domains, create a separate SDM project.

## Three layers

| Layer | What | How it changes |
|-------|------|----------------|
| **Specification** | Ontology (nodes+kinds) + profile + gap definition | Rarely |
| **Computation** | Coverage calculation by a fixed measure | Iteratively |
| **Presentation** | Export (MCP/Obsidian/web/CLI) | Fully open |

## Invariants

1. Given the same ontology and profile, the set of gap nodes is identical across all implementations. The gap definition is fixed by the methodology — implementations do not choose it.

## What it is not

- Not SDD (that is about code)
- Not a tool/product — CLI, MCP, plugins are implementations, not the methodology
- Not a storage format (YAML is not required)
- Not an LMS or testing platform
- Not a judge — content quality checks are outside the methodology
- Not specifically about questions — profile elements can be anything

## Who is it for

Methodologists, educators, teachers, bloggers, conference organizers — anyone who works with methodological artifacts and wants to verify their completeness.

---

### Repositories

| Repository | Purpose |
|---|---|
| [`methodology`](https://github.com/spec-driven-methodology/methodology) | Methodology concept, ADRs, specification |
| [`sdm`](https://github.com/spec-driven-methodology/sdm) | Reference implementation: CLI, MCP server, npm `@spec-driven-methodology/sdm` |
| [`obsidian-sdm`](https://github.com/spec-driven-methodology/obsidian-sdm) | Obsidian plugin |