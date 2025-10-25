# fnl

A JavaScript library for functional programming centered around a custom Observable implementation. It provides tools for building, composing, and instrumenting asynchronous function pipelines with detailed timing and I/O metrics.

## Installation

```bash
npm install fnl
```

## Description

`fnl` is designed to simplify the creation of asynchronous function pipelines. At its core are two main concepts:

- **`observable`**: A custom implementation of the Observable pattern that wraps functions to emit `next`, `complete`, and `error` events.
- **`stages`**: A higher-level abstraction for composing multi-step asynchronous operations, automatically instrumenting each stage with performance metrics.

The library emphasizes deep instrumentation, capturing timing (`ms_taken`), I/O metrics, and status tracking for function execution.

## Usage

### Basic Observable

```javascript
const {observable} = require('fnl');

const obs = observable((next, complete, error) => {
    setTimeout(() => {
        next('data');
        complete('result');
    }, 1000);
});

obs.on('next', data => console.log(data));
obs.on('complete', result => console.log('Done:', result));
```

### Stages

```javascript
const {stages} = require('fnl');

const stagedFunction = stages({
    stage1: (input) => {
        console.log('Stage 1:', input);
        return 'result1';
    },
    stage2: (input) => {
        console.log('Stage 2:', input);
        return 'result2';
    }
});

const observable = stagedFunction('initial input');
observable.on('complete', (result) => {
    console.log('Final result:', result);
    console.log('Metrics:', result.io.stages); // Detailed timing and I/O metrics
});
```

### Counter Example

```javascript
const {obs} = require('fnl');

const counter = (max = 4, ms_delay = 500) => obs((next, complete, error) => {
    let c = 0;
    const tick = () => {
        if (c < max) {
            setTimeout(() => {
                c++;
                next(c);
                tick();
            }, ms_delay);
        } else {
            complete(c);
        }
    };
    tick();
});

const myCounter = counter(5, 1000);
myCounter.on('next', num => console.log('Count:', num));
myCounter.on('complete', final => console.log('Finished at:', final));
```

## API

### Core Functions

- **`observable(fn, opts?)`**: Creates an observable from a function that takes `next`, `complete`, and `error` callbacks.
- **`stages(definition)`**: Creates a staged function pipeline. `definition` can be an object or array of stage names and functions.

### Utility Functions

- **`obsfilter(obs, filterFn)`**: Filters an observable's data.
- **`obsmap(obs, mapFn)`**: Maps an observable's data.
- **`seq(queue)`**: Sequences observables.
- **`unpage(obs)`**: Unpages array-based observables.
- And more: `obsalias`, `obscollect`, `nce`, etc.

For full API details, see the source code in `fnl.js`.

## Examples

See the `examples/` directory for more usage examples:

- `counter.js`: A simple counting observable.
- `observable.js`: Basic observable usage.
- `stages.js`: Multi-stage function pipelines.

## Testing

Run tests with Mocha:

```bash
npm test
# or
mocha
```

Tests are located in `test/test.js`.

## Dependencies

- `lang-mini`: Core utility library.

## Node.js Version

Requires Node.js >= 12.0.0.

## License

MIT License. See `LICENSE` file for details.

## Author

James Vickers <james@metabench.com>

## Repository

[https://github.com/metabench/fnl](https://github.com/metabench/fnl)
