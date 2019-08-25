const {tf, deep_sig, each, def} = require('lang-mini');


// Could use callbacks

// Will be used to monitor arguments and values between stages().

// Complete?
//  Monitoring complete makes sense.

// Various parts now measure their byte rates.

// 




const monitor_item = (item, cb_evt_monitoring) => {

    // The type of item...

    const ti = tf(item);

    // promise
    // stream

    // 

    // some objects... can just get the size.

    // readable stream....

    // monitoring arguments - monitor every object there.
    //  subitems too?
    //  a subitems tree?

    // array?

    // 
    //console.log('monitor_item ti', ti);

    if (ti === 'A') {
        const l = item.length;
        // no different with just one argyment.
        // begin args?
        //  then args complete?
        for (let c = 0; c < l; c++) {
            const arg = item[c];



            // carry out monitoring on that arg.
            ((arg, c) => {
                monitor_item(arg, (evt_arg_monitor) => {
                    //console.log('evt_arg_monitor', evt_arg_monitor);
                    // need to callback for cb_evt_monitoring
                    //  say the arg_index
                    // say it's a subitem?
                    // type and subtype?
                    evt_arg_monitor.arg_index = c;
                    cb_evt_monitoring(evt_arg_monitor);
                    //console.trace();
                    //throw 'stop';
                })
            })(arg, c);
        }
        // monitor each of the items in the arguments.
    } else if (ti === 's') {
        // the length of the string = length * 2

        // say what type it is.
        //  bytes_length

        cb_evt_monitoring({
            name: 'complete',
            t: 's',
            bytes: item.length * 2
        });


        // object... probably don't get its size.
        //  get its keys?


    } else if (ti === 'o') {
        // the length of the string = length * 2

        // say what type it is.
        //  bytes_length
        // get the object sig?

        // need to wait for that observable to complete?
        //  could wait for the io complete event.

        // Do need to wait for observables to complete?
        //  Or wait for the io complete event?

        // Only want to say that the item is complete when its io is complete?

        




        cb_evt_monitoring({
            name: 'complete',
            t: 'o'//,
            //bytes: item.length * 2
        });

        // object... probably don't get its size.
        //  get its keys?


    } else if (ti === 'R') {
        // could be output monitoring.

        //console.trace();

        // the length of the string = length * 2

        // say what type it is.
        //  bytes_length

        // get the object sig?

        // monitor the rs data.
        const rs = item;
        // stream identified / available
        // stream data started (first data event)???
        // stream data event
        // stream data complete

        // the time?

        let bytes = 0;

        // ms_started ....

        const ms_start = Date.now();

        // and a start?
        //  instead of available?

        // available?
        //  start?

        let content_length, bytes_remaining;

        const {headers} = item;
        //console.log('headers', headers);
        //console.log('item', item);

        if (headers && headers['content-length']) {
            content_length = parseInt(headers['content-length'], 10);
            bytes_remaining = content_length;
        }

        //console.log('**** headers', headers);
        //console.log('content_length', content_length);
        //console.trace();

        // Be able to look into the headers, get numbers such as content-length.

        // and send the headers.
        //  the content length will be useful in particular.

        const o_evt = {
            name: 'available',
            t: 'R',
            ms: ms_start,
            headers: headers
            //,
            //bytes: item.length * 2
        }

        if (def(content_length)) {
            o_evt.content_length = content_length;
        }
        cb_evt_monitoring(o_evt);
        // Providing the rate and estimated time complete and remaining will be useful.
        //  Want that encapsulated here. Maybe make it optional?

        rs.on('data', data => {
            bytes += data.length;
            bytes_remaining -= data.length;
            // bytes remaining
            // be able to calculate / estimate time remaining?
            //  and estimated completion time?

            // calculating the rate within this part would make a lot of sense.
            //  and not in observable stages?

            // Rate calculation here would definitely be useful.

            // could include the time for each piece of data that arrives.
            //  

            // how long it has taken
            //  the bytes output total so far?

            // ms into? ms so far? ms_total? ms_processing?


            const ms = Date.now();
            const ms_taken = ms - ms_start;
            // Should be able to calculate how long it will take to do the bytes_remaining based on the rate.
            const byte_rate = bytes / (ms_taken / 1000);
            const est_remaining = bytes_remaining / byte_rate * 1000;
            const proportion = bytes / content_length;

            const ms_est_complete = ms + est_remaining;

            // bytes_total?
            cb_evt_monitoring({
                name: 'data',
                t: 'B',
                bytes: data.length,
                bytes_total: bytes,
                byte_rate: byte_rate,
                content_length: content_length,
                bytes_remaining: bytes_remaining,
                ms_est_remaining: est_remaining,
                ms_est_complete: ms_est_complete,
                ms_taken: ms_taken,
                proportion: proportion
            });
            // and readable stream output data too.
            // input_data function?
            //  makes sense.
            //  for monitoring a readable stream.

            //console.log('pre post-data-out raise_stage_event ' + stage_name);
            //raise_stage_event('post-data-out', {
            //    data: data
            //});
            //chunks.push(data);
        });
        rs.on('end', () => {
            // raise the stage complete at a different time. ???
            // monitoring / length recording / events?
            //exec_fn();
            // ms_taken would be of use here.
            const ms_complete = Date.now();
            const ms_taken = ms_complete - ms_start;

            // and byte_rate...
            const byte_rate = bytes / (ms_taken / 1000);

            cb_evt_monitoring({
                name: 'complete',
                ms: ms_complete,
                ms_taken: ms_taken,
                t: 'R',
                'bytes': bytes,
                byte_rate: byte_rate//,
                //bytes: item.length * 2
            });
        });
        rs.on('error', err => {
            //console.log('error reading stream for param transformation in stages()');
            //error(err);
            cb_evt_monitoring({
                name: 'error',
                value: err,
                t: 'R'//,
                //bytes: item.length * 2
            });
        });

        /*
        cb_evt_monitoring({
            name: 'complete',
            t: 'o'//,
            //bytes: item.length * 2
        });
        */

        // object... probably don't get its size.
        //  get its keys?


    } else if (ti === 'B') {
        // the length of the string = length * 2
        // say what type it is.
        //  bytes_length
        cb_evt_monitoring({
            name: 'complete',
            t: 'B',
            bytes: item.length
        });
        // object... probably don't get its size.
        //  get its keys?

    } else if (ti === 'a') {
        // the length of the string = length * 2
        // say what type it is.
        //  bytes_length

        // recursive function to calculate the size of a js object in bytes.
        //  should be in lang-mini.


        cb_evt_monitoring({
            name: 'complete',
            t: 'a'
        });
        // object... probably don't get its size.
        //  get its keys?
    } else {
        console.log('ti', ti);
        console.trace();
        throw 'stop';
    }
}

module.exports = monitor_item;