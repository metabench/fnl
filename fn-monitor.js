/*
    Lets get function call monitoring working before io transforms.
    Want to monitor the transforms too.


*/


const lang = require('lang-mini');
const Evented_Class = lang.Evented_Class;
//const get_a_sig = lang.get_a_sig;
//const get_truth_map_from_arr = lang.get_truth_map_from_arr;
const {each, tof, tf, mfp, deep_sig} = lang;

// will use deep_sig
// fn_call_wrapper?

// stages will use a specific combo of io_transform and monitor.

// want to build up and test monitor and io-transform so they are suitable for stages.

// will monitor the io transforms








// we may want to monitor some arguments.
//  when args get passed in and out of functions, we can avoid duplication of monitoring args.

// definitely still want to be able to get the io rate of a stage of a function.
//  io rate in: connects to param monitoring.


const monitor_args = (args, cb) => {


    // will raise the args_event callback each time there is something relevant to all the arguments, or an argument.

    // get the args deep sig
    // the length

    // find any unresolved / ongoing arguments
    //  none: it's complete
    //  found some:
    //   event saying which args are resolved and unresolved

    // will just raise complete event when there are no async args.

    //  don't think we can monitor promise resolution, unless we wrap the promise...

    // better to loop through the arguments here?




    // all-complete?

    //  


}


// dont think we use this at present.

// the function monitor's API will be nicely defined so that implements some of the functionality in the stages() function.


// monitored_function?
//  this right now is functional programming that is used to create functions with built-in monitoring.

const fn_monitor = function(fn_orig, cb) {

    cb = cb || (() => {});

    // a monitored_event function as a callback would definitely make sense.
    //  probably easier and more efficient than an observable.

    // lets not do complex poly here (now)
    //  the function itself, and monitored event callback

    // this is another function wrapper.

    //   this could work with either a callback
    //   possibly an observable returned?
    //    or evented_class?

    const fn_res = function() {

        // find out what args it was called with.
        //  read the input of the function.
        //   get its sig
        const a = arguments;
        // io / ar
        // input, output
        // arguments, result

        const a_sig = deep_sig(a);
        console.log('a_sig', a_sig);
        //  and the absolute timing too?

        const ms_start = Date.now();

        // input start and complete?

        cb('input', {
            sig: a_sig,
            ms: ms_start
        });

        // This will be the right place for arg stream monitoring

        // input-data-start? -chunk? -complete?
        // timings and events for input data?
        
        // input complete event?

        // raise the 'pre' event?
        //  no, it's function input

        // and can also monitor the input of Readable_Stream (and observable?);
        //  all of them in the arguments too?

        const fn_call_res = fn_orig.apply(this, a);

        // and would also measure output stream timings / byte flow...
        // how long the call takes...

        const r_sig = deep_sig(fn_call_res);
        console.log('r_sig', r_sig);

        // 
        cb('output', {
            sig: a_sig,
            ms: ms_start
        });

        return fn_call_res;
        // then apply that function
        // get the result sig.
        // a_sig
        // r_sig

        // arguments sig and results sig
    }

    return fn_res;




    // args:     opts, fn


    //  should just take the function?
    //  two functions, ie the function to monitor, and the callback

    // or to integrate the monitor within the function itself


    //  such as obs-monitor?







}



if (require.main === module) {

    // see about bringing in some simple function calls?

    // like v_add?

    const add_one = (num) => num + 1;

    const m_add_one = fn_monitor(add_one, (evt_name, evt) => {
        console.log('m_add_one evt_name', evt_name);

        console.log('m_add_one evt', evt);

    });

    // monitoring within the definition, not the call?
    //  think that's what we are after right now.


    let v = 10;

    /*

    let res = m_add_one(v, evt => {

        console.log('m_add_one evt', evt);

    });
    */

    let res = m_add_one(v);

    console.log('res', res);





}

module.exports = fn_monitor;