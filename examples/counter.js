const {obs, obsmap} = require('../fnl');

const {mfp} = require('lang-mini');

let counter = mfp({
    name: 'counter',
    pure: true,

    // return type and subtype can go within the grammar.
    //  could be useful to make a small standard for.
    //   really simple strings and abbreviations where possible.

    return_type: 'observable',
    return_subtype: 'number'
}, (max = 4, ms_delay = 500) => obs((next, complete, error) => {
    let c = 0;
    const tick = () => {
        if (c < max) {
            setTimeout(() => {
                c++;
                next(c);
                //next({});
                tick();
            }, ms_delay);
        } else {
            console.log('should raise complete');
            complete(c);
        }
    }
    tick();
}));

// And could transform that counter's output...



module.exports = counter;