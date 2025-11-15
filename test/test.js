const assert = require('assert');
const { observable, seq } = require('..');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('seq', function () {
  it('propagates errors from queued observables', function (done) {
    const errorMessage = 'boom';
    const queue = [
      [
        null,
        () =>
          observable((next, complete, error) => {
            setTimeout(() => error(new Error(errorMessage)), 0);
          }),
        []
      ]
    ];

    const seqObs = seq(queue);

    seqObs.on('error', (err) => {
      try {
        assert(err instanceof Error);
        assert.strictEqual(err.message, errorMessage);
        done();
      } catch (assertErr) {
        done(assertErr);
      }
    });

    seqObs.on('complete', () => {
      done(new Error('seq should not complete when a queued observable errors'));
    });
  });
});
