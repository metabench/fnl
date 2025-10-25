# Agent Instructions for the `fnl` Codebase

This document provides high-level operational guidelines for autonomous AI agents interacting with the `fnl` repository.

## Project Goal

The primary goal of the `fnl` library is to provide a powerful, functional, and highly instrumented toolkit for building and composing asynchronous function pipelines in JavaScript. The library is centered around a custom `observable` implementation designed for detailed monitoring of execution timing and I/O metrics.

## Core Architecture

To work effectively, agents must understand two fundamental concepts:

1.  **`observable`**: The core building block, found in `fnl.js`. It is a custom implementation of the Observable pattern that wraps a function, making it emit `next`, `complete`, and `error` events. It is the foundation for all asynchronous operations in this library.

2.  **`stages`**: A higher-level function built upon `observable`. It simplifies the creation of sequential, multi-step asynchronous pipelines. Its key feature is the automatic instrumentation of each stage, capturing detailed performance metrics (e.g., `ms_taken`, I/O data) which are returned in the `io.stages` property of the final result.

## Operational Guidelines for Autonomous Agents

- **Modification Scope**: Changes should primarily focus on enhancing the `observable` and `stages` functionalities, improving instrumentation, or adding related functional utilities. Avoid introducing new, unrelated programming paradigms (e.g., replacing observables with native Promises wholesale).
- **Testing**: All new features or bug fixes must be accompanied by corresponding tests in the `test/` directory. Run the test suite using the `mocha` command from the project root to ensure no regressions are introduced.
- **Dependencies**: The project has a minimal dependency footprint, primarily relying on `lang-mini`. Avoid introducing new external dependencies unless absolutely necessary and justified.

---

### **Important Note for All Agents**

For more detailed, developer-focused guidance on coding conventions, specific implementation patterns, and in-editor workflows, all agents **must** refer to the `.github/copilot-instructions.md` file.

That file contains essential, low-level knowledge that is critical for generating code that aligns with the project's established patterns. Consider it required reading before making any modifications.
