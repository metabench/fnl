# Copilot Instructions for the `fnl` codebase

This document provides essential guidance for AI agents working on the `fnl` codebase.

## Project Overview

`fnl` is a JavaScript (CommonJS) library for functional programming centered around a custom Observable implementation. The primary goal is to build, compose, and instrument asynchronous function pipelines. It provides rich tools for monitoring function execution, including detailed timing, I/O metrics (rate, size), and status tracking.

The core of the library is in `fnl.js`. It provides the `observable` constructor and a `stages` helper for composing multi-step asynchronous operations.

## Core Concepts & Architecture

### `observable`

The fundamental building block is the `observable` function, found in `fnl.js`. It wraps a function and returns an `Evented_Class` instance that emits `next`, `complete`, and `error` events. This is the project's custom implementation of the Observable pattern.

- **Creation**: `observable((next, complete, error) => { ... })`
- **Usage**: An observable instance has methods like `.on('next', ...)`, `.on('complete', ...)`, and `.on('error', ...)`. It also has convenience methods like `.next(...)`, `.complete(...)`, and `.error(...)`.

### `stages`

The `stages` function (in `fnl.js`) is a higher-level abstraction built on top of `observable`. It simplifies the creation of a multi-step, sequential, asynchronous pipeline. Each function in the sequence (a "stage") receives the output of the previous one.

- **Key Feature**: `stages` automatically instruments the pipeline, capturing detailed timing and I/O metrics for each stage.
- **Example Pattern**:
  ```javascript
  const stagedFunction = stages([
      'stage1_name', fn1,
      'stage2_name', fn2
  ]);
  const myObservable = stagedFunction(initial_args);
  myObservable.on('complete', (result) => {
      // result contains detailed metrics under result.io.stages
      console.log(result.io.stages.stage1_name.ms_taken);
  });
  ```

### Instrumentation and Monitoring

A primary feature of this library is deep instrumentation.

- **Timing**: Observables automatically record start times, completion times, and total duration (`ms_taken`).
- **I/O Monitoring**: The library is designed to monitor function I/O, especially for streams. The `fn-io-transform.js` and `fn-monitor.js` files contain the logic for this. The results of a staged function call will contain an `io` object with metrics.
- **Status**: Observables have a `status` property (`init`, `ok`, `complete`, `error`).

## Developer Workflow

### Dependencies

The main external dependency is `lang-mini`. The project uses `mocha` for testing.

### Testing

Tests are located in the `test/` directory. To run the tests, execute `mocha` from the root of the project.

```sh
# Run the test suite
mocha
```

When adding new features, please include corresponding tests in `test/test.js` or a new test file in that directory.

## Code Conventions

- The project uses the CommonJS module system (`require`/`module.exports`).
- The code style is functional, using closures and higher-order functions extensively.
- Asynchronous operations are handled through the custom `observable` pattern, not primarily with native Promises (though some promise-to-callback utilities exist).
- Pay close attention to the comments in `fnl.js`, as they contain a lot of the author's design philosophy and intent.
