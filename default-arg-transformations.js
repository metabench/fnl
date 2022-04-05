
// args all in one objet?
// then we have a monitoring callback?
//  optional?


// monitored-arg-transformations as well?
//  though, these themselves could be observables or promises.
//  possibly callback events would be more efficient, especially within the implementation of observables and other function calling system.
// right now though, function arg transformations are not built into observable.
//  a monitoring callback could be the best way?
// does not quite fit the next, complete, error framework.
// an events callback makes the most sense.
//  
//  do need some kind of callback system anyway.
//   events callback makes the most sense.
const {deep_sig} = require('lang-mini');
// monitored_arg_transformations too?

// should be able to wrap this in a monitoring function to be able to monitor function io.
//  monitoring params / args themselves directly could work better as we wouldn't make duplicate measurements.

// so in stages, monitoring the input, output, and intermediate objects makes sense.
//  then consider inner stage monitoring / stage events API.
//   stages / stage events API does seem useful, but it can't be a huge amount of repetitive code.
//   needs proper abstractions.



// promise, resolving to anything.

// *, P

// anything, can be got from a promise.
//  or keep promise resolution separate?

// o, i?

// i, o probably makes more sense.

// easier for processing promise input.

// capitalise P for promise?



/*



    'R': {

        // just a default change to buffer...

        'B': (input_readable_stream, cb_events) => {
            // No monitoring here right now.
            //  Maybe make monitored transformations.
            // Argument (and result object) monitoring seems best to get io data.
            // transformation event start?
            const chunks = [];
            // maybe data-in-start will make for nicer programming. not sure.
            // pre-data-in-start?
            input_readable_stream.on('data', data => {
                // monitoring event?
                chunks.push(data);
            });
            input_readable_stream.on('end', () => {
                fn_ready_args = Buffer.concat(chunks);
                if (cb_events) cb_events({
                    name: 'complete',
                    io_sigs: ['R', 'B'],
                    value: fn_ready_args
                });
                // no events at present to raise
                / *
                raise_stage_event('pre-data-in-complete', {
                    //'sig_from': 'R',
                    //'sig_to': 'B',
                    //'from': next_apply_args,
                    //'to': fn_ready_args
                });
                // does not seem to be a pre-processing output process / stream.
                //  do not need to have data-in and data-out in all cases.
                raise_stage_event('pre-complete', {
                    'sig_from': 'R',
                    'sig_to': 'B',
                    'from': next_apply_args,
                    'to': fn_ready_args
                });
                */
                /*
                raise_stage_event('post-input-transform', {
                    'from': 'R',
                    'to': 'B'
                });
                * /
                // monitoring / length recording / events?
                //exec_fn();
            });
            input_readable_stream.on('error', err => {
                console.log('error reading stream for param transformation in stages()');
                // callback with the error event.
                error(err);
            });
        }
    }

*/

// Default transformations...
//  but would be nice to annotate with the result type. maybe with mfp.

const transformations = {
    'O': (obs, cb_events) => {
        // build up the chunks?
        // or could use then.
        obs.then(res => {
            // get the res sig...
            const sig = deep_sig(res);
            if (cb_events) cb_events({
                name: 'complete',
                io_sigs: ['O', sig],
                sig: sig,
                value: res
            });
        }, err => {});
        /*
        obs.on('complete', complete_data => {
        });
        */
    },

    'p': (p, cb_events) => {
        p.then(res => {
            // get the res sig...
            const sig = deep_sig(res);
            if (cb_events) cb_events({
                name: 'complete',
                io_sigs: ['p', sig],
                sig: sig,
                value: res
            });
        }, err => {});
    },
    'R': (input_readable_stream, cb_events) => {
        // Only transforms to a buffer.
        // No monitoring here right now.
        //  Maybe make monitored transformations.
        // Argument (and result object) monitoring seems best to get io data.
        // transformation event start?
        const chunks = [];
        // maybe data-in-start will make for nicer programming. not sure.
        // pre-data-in-start?
        // may as well monitor number of ms taken
        // timing monitoring elsewhere?
        //  could have another external layer that logs the times of the various events?
        // for the moment, ms_taken would help here.
        const ms_start = Date.now();
        // raise a start event.
        input_readable_stream.on('data', data => {
            // monitoring event?
            // Could raise the data event.
            //  A version with integrated monitoring as well?
            chunks.push(data);
        });
        input_readable_stream.on('end', () => {
            //fn_ready_args = ;
            const ms_complete = Date.now();
            const buf = Buffer.concat(chunks);
            const ms_taken = ms_complete - ms_start;
            //  byte_rate (per s)
            const byte_rate = buf.length / (ms_taken / 1000);
            if (cb_events) cb_events({
                name: 'complete',
                sig: 'B',
                io_sigs: ['R', 'B'],
                value: buf,
                bytes: buf.length,
                ms: ms_complete,
                ms_taken: ms_taken,
                byte_rate: byte_rate
            });
            // monitoring / length recording / events?
            //exec_fn();
        });
        input_readable_stream.on('error', err => {
            console.log('error reading stream for param transformation in stages()');
            // callback with the error event.
            error(err);
        });
    }
    // this level: param sig required
    // this level: param sig given: function to transform
    // promise resolution here?
}

module.exports = transformations;