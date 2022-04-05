
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
        const chunks = [];
        // maybe data-in-start will make for nicer programming. not sure.
        // pre-data-in-start?
        input_readable_stream.on('data', data => {
            // monitoring event?

            // Could raise the data event.
            //  A version with integrated monitoring as well?

            chunks.push(data);
        });
        input_readable_stream.on('end', () => {
            //fn_ready_args = ;
            if (cb_events) cb_events({
                name: 'complete',
                sig: 'B',
                io_sigs: ['R', 'B'],
                value: Buffer.concat(chunks)
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
}

module.exports = transformations;