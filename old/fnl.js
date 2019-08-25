// Could have one overriding fnl function?
//  Not yet.


// Stages could be redone in the near future so that it makes use of a pre / main / post function call system.
//  mfp+

// For the moment, continue and finish the implementation here.
//  But possibly a lower level observable function call system will help?

// Observable function call with preprocessing.
//  So each stage is an observable.
//   observables with a 'start' event?

// or each stage as an Evented_Function?
//  like an observable in some ways, but raises events that can be listened to.

// efn?
//  efp?
//   evented functional polymorphism?

// iofn? 
//  allows input and output processing


// .io , .i, .o interfaces?
//  quick to type :)

// measure(fn)
// measure_io(fn)
// io_events = measure_io(fn_call)


// finishing of the current system would make sense though
//  will create the io object.

//  will create the stages object?

//  .info?
//   the information object that contains info about things such as io?


// .io_events
//  get an event_stream function / object?
//   and is that possible to make here?

// subscribe to all function events....
//  measure those function events

// measure timings

// possibilities such as getting the event processing info as its own observable?

// move stages processing out of observable?






//  





// 12/06/2019 - Stages working so far, want to try it on some more important functions such as dl.
//  Each stage can provide an observable
//   when data needs to be batched and decompressed that won't be so useful in some cases.
//  Allow data to be used as soon as available.
//   Can integrate download / transfer / process rates more easily in some cases.

// 12/06/2019 - quite effectine in storing stage execution timing info so far.

// More work on data rate analysis here?
//  Or worth having real code that deals with these buffers first
//   That would make sense.
//    See where is can send over such data if necessary

/*

14/06/2019

Further events: ??

input-stream-start
input-stream-complete / end?

// observable end?
//  change from complete?

// and next becomes data?
// Observables are very much like readable streams.
//  Not quite the same.

// Time from input start to output complete

// start

// input-start
// input-complete
// output-start
// output-complete

// complete

// an events callback on an observable?
//  or io object is enough?


// observable.io seems fine.
//  maybe make it optional? later?
// does make sense for basic timings.

// function call io tracking definitely makes sense as a separate part.
//  encapsulating this seems like it would definitely help. maybe with performance too?

// then a system of [pre, main, post] would be wrapped like this.

// .stages.events?

// .events
//  execution events? io events?

// stage api...

// execution times wrappers.
//  argument transformation events?


// could likely make this simpler through making further wrapping functions.
//  would only work on an observable function?
//  

// monitor observable
//  monitor(fn_obs)
//  monitor(obs)

// io_transforming(fn)
//  itself with 3 stags?


// function io monitoring seems like it would be generally useful.


//  functionally / event driven involving hooks or similar?
//   could directly give it an event handler function.

// maybe want some different ways of using these advanced function calls.



// oobs.io.rate
//  but getting the rates of different stages is important too.

//     .io.stages




// 





// option: monitor: true


// o_dl.monitor?






//  ms (absolute)
//  ms since start of the observable
//  ms since start of the stage

// do want detailed timing information.
//  but could have a time updater on 1 ms ticks for performance reasons.
//   means we just measure the time 1000 times a second.

*/


// fnl()
// fns-es6 ?

// could use the word 'obs'.
// observe, observable
// res, result
// resolve
// done
// then
// to
// wait
// after
// go
// open
// r() gets result
// sequence
// seq
// let obs = seq(definition).go();
// let res_all = await(seq(definition)).go();
// complete
// end
// begin
// start
// stop
// finish
//  autostart
//   auto
// args?

// listen   |
// hear     |
// follow   |

// monitor
// map

// observable.filter
// observable.map
// observable.stop, pause, resume
// observable.status (get)

// Decoding options in observable too (possibly)
// An observable that does the decoding?

// Observable and observer in one...
//  observer.observe(other_observable, (my_next, my_complete, my_data))???

// spread operators could be useful.

// so, we want a function sequencer
//  could change every function that gets called into an observable if it is not already

// stages now involves each stage having pre, main, and post, each having possible intermediate data events.
//  possibly a long download will help to illustrate this better.

// need to be better at raising timing events

// input start to input complete during each stage


//  know how long the input takes
//   be able to calculate input rate b/s
// output start to output complete during each stage


// could be more concise and on-point with an imo input, main, output abstraction.
//  with automatic input and output processing.


// Getting the event & timing working with the current code structure makes most sense.

// Possible to log all event names?

// We don't exactly have a function for preprocessing.
//  may be nice to use the right abstraction(s) there.

// For the moment, implement it without them, and then use regression testing to check that code improvements keep the right API and measurements.

// pre-input-start
// pre-input-data
// pre-input-complete
// pre-exec-start???

// main-exec-input-start
// main-exec-input-data
// main-exec-input-complete ??? where will this occurr?

// main-exec-start

// main-exec-run-complete  ????? before the input has necessarily complete ?????
//  main-exec-fn-complete?


// main-exec-complete ?????          exec_complete? because maybe it's not complete, as in all data processed.

// main-exec-output-start
// main-exec-output-data
// main-exec-output-complete



// don't want function monitoring and io transformations to only be part of stages.
//  it's come about because it's needed for the stages to work, be instrumented, but it could be used elsewhere too.


// create the packages later.


// monitor and transform could likely be brought in under fnl, returned with it too.



// 




// monitor-function ???

// function-monitor is available within npm. unabbreviated names better for SEO. abbreviated quicker to type.
// could bring function-monitor into vhl, and through the functions, such as dl, that vhl provides.

// function-io-transform
//  as part of mfp? or extended from it?





// mf???

// mfp - monitored functional polymorphism?
//  maybe monitor-function could use this
//   input and output types, sizes, data events.
//    this should be able to calculate rates.











// function monitoring, as well as io transformations.



// even put function monitoring in mfp?







const lang = require('lang-mini');
const Evented_Class = lang.Evented_Class;
const get_a_sig = lang.get_a_sig;
const get_truth_map_from_arr = lang.get_truth_map_from_arr;
const {each, tof, tf, mfp, deep_sig} = lang;

const nce = (obs, next, complete, error) => {
    obs.on('next', next);
    obs.on('complete', complete);
    obs.on('error', error);
    return obs;
}

/*
const obs = (next, complete, error) => {
    let res = new Evented_Class();
}
*/

// This is essentially a function wrapper.
//  creates an observable function.
//  Defining params in the function could really help.
// definitely want more examples and tests of this observable type system.
//  this seems like one of my best developments so far.
// ofn?
//  an object and a function together as parameters for a function call
//  always returns a function?
// a variety of standard functions such as...? all functions?
//  obext, vhl, fnl, obs, fp, mfp, ofp, ofn
// ofp and ofn could be useful general purspose functional modules.
// ofn - executes a function, taking the parameters and re-ordering them?
// allow mfp to do function reordering.
//  that could work very nicely.
// Definitely need some very cool and efficient functional programming tools.
// redoing observable makes a bit of sense here.
// remove always_plural
//  it's been there, but have not been using it for advanced tech.

// the new observable function...
//  seems to be malfunctioning a little.
//  fixed now. Has more flexibility with opts object.

// mfp could be really useful here.
//  could put it in later though.

// would be nice to give the return type, other parts of grammar.

// paused?
//  definitely seems relevant / useful.

const tm_status_strings = {
    'init': true,
    'ok': true,
    'complete': true,
    'error': true,
    'paused': true
}

// observable could do with a way of implementing different stages
//  defining the stages?
//   want them to be readable

// or even give an object with functions instead of fn_inner?
//  better to store stages in an array?
//   seems more conventional.

// array of stages does make sense.
//  and a function for each stage

// maybe a stages([fn, fn]) function?
// stages below observable?
//  or a more like a lang-mini upgrade to call_multi
// stages is a better idiom.
//  possibly could / should return an object
//   a staged_fn?

// seems like the staged_fn could be a building block for obs.

// what would it return?
//  result of the last stage.
//   not some kind of staged obs?

// but then async stages being specifically important
//  defining stages as an array.....
//   seems better within the observable function body for the moment?
//  therefore a stages function.
//   lang-mini?
//    worth giving it a go.

// observable stages will be useful.
// for the moment, make the 'stages' function do some things, but don't have a specic stages array enclosure function.

// looks like the right way to do it.
// itself tracks its timings.

// got a lot more support for stages.
//  the stages() function now is built on top of obs, and provides syntactic sugar to use it well.

// active rate monitoring events, say every 1s, would help.
//  it could traverse back through its own next data info array.
//   calculate the rate going back for the last 1s.

// and want to be able to calculate the average_rate of a stage for all its data.
//  bytes per second (by default)
//   other rates could cauls problems if we expect bytes per second.
//   data_rate?
//    plus there will maybe be input_rate.
//    output_rate is what we are referring to, maybe processing rate.
//     output_rate sounds nice.

// be able to watch the output rate.
//  or be able to get readouts, like for the last 5s.

// getting the output_rate for any stage seems very useful.

// will be a slightly complex function.
//  need to think of the best API / APIs.

// possibly an analysis API.
//  possibly feed stages next data through further.
//   the stages observable next event?
//    maybe it could cover all next events, feed them through.
//     and we look at .stage to see when it changes stage.
//      not sure.
//   want a decent idiom / convention.

// however, maybe we want stage exec start
// stage exec complete
//  or end?
//  going with complete for the moment.
//   may have an 'end' synonym in the observable
//    Evented_Class event name alises / syonyms.

// pre-exec
// post-exec
//  could measure the complete time there.
//   pre and post is shorter than start and complete.
//   makes sense here.
// would be called in stages(...);

// input-start definitely seems like a good start or a stage.
//  
// Observable will measure its ms_complete value
//  How long it takes to complete.
// ms_error as well?

// o_something.i, .o, .io
// .io.rate
//  .io.ratio?
//  .io.stages[name].rate / ratio?

// .io.stages[name] seems OK in terms of following the same pattern. separately breaking down io.
//  ????

// .i.stages[name] is the input data
// .o.stages[name] is the output data

// .io as array of input and output.

// res.io
//  one single object there.
//   simpler API.

// .stages[name].ms?
//   the stages relative to the staer, all together work quite nicely.
//   leaving .ms.rel.stages for the moment.
//  maybe .ms will have more detailed timing info.

// .stages[name].io.rate?

const observable = function(fn_inner, opts) {
    // 12/06/2019 - much improved.
    // 13/06/2019 - working on stages events API
    //  An observable will be able to run in stages
    //  use stages() call to set it up easily.

    const a = arguments;
    const l = a.length;
    const sig = get_a_sig(a);

    let _opts, _fn_inner;

    // will have .i, .o, .io in the result.

    // stages will write expanded io data there.
    //  input_bytes
    //  output_bytes

    // input_rate
    // output_rate

    // will have plenty of nice and interesting measurements from a variety of function calls.

    //  Application instrumentation of a function call will definitely help.
    //   Choose the params for running it.
    //   Observe the (nested) results.
    //    View profiling / timing info.

    // Could do that with with dl quite soon.
    //  A simple version at least.
    //   Maybe then make the simple version extensible.
    //   Still simple to use.
    // Maybe could keep it simple, but allow complex functions and UIs to be plugged in.

    // .i
    // .o
    // .io = [.i, .o];

    // Anyway, need to obs_instance.io array.

    // work out rates over time

    // case?

    if (sig === '[f]') {
        _opts = {};
        _fn_inner = a[0];
    } else if (sig === '[f,o]') {
        _fn_inner = a[0];
        _opts = a[1];
    } else if (sig === '[o,f]') {
        _opts = a[0];
        _fn_inner = a[1];
    } else {
        console.log('sig');
        console.trace();
        throw 'NYI';
    }

    const obs_res = ((opts, fn_inner) => {
        // get values from the opts....
        //  name option is becoming important now.
        // then this will need to return something.
        const ms_start = Date.now();
        // ms.abs, ms.rel
        const ms_since_start = () => Date.now() - ms_start;
        let res = new Evented_Class();
        res.io = new Evented_Class();

        // Save res time?
        //  record res time
        //  record_res_ms
        // Absolute and relative timings 
        // Only have stages there when using stages???

        res.ms = {
            abs: {
                start: ms_start
            },
            rel: {
                start: {
                    //stages: {

                    //}
                }
            }
        }
        // res is the evented class.
        //res.i = {};
        //res.o = {};
        //res.io = [res.i = {}, res.o = {}];

        // write stage output io?
        // want the stage names as objects.

        //  And functions to get the recent rate?
        //  logging data events too?
        //   could track the number per second?

        // Want to send events through .io.

        

        // and will raise io events at various points in time
        //  for the overall function
        //  for the stages
        //   for substages of those stages      (encapsulate the 3 stage input(transform), main, output(transform))
        


        // input_main_output
        //  probably best not to use the 'stages' api for this, stages will use the IO transform system. call it a 'substage'.


        //res.io = {};

        // then it will have stages too for the io.

        // res.ms.latency
        // res.ms.taken?
        // res.ms.total?

        const record_res_ms = (name) => {
            const now = Date.now();
            res.ms.abs[name] = now;
            res.ms.rel.start[name] = now - ms_start;
        }

        let llog = [];
        let _status = 'init';
        
        //console.log('ms_start', ms_start);
        // obext read_only?

        Object.defineProperty(res, "ms_start", {
            value: ms_start,
            writable: false
        });

        // latency property as well.
        //  until it is in the 'ok' stage
        // just the raw timings stored here.

        let ms_ok, ms_complete, ms_error;
        let ms_to_ok, ms_to_complete, ms_to_error;

        // automatic timing measurements of observables will be very useful.
        // time_taken?
        //  since the start, as it continues

        // time_to_complete
        //  undefined if it's errored.
        // time_to_error
        const map_status_data = {};

        // total ms, as in full time. wont be 0 in map at least.
        const map_ms_reached_status = {};

        let stage_number = -1;
        let stage_name = 'init';  // automatic stage.  or 'start' stage?
        // respond to the stage function call.
        // it's stage -1. unindexed.

        // for example:
        //const stage_execution_info = [_stage_number, stage_name, stage_call_type_abbreviation, stage_res_type_abbreviation, time_started, time_into_observable];

        // also make the stage event API available?
        //  and stage info API?

        // stage info being the info needed for simpler monitoring.
        // as a map or array?
        //  array does make more sense.
        const stages_execution_info = [
            // any further execution info?
            // it could go here.
            // how many ms into the stages execution / since start.
            // anything about data type here?
            //[stage_number, stage_name, '', ms_start, 0]
            // leaving this init stage out for the moment.
        ];


        // seems basically unused now.
        //const arr_stage_log = [];
        // stage execution info.
        //  mapped by name
        //   in an array too?

        // want decent stage execution info.

        // map of stage indexes by name
        //  vice versa?

        // stages can't share names.
        //  seems easy enough, decent restriction.

        // stage timings.
        //  want to record specific info about stages and statuses

        // log gets the status and the stages too?
        //  and inner obs log data?
        const log = (data) => {
            const log_item = [Date.now(), data];
            llog.push(log_item);
            res.raise('log', log_item);
        }

        // stages will simply be names.
        //  status can have accompanying data.
        const status = (str_status, data) => {
            if (tm_status_strings[str_status]) {
                const old_status = _status;
                if (!map_ms_reached_status[str_status]) {
                    map_ms_reached_status[str_status] = Date.now();
                }
                map_status_data[str_status] = data;
                _status = str_status;
                res.raise('status', {
                    old: old_status,
                    value: str_status,
                    data: data
                });
            } else {
                console.trace();
                console.log('str_status', str_status);
                throw 'invalid str_status ' + str_status;
            }
        }
        // initial stage?
        //  'init' by default?

        let _stage;
        let current_stage_info;

        // stage events API will solve it.

        /*
        const _____begin_stage = stage_name => {
            _stage = stage_name;
            const now = Date.now();
            const ms_into = now - ms_start;
            current_stage_info = [stage_name, ms_into, now];
            arr_stage_log.push(current_stage_info);
        }

        // autocall this if beginning new stage, or if complete is called.
        const ____stage_complete = (stage_name, stage_res) => {
            const [_stage_name, ms_into, ms_stage_start] = current_stage_info;
            const now = Date.now();
            const ms_time_taken = now - ms_stage_start;
            current_stage_info.push(ms_time_taken);
            _stage = null;
        }
        */
        // also stage input data given here?
        //  could be optional??
        //   being given the stage number here as an arg would help.
        //    do that from 'stages'. maybe autoincrement if undefined?
        //     error stage is -2?

        // lets see if /that we can do it.

        //  maybe we do need stage_complete for when non-obs promises resolve.
        //   think it's just promises for the moment that needs it.

        //   but that would be in the stages part.
        //    could give an event to this function for promise resolution?
        //     that may need to be within the 'stages' section.
        //     promise resolution happens there.
        //      maybe could also send observable events here? not sure....

        // a num_stages property could help.
        //  need to know if a promise is the last stage?
        //   as that promise needs to resolve, and be returned in the obs res.

        // the last promise in the chain is a bit of an odd case.
        //  functions are OK at getting the result of a promise as its param,
        //   but with the last function if it's a promise, need to wait for the promise result.

        // maybe should keep this as minimal as possible.

        //  unsure about stage resolution / further systems within obs.
        //   or that obs provides the stage facility / API for it, then stages() makes it easy to use.
        //   keep it like this for the moment, or similar.

        // ec_stage_events

        //  seems necessary to observe a stage, but don't want to use another observable for it.

        // Monitor stage IO.
        //  a stage could have stages in a sense.
        //   dont want it to become confusing.

        // Don't give it the result immediately?
        //  This part could also cover the pre-stage steps such as input param transformation.
        //   eg getting a buffer from a stream means waiting for the stream to complete, want to get info about the data transfer rate

        // Stage Events API.
        //  That would make more sense.

        // Be able to say what stage an observable is in.
        //  stages() sets it up nicely for normal usage.
        // Evented_Class_That_Remembers???
        // stage_events API
        // stage name, stage events evented class
        // Probably best to redo this function.
        //  change to stage_api.
        // and a stage info API?
        // this part is only for measurement / monitoring / instrumentation.
        /// will be very interesting to measure a large amout of dls at once.
        //   instrument it with a monitoring app too.
        // Including timing data within io would help a lot.
        //  time taken only - that is what is used to calculate the rate.
        // io.stages.stage.ms_taken?
        //  .ms?

        // a stage could have a .ms measurement, within the io part.
        //  absolute and other more detailed timing info would be stored elsewhere.

        // separate input and output rates.


        // Most likely, will remove all or most of this.
        //  will make use of the io transformation and monitoring on each of the stages

        // io transformation monitoring too.
        //  seems somewhat important, integrating them at least.

        // maybe going a little slower to make this now makes sense.
        //  need to make sure that we make the right use of abstractions.

        // observing the io on the stages
        // applying io transformations to the stages.

        // examples and tests of io transformations.
        //  abstracting away io transformations and monitored io transformations will be very useful.













        const stage = (stage_name, ec_stage_api) => {

            // raise stage event.
            //  begin?




            res.io.stages = res.io.stages || {};
            res.io.stages[stage_name] = res.io.stages[stage_name] || {};
            // 16/06/2019 - need to get object sizes where it's not too hard.
            //  buffers, strings
            //  pre, main, post [in, out]

            // collecting detailed information about the stage executions will definitely help software run without bugs.

            // Monitoring pre-stage data (param) transformations will make sense too.
            // Know already if we are using stages?

            const abssts = res.ms.abs.stages = res.ms.abs.stages || {};

            // not so sure about this variable.
            //  The one currently being executed, but its only that one in this closure really.

            //stage_name = stage_name;
            const stage_ms_start = Date.now();

            // is it the exec start?

            // exec-start
            //  it would / could have processed some input parameters first.
            //   that's (pre-)stage preparation.

            // will have exec-complete.
            // exec-start?

            const absst = {
                //'start': stage_ms_start
            };
            abssts[stage_name] = absst;

            // input type, output type
            //  including promises or not?

            // complete time as well.
            //  also

            // though input will presumable start when the function starts???
            //  best not to presume things.
            //  want precise measurement of input time
            //   to best calculate input rate.

            // let's get the timings of input-start

            // input-start
            // output-start

            // input-complete ??? happens with all functions?

            // maybe some kind of stage event execution before the function itself?
            //  would help with monitoring the size of any input params

            // also want to monitor the output sizes of objects and arrays, not just streams and buffers.

            // function has input?
            
            // output-complete

            // also will record timings relative to the stage itself.

            // This is very neat for the moment though.
            //  Will soon do rate monitoring, then multiple sumultaneous fn calls using a result from an obs.

            // ie get multiple urls from an obs, dl them using a max simultaneous option of 8 or so.
            //  be precise with measurements.

            // need to record stage io amounts.

            // input.bytes
            //  .byte_count?

            // yes, it's i.bytes

            // Recording the stage io types makes a lot of sense too.

            // definitely want them in the result

            //  .ms works well separately. it kind of needs to refer back to itself.

            //  input and output sizes...

            // For streaming data (observable too?)

            // // input transform data io...

            // A fair few steps here...
            //  Hope the performance is still nice.

            // input transform happens before stage processing
            // Then there can be some kind of result transform or result awaiting.

            // 1) Stage input processing

            // pre-exec, post-exec
            // 2) Stage function processing

            // 3) Stage output processing.

            // tracking timings, data quanties, and types.
            //  mostly have timings, but can do more there

            // data quantities now...
            /// and types in io.

            // .io.i

            // .io.stages.stage.input_transform.input.bytes
            // .io.stages.stage.input_transform.output.bytes
            //  yes that makes sense for tracking input transforms.

            // and then the input and output of the main part of it.

            // .io.stages.stage.output_transform.input.bytes
            // .io.stages.stage.output_transform.output.bytes

            // record_stage_data_in
            // record_stage_data_out

            // for the main part of the function call....

            // input transformation / processing?

            // input transform sounds best.

            // record_input_transform_data_in

            // will also keep track of the data type too
            //  will look at the object?

            // different stages data in and out.

            // ll_set instead???

            //  then when they are complete...?

            //  or if the input is not streaming data, but we transform it.

            //  Seems like the right overall pattern.

            // Want to get this bit of code done, then leave it.
            // This is turning out to be a very long module, including comments.
            //  Try to make it shorter eventually.

            // need to set the input and output types too, as well as sizes.
            //  will used more sophisticated / detailed stages io information to work out / provide different rates
            //   download rate, output rate.

            // Would be best just to finish this off soon.

            // io rate
            //  of stages
            //  of function

            // io transformation and monitoring?
            //  that could be a function wrapper, used by stages, but not a part of stages itself.

            // separating out io streaming measurement and transformation, and making it general?

            // Definitely would prefer neater internal programming here.
            //  1) Top priority: get the external API right.
            //   Functionality such as IO transformations and measurements could be moved elsewhere.

            // need to get the data types at the various different points of input and output.

            // needs some more recording of stage / pre stage / post stage io.

            //  Get this stages system done really soon.

            // The data types of in, out
            //  and with the input and output transformations.

            // Then try:
            //  
            //  A larger download
            //  Multiple downloads at once

            // stage.pre
            // stage.exec / main?
            // stage.post

            // pre, main, post.

            // pre or post or main
            //  in or out
            //   number of bytes
            //   types

            // .pre .main .post

            // need to record the io types too.

            //  possibly a function wrapper for auto-transforming types?
            //   would be another abstraction likely lower level than stages, and have stages use it.

            // event for having the input object...

            //  pre, in, R
            // record_sig(substage, substage_part, sig)


            // May have more general recording of stage event timings.
            //  Code has become to long and repetitive here.


            // record_substage_part_sig

            const record_absolute_and_relative_stage_timings = (stage_evt_name) => {
                const now = Date.now();
                absst[stage_evt_name] = now;
                res.ms.rel.start.stages = res.ms.rel.start.stages || {};
                res.ms.rel.start.stages[stage_name] = res.ms.rel.start.stages[stage_name] || {};
                res.ms.rel.start.stages[stage_name][stage_evt_name] = now - ms_start;
            }
            record_absolute_and_relative_stage_timings('start');
            
            const record_substage_part_bytes = (substage, substage_part, bytes) => {
                const stages = res.io.stages = res.io.stages || {};
                const stage = stages[stage_name] = stages[stage_name] || {};
                stage[substage] = stage[substage] || {};
                stage[substage][substage_part] = stage[substage][substage_part] || {};
                stage[substage][substage_part].bytes = bytes;
            }
            const record_substage_part_sig = (substage, substage_part, sig) => {
                const stages = res.io.stages = res.io.stages || {};
                const stage = stages[stage_name] = stages[stage_name] || {};
                stage[substage] = stage[substage] || {};
                stage[substage][substage_part] = stage[substage][substage_part] || {};
                stage[substage][substage_part].sig = sig;
            }
            const record_input_transform_data_in = length => {
                const stages = res.io.stages = res.io.stages || {};
                const stage = stages[stage_name] = stages[stage_name] || {};
                const substage = 'pre';
                const substage_part = 'in';
                stage[substage] = stage[substage] || {};
                stage[substage][substage_part] = stage[substage][substage_part] || {};
                stage[substage][substage_part].bytes = stage[substage][substage_part].bytes || 0;
                stage[substage][substage_part].bytes += length;
            }
            const record_input_transform_data_out = length => {
                const stages = res.io.stages = res.io.stages || {};
                const stage = stages[stage_name] = stages[stage_name] || {};
                const substage = 'pre';
                const substage_part = 'out';
                stage[substage] = stage[substage] || {};
                stage[substage][substage_part] = stage[substage][substage_part] || {};
                stage[substage][substage_part].bytes = stage[substage][substage_part].bytes || 0;
                stage[substage][substage_part].bytes += length;
            }
            const record_output_transform_data_in = length => {
                const stages = res.io.stages = res.io.stages || {};
                const stage = stages[stage_name] = stages[stage_name] || {};
                const substage = 'post';
                const substage_part = 'in';
                stage[substage] = stage[substage] || {};
                stage[substage][substage_part] = stage[substage][substage_part] || {};
                stage[substage][substage_part].bytes = stage[substage][substage_part].bytes || 0;
                stage[substage][substage_part].bytes += length;
            }
            const record_output_transform_data_out = length => {
                const stages = res.io.stages = res.io.stages || {};
                const stage = stages[stage_name] = stages[stage_name] || {};
                const substage = 'post';
                const substage_part = 'out';
                stage[substage] = stage[substage] || {};
                stage[substage][substage_part] = stage[substage][substage_part] || {};
                stage[substage][substage_part].bytes = stage[substage][substage_part].bytes || 0;
                stage[substage][substage_part].bytes += length;
            }
            const record_exec_data_in = (length) => {
                const stages = res.io.stages = res.io.stages || {};
                const stage = stages[stage_name] = stages[stage_name] || {};
                const substage = 'main';
                const substage_part = 'in';
                stage[substage] = stage[substage] || {};
                stage[substage][substage_part] = stage[substage][substage_part] || {};
                stage[substage][substage_part].bytes = stage[substage][substage_part].bytes || 0;
                stage[substage][substage_part].bytes += length;
            }
            const record_exec_data_out = (length) => {
                const stages = res.io.stages = res.io.stages || {};
                const stage = stages[stage_name] = stages[stage_name] || {};
                const substage = 'main';
                const substage_part = 'out';
                stage[substage] = stage[substage] || {};
                stage[substage][substage_part] = stage[substage][substage_part] || {};
                stage[substage][substage_part].bytes = stage[substage][substage_part].bytes || 0;
                stage[substage][substage_part].bytes += length;
            }
            const stage_execution_info = stages_execution_info[stage_name] = {
                'name': stage_name,
                'ms_start': stage_ms_start//,
                //'input_byte_count': 0,
                //'output_byte_count': 0
            }

            // input_sig, output_sig

            // as an object this time.
            // bytes_in
            // bytes_out

            //  these will help it to keep track of and be able to set the amount of data io
            // could keep updating it in that object.

            //  longer download, could view the io data every 10s.
            //   would be a good test / view.

            // also, consider combined io.
            //  when dl does multiple simultaneous dls, would be good to get the CURRENT combined download rate
            //   for all of the operating downlods.

            // This is the kind of thing to make an instrument app to follow / view, using a standard API where possible.

            // or res.io.stages[stage_name]

            //let bytes_in = 0, bytes_out = 0;

            // record_bytes_in?
            //  can deal with the io object and all that.

            // the io between the stages makes the most sense really.
            //  have some way to calculate the io rate of the function as a whole?

            // identified response object?
            //  used for latency calc, could be used for io as well?
            //   response counts as input?

            // Probably should have function-specific means to measure / calculate the IO.
            //  Have the fnl code so as much as is possible and worthwhile to facilitate that.

            // io ratios of stages would definitely be nice.
            //  .io.stages

            //  better not to separate out io like that.
            ///  as a stage io ratio seems like an important thing.

            // not sure about how much more of an API is needed to best calculate the DL rate?

            //  built in way to get the rate as it's downloading I suppose.
            //  or some more knowledge of how the function is put together.

            // like we have for ms.latency and ms.taken, want some simple data for io
            //  the recieving of data being the most important?
            //   the part that does what the function is named after / the named part
            //    decompression and parsing is post-processing really.

            // consider the network input to be the dl function's input
            //  so consider that to be the input rate

            // then (for the moment) consider the output rate to be the decompressed data
            //  pre json parsing.

            // They are in different stages
            //  basically arbitrary main io rates / definitions / objects.

            // Basically in dl definition, want to specify the main io pieces of data.
            //  An observable may be asked it's 'rate'.
            //   amount of data throughput / transfer per second.

            // if we have an output object...
            //  will calculate its size.
            //   maybe depending on type.

            // overall io data, then between stages.

            // stage.i, stage.o?


            // maybe stage exec info is worthwhile after all?
            //  for the moment putting it all within the results part.

            // .ms...
            // .i
            // .o

            // to start with, let's make sure we set up the .i properly
            //  info on param translations / transformations too.
            // pre calling the function, but the stage function event will be called earlier.

            // Still using the stage execution for the moment.
            //  However will have stage.i, stage.o, stage.io.ratio

            // Want to conveniently calculate data rates too.

            // Leaving the stage execution info...
            //  it or much of it will be built into .ms and .io data.

            // ms_input_complete?
            // ms_output_complete?
            // ms_fn_complete?
            
            // then ms_complete too.

            // ms started
            // ms complete
            // bytes in
            // bytes out


            // io_data
            //  params in
            //  item out
            
            // .input.rate is a fairly convenient interface.
            // and each stage... not so much data there?

            // res.stages???
            //  res.stages[name].input.rate
            //  res.stages[name].status      // queued, active, complete?
            //   

            // .stages[name].input.rate

            // make the stage events api available?
            //  makes sense to do so.
            //   however, just using the observable to be able to read stage rates would be useful.
            //    getting stage info variable

            // possibly not having the stage api evented class for the moment?
            //  storing the stage event timings could make a lot of sense.

            // mainly about listening for stage events from the API.

            //console.log('Observable Stage API called: stage_name', stage_name);
            //console.trace();
            // then listen to the ec_stage_api

            // all events with the name stage_event?
            //  can we listen to all???

            // monitor the bytes in?
            //  bytes out?

            // also input events, be able to log them all?
            //  or just the timings and the sizes?

            // size and time log?

            //  input size and time log?
            //  output...


            // enable external subscrition and monitoring too?
            //  for the moment, keep monitoring here.

            // on for all events?

            let had_input_data = false;

            ec_stage_api.on('stage_event', evt => {
                const {name} = evt;

                // pass the stage event onto .io

                res.io.raise('stage', {
                    stage_name: stage_name,
                    event_name: name,
                    event: evt
                });

                console.log('Obs Stage API stage event notified - stage_name, name: ' + [stage_name, ' ' + name]);

                if (name === 'pre-start') {
                    const {args, sig_from} = evt;
                    record_substage_part_sig('pre', 'in', evt.sig_from);
                    // get the number of bytes if it's not an async object.
                    // record_substage_part_bytes
                    //console.log('evt', evt);
                    console.log('*** sig_from input-transform-start', sig_from);

                    // can get the sizes of buffers and strings easily enough.
                    //  optionally looking into objects and arrays to get sizes?
                    // size(obj) could go in lang-mini. or osize? osz?

                    // declarations such as B => R ?
                    if (sig_from === 'B' || sig_from === 's') {
                        console.trace();
                        throw 'NYI';
                    }
                    //throw 'stop';
                    record_absolute_and_relative_stage_timings('pre-start');
                }
                // pre-data-in
                if (name === 'pre-data-in') {
                    record_input_transform_data_in(evt.data.length);
                }
                if (name === 'pre-data-out') {
                    record_input_transform_data_out(evt.data.length);
                }
                if (name === 'post-input-data') {
                    record_output_transform_data_in(evt.data.length);
                }
                if (name === 'post-data-out') {
                    record_output_transform_data_out(evt.data.length);
                }

                if (name === 'pre-complete') {
                    // got the type / sig?
                    //  what the input was converted to.
                    record_substage_part_sig('pre', 'out', evt.sig_to);
                    // also recording object sizes in some cases.
                    //  not for async objects here. need to get the sizes differently.
                    //console.log('Object.keys(evt)', Object.keys(evt));
                    const res = evt.to;
                    const sig_res = evt.sig_to;
                    //console.log('sig_res', sig_res);
                    // if it's a buffer or string, getting the size is easy enough.
                    if (sig_res === 'B') {
                        record_substage_part_bytes('pre', 'out', res.length);
                    } else {
                        // s - length * 2
                        // find this when doing more comprehensive tests / examples.
                        //  could input transform to string, for example.
                        //   or whatever the result of a promise it.
                        console.trace();
                        throw 'NYI';
                    }
                    // then depending on the type of the res, we can get the size.
                    // record_substage_part_sig('pre', 'out', evt.sig_from);
                    record_absolute_and_relative_stage_timings('pre-complete');
                }
                // not using output transform right now.
                //  examples / tests?
                // from and to types?
                if (name === 'post-start') {
                    // include the signature of what's being transformed.
                    //  likely a promise?

                    // dont get size for promise, stream, obs here.

                    const sig = evt.sig_from;
                    if (sig === 'B') {
                        console.log('evt', evt);
                        console.trace();
                        throw 'NYI';
                    } else if (sig === 's') {
                        console.log('evt', evt);
                        console.trace();
                        throw 'NYI';
                    }

                    record_substage_part_sig('post', 'in', evt.sig_from);
                    record_absolute_and_relative_stage_timings('post-start');
                }

                if (name === 'post-data') {
                    //output_transform_data_bytes += evt.data.length;
                    //record_absolute_and_relative_stage_timings('pre-start');
                }

                if (name === 'post-complete') {
                    //console.log('evt', evt);
                    //console.trace();
                    //throw 'stop';

                    record_substage_part_sig('post', 'out', evt.sig_to);
                    record_absolute_and_relative_stage_timings('post-complete');
                }

                // pre exec function
                //  will record the signature of the input to the main substage.

                if (name === 'main-pre') {
                    // evt will have the sig
                    //  (sig_in)

                    const {args, sig} = evt;
                    // time logging not needed here, already time logged the fn call?

                    // need to record the sig.
                    // could check the args obj for the size in bytes.
                    record_substage_part_sig('main', 'in', sig);
                    // depending on the sig, we may be able to get and record the object's size.
                    //  string and buffer sizes in particular.
                    if (sig === 's') {
                        // args object?
                        // or just an object?
                        // not getting the object in an array though.
                        if (typeof args === 'string') {
                            record_substage_part_bytes('main', 'in', args.length * 2);
                        } else {
                            record_substage_part_bytes('main', 'in', args[0].length * 2);
                        }
                        //console.log('args', args);
                        //throw 'stop';
                        // is it an arguments object? array?
                    } else if (sig === 'B') {
                        //console.trace();
                        //console.log('args', args);
                        //throw 'stop';
                        if (args instanceof Buffer) {
                            record_substage_part_bytes('main', 'in', args.length);
                        } else {
                            record_substage_part_bytes('main', 'in', args[0].length);
                        }
                        //record_substage_part_bytes('main', 'in', args[0].length);
                    }
                    //console.log('evt', evt);
                    //console.trace();
                    //throw 'stop';
                }                

                if (name === 'main-call-complete') {
                    // ms_pre_exec
                    // exec-complete event and timing?
                    //  'complete' is a bit ambiguous with these stages.
                    //  differentiate between execution and io / all processing.
                    // packet size and time logging?
                    // packet logging?
                    // definitely makes sense for input processing.
                    // input-await-start?
                    // input-await-complete?
                    const {res, sig} = evt;
                    record_substage_part_sig('main', 'out', sig);
                    record_absolute_and_relative_stage_timings('main-call-complete');
                    // stage start and exec-complete relative timings from the res.

                    // res.ms.rel.start.stages = {...} all measurements are from the start of the result obs
                    
                    // res.ms.rel.stages = {...} all measurementes relative to the start of the stage itself.

                    //  Think timings (summary) output is fine now.
                    //   Longer downloads, 100s of MB, would benefit from up-to-date rate measurements. Even estimate time to completion, estimated time complete, proportion complete.
                    //    When we know the total size, which we often will.

                    // Likely want to make some of this instrumentation optional.
                    //  Check perf with and without it.
                    //   Double layer it???

                    // i.rate???
                    // i.stages[name].rate?
                    // i.stages[name].bytes
                    //  with ongoing updates?
                    //  


                    // would be nice to record the stage relative time too.
                    // also the res relative time.
                    //  times relative to both are important.

                    // rel.start.stages...

                    // rel.stages ...
                    //  information where the stage even timings are relative to the stage start.

                    // stage preparation too?
                    //  not technically part of the stage, as the stage gets defined by the user.
                    //  stage prep facilitates it running.

                    //stage_execution_info.ms_post_exec = now;
                    //stage_execution_info.ms_exec = now - stage_ms_start;
                }

                // pre-exec
                // post-exec

                if (name === 'has-response') {
                    record_res_ms('has-response');
                    res.ms.latency = res.ms.rel.start['has-response'];
                }
                // input start too...?
                //  would be when it delivers its first data?

                //stage_execution_info.input_byte_count
                if (name === 'input-complete') {
                    record_absolute_and_relative_stage_timings('input-complete');
                    stage_execution_info.input_sig = evt.sig;
                }
                if (name === 'output-complete') {
                    record_absolute_and_relative_stage_timings('output-complete');
                    stage_execution_info.output_sig = evt.sig;
                }
                if (name === 'main-data-in') {
                    if (!had_input_data) {
                        record_absolute_and_relative_stage_timings('input-start');
                        had_input_data = true;
                    }
                    if (evt.data) {
                        record_exec_data_in(evt.data.length);
                        //stage_execution_info.input_byte_count += evt.data.length;
                    }
                }
                if (name === 'main-data-out') {
                    // output-next?
                    //if (!stage_execution_info.output_byte_count) stage_execution_info.output_byte_count = 0;
                    if (evt.data) {
                        //stage_execution_info.output_byte_count += evt.data.length;
                        record_exec_data_out(evt.data.length);
                    }
                }
                if (name === 'main-data-out-complete') {
                    // output-next?
                    // not post processing here.
                    // data size?
                    //  data itself?

                    // also want to move the ms time taken ms_taken? into the io data.
                    //  this would be useful for calculating the data rate.
                    //console.log('evt', evt);
                    //console.trace();
                    //throw 'stop';

                    //if (!stage_execution_info.output_byte_count) stage_execution_info.output_byte_count = 0;
                    if (evt.data) {
                        //stage_execution_info.output_byte_count += evt.data.length;
                        // depending on the res sig....
                        //  if it's an array, harder to say it's data size.
                        if (evt.data instanceof Buffer) {
                            record_exec_data_out(evt.data.length);
                        }
                    }
                }

                if (name === 'complete') {
                    const msc = stage_execution_info.ms_complete = Date.now();
                    //  only when the output stream is complete?
                    //  or whem exec is complete?

                    stage_execution_info.ms_taken = msc - stage_execution_info.ms_start;
                }
                // 
                // keep track of the data events to calculate the numbers of bytes.

                // has-response
                //  can use this to set the latency.

                // ms_since_start();
                // store stage timings on the stage_execution_info
                // pre-exec to this stage function running?
                //  may be worth comparing.

                // Both times since start as well as full ms times?
                //  Could make everything relative from the obs start time.
                //   Wouldnt be that hard to calculate them from offsets, offsets are friendlier.
                //   Would be more memory efficient too.
                // can't do pre-exec because this fn hasnt been called yet.

                /*
                if (name === 'main-pre') {
                    // ms_pre_exec
                    stage_execution_info.ms_pre_exec = ms_since_start();
                }
                */

                // Maybe begin-exec right at the very beginning, before input processing.
                //  something like just 'exec'??? 
                // Need to check exec timings.
                //  Maybe they all really are 0ms right now.

                // 'pre-start'

                // 'pre-complete'

                // recording some other info makes a lot of sense too.
                // .io isnt working so well at the moment.

                //  shouldnt be an array
                //   io.stages['x'].rate
                // Definitely want easy access to the stages io rate.

                //  possibly have .stages
                //   and that would have some time data?
                //   

                // some kind of amalgamated data for all stages together?
                //  maybe that would be best later.
                // .io.stages could work fine
                
                // .stages[x].io?

                // will work on the monitoring output (api) later.

                // now, just want .io
                // count the amount of input transform data (keep updating it).
                //  need careful loggin of data io.

                // set a property on the stage io instead....

                //let input_transform_data_bytes = 0;
                //let output_transform_data_bytes = 0;
                // No longer calling the events input-transform / output-transform.
                // Need more detailed & complete monitoring data
                //  Sizes
                //  Signatures

                // input-transform to pre?
                //  pre-data-in?
                // time taken, ratios, and rates within io

                //  need to it be simple to get the overall rate of a function, or the rate of a specific / main part of a function (could be default rate)?
                //  or .rates[par name].
                //   so it's very clear we are getting the download or whatver rate.
                // .rates does make sense to
                //  simpler than .io?
                // anyway, work on getting the stage rate in places.
                //  bytes per second.
                //  automatically getting the rates of streams.

                // longer download would help with measuring the current rate, not overall.
                //  as in rate in the last 1s.
                //   will be very useful in all sorts of places.

                // combined rates of multiple downloads?
                // input-next?

                //  need to get the input data of readable streams.
                //   and also when we are not buffering them.
                //    can we read it too?
                //     and get data sizes?

                // want to be more sure to get the rate / event data on all input and output streams.
                //  will have more data monitoring of input and output streams.
                //   not just when buffering I assume.
                // Timings looks to be working well now.
                //  .ms.taken?
                //   time to complete?
                //   taken so far?

                //  ms.rel.complete?

                // ms_taken will be a useful shortcut.
                // possibly running a large, ongoing dl?
                // .rate?
                // .latency?

                // .ms.latency is fine for the moment.

                // .ms.taken?
                //  and each stage has a .taken?
                // then running multiple fns at once.


                // first input data?

                // input-next?

                // input_stream / buffer bytes?

                //  measuring bytes on other data types...
                //   don't assume a perf problem. perf monitoring could help in the longer term.
                //    or have approx output sizes when it creates a JS array from JSON buffer.
                //     function to work out size of obj in memory in node or in browser?
                //      could be useful here for calculating sizes of arrays and objects.
                //  or deep_size js function.
                //   approximations for overhead?

                // leave the size of js objects for the moment.
                // could use size-of / even import its code / integrate with some other code here.
                //  like deep_map? deep_each?
                // input-complete

                // ms_input_complete?

                // input validate?
                // input complete?
                //  use that in more cases?
                //   and give the input type.
                //    past promise resolution.

                // stage complete after result?


                // put together data about stage status / how long each stage takes.
                //  returning some kind of stages list / map would help with monitoring

                // Do want both a simple API and convenient API.


                // To start with, calculating stage timings
                // Total stage data input
                // And output

                //  But being able to read these as live variables would be useful.

                // res.stages?
                //  res.status.stages?
                //  res.stages.status?

                // stages_status makes sense for such an object.
                // res.stages_status

                // input-data
                // input-next
                //  could store it as data / chunk event

                // input-next and input-data the same?
                //  one is for obs, one for R.

                // result

                // return / modify a stage_timings object?
                //  .stages[name].io_info
                //   referencing a stage by name, and getting io info from it.

                // general io info for each stage?
                // 
                //  try the rate for the whole stage. input and output.
                // bytes input...
                // input-validate
            })
            //ec_stage_api
            // all events?
        }
        // input types...
        //  resolve promises on output?
        // Abstracting away pre, main and post processing...
        //  may better be done with a separate example.
        // replacing with the new stage events api.

        // This module is getting really / too big now?
        //  It's working so far with dl.
        // Have vhl provide fnlfs?

        // need a comprehensive events system.
        //  seems like quite a lot of events get raised when calling a stages() function.

        // pre and post processing functions as more advanced function types?
        //  not right now....
        //   but it could make it more concise & better.

        // more comprehensive and consistent events will be useful for getting various timings.

        // as it turns out, quite a lot of timings could be relevant.
        //  maybe get more into calculating data latency.


        // improve stage timings and event naming convention.
        //  continue checking they get called right...
        //  then make use of the automatically recorded timings
        //   calculate durations too.

        //  a ms_running function for stages that can be ongoing or complete?

        // encapsulating pre, main and post processing elsewhere?
        //  encapsulating single function call monitoring elsewhere?
        //   that may be worthwhile in order to shorten / improve the code in this part.

        // Code now far longer than originally expected.
        // start

        // pre-start

        // input-start ?
        // pre-input-start
        // pre-input-data
        // pre-input-complete

        // pre-output-start
        // pre-output-data
        // pre-output-complete

        // pre-complete

        // including when the data is complete too in some cases.

        // main-start

        // input-start?
        // main-input-start
        // main-input-data

        // main-input-complete
        // input-complete
        // main-complete

        // main-output-start
        // main-output-data
        // main-output-complete

        // post-start
        // post-output-start
        // post-complete
        // post-output-complete
        //  post-out-data?

        
        

        // output-start
        // output-data
        // output-complete

        // complete


        // Definitely need output timings.

        //  as in stage io timings.
        Object.defineProperty(res, "latency", {
            get: () => {
                if (map_ms_reached_status['ok']) {
                    // calc it here
                    return map_ms_reached_status['ok'] - ms_start;
                }
            }//,
            //writable: false
        });

        /*
        Object.defineProperty(res, "ms_to_complete", {
            get: () => {
                if (map_ms_reached_status['complete']) {
                    // calc it here
                    return map_ms_reached_status['complete'] - ms_start;
                }
            }//,
            //writable: false
        });
        */

        // stages_execution_info
        //  logs are different. still consider them.
        //   including summary such as data size where applicable would help.

        // doesnt show as a key.

        Object.defineProperty(res, "stages_execution_info", {
            get: () => stages_execution_info//,
            //writable: false
        });

        // stages list?
        //  num_stages

        // stage_names?


        /*
        Object.defineProperty(res, "stage_log", {
            get: () => arr_stage_log//,
            //writable: false
        });
        */
        // log and status a little neglected recently.

        Object.defineProperty(res, 'log', {
            get() {
                // Could clone it for security so it can't be changed
                return llog;
            }
        });
        Object.defineProperty(res, 'status', {
            get() {
                // Could clone it for security so it can't be changed
                return _status;
            }
        });

        // .ms and .io as a property?
        //  not doing that right now.

        setTimeout(() => {
            [stop, pause, resume] = fn_inner(data => {
                // And could apply a filter here.
                //  Could apply a number of filters.
                let passes = true;
                if (this.filters) {
                    for (let filter of this.filters) {
                        passes = filter(data);
                        if (!passes) break;
                    }
                }
                if (passes) res.raise('next', data);
            }, last_data => {
                //setImmediate(() => {
                //console.log('!!last_data', !!last_data);


                // Seems like we could do with noticing output-start event. <- do that now.

                // stage.input, stage.output?
                //  clearer definitions there?
                //   output based on a description of what happens to the input? can be calculated / known in advance anyway???

                //  especially when it's a stream / observable.

                // definitely want the io timings

                //  then will work on collecting io sizes
                //  then will work on calculating io rates

                // set the ms_complete value as well.
                //  make it a read_only property? enumerable as well?

                // An error doesn't seem to appear in here. look into it.
                // optimize date calls?

                // observable complete.

                // do this for has-response as well.
                //  that's an event (where the latency gets set)

                record_res_ms('complete');

                res.ms.taken = res.ms.rel.start.complete;

                //res.ms_taken = ms_since_start();
                //res.ms_complete = Date.now();

                // and ms.taken is the relative measurement between start and complete.

                // ms complete is the absolute time measurement
                //  or ms_taken is better
                //console.log('res.ms_complete', res.ms_complete);
                if (typeof last_data !== 'undefined') {
                    res.raise('complete', last_data);
                } else {
                    res.raise('complete');
                }
                //});
            }, error => {
                res.raise('error', error);
            }, status, log, stage) || [];

            // status before log!!!
            //  
    
            if (stop) res.stop = stop;
            if (pause) res.pause = pause;
            if (resume) res.resume = resume;
        
            if (pause && resume) {
                res.delay = (ms) => {
                    pause();
                    res.raise('paused');
                    setTimeout(() => {
                        res.resume();
                        res.raise('resumed');
                    }, ms);
                }
            }
        }, 0);
    
        res.next = handler => {
            res.on('next', handler);
            return res;
        }
        res.data = res.next;
        res.complete = handler => {
            res.on('complete', handler);
            return res;
        }
        // copy the result when complete?
        //  the .data to .res
    
        res.on('complete', data => {
            // set the status
            // don't have status data here though.
            //  maybe could integrate that
            status('complete');
            // and stage to 'complete'.
            // don't store res?
            //  leads to memory leak?
            const store_res = () => {
                if (data) {
    
                    if (data.data) {
                        res.res = data.data;
                    } else {
                        res.res = data;
                    }
                }
            }
        })
    
        res.done = res.end = res.complete;
        res.error = handler => {
            res.on('error', handler);
            return res;
        }
    
        res.then = handler => {
            // the whole thing in set immediate?
            //console.log('then');
            // what if it's already resolved?
            let res_all = [];
            let had_next = false;
            res.next(data => {
                res_all.push(data);
                had_next = true;
            });
    
            if (res.completed) {
                //res.ms.taken = res.ms.rel.start.complete;
                handler(res_all);
            } else {
                res.complete(last => {
                    //res.ms.taken = res.ms.rel.start.complete;
                    // not sure when we had the 'last' here.
                    //console.log('complete last', last);
                    //console.log('had_next', had_next);
                    //console.log('res_all', res_all);
                    if (had_next && res_all.length > 0) {
                        handler(res_all);
                    } else {
                        handler(last);
                    }
                })
            }
            // and error handling
        }
        
        res.__type_name = 'observable';
        // Could make these static read-only.
        res._is_obs = res._is_observable = true;
        // Not been using the _ ec.
        //  Worth declaring earlier?
        res._ = new Evented_Class();
        // a bit (too) unconventional programming?
        res.meta = (k, v) => {
            if (v === undefined) {
                // just the key
            } else {
                res._[key] = value;
                res._.raise('change', {
                    key: k,
                    value: v
                })
            }
        }
        return res;
    })(_opts, _fn_inner);

    return obs_res;
    // Looks like a decent and performent startup pattern here.
}

observable.return_type = 'observable';
// need to look into the observable examples in detail.
//const observable = observable;

//const observable = _observable;

//obsfilter
// by default will filter the 'next'
//  returns a new observable that's filtered.
//   So we can get a filtered output but also process the original because its still there.

// a filter function.

// obs.filter could generate a new observable with the filtering function.
// but the obsfilter function would compress better.

const obsfilter = (obs, next_filter) => observable((next, complete, error) => {
    obs.on('next', data => {
        if (next_filter(data)) {
            next(data);
        }
    })
    obs.on('complete', data => {
        if (data) {
            complete(data)
        } else {
            complete();
        }
    })
    obs.on('error', err => {
        error(err);
    })
});
// Examples, tests!!!

const obsalias = (obs_like, mapping) => {

    let next, complete, error;

    // mfp would help here.
    //  Compiler has improved a lot in many cases since fp was first made.
    const tmapping = tof(mapping);
    if (tmapping === 'array') {
        [next, complete, error] = mapping;
    } else if (tmapping === 'object') {
        //{next, complete, error} = mapping;
        next = mapping.next;
        complete = mapping.complete;
        error = mapping.error;
    }
    return observable((n, c, e) => {
        if (next) {
            obs_like.on(next, n);
        } else {
            obs_like.on('next', n);
        }
        //console.log('!!complete', !!complete);
        //console.log('complete', complete);

        if (complete) {
            obs_like.on(complete, c);
        } else {
            obs_like.on('complete', c);
        }

        if (error) {
            obs_like.on(error, e);
        } else {
            obs_like.on('error', e);
        }

    })
    // should be strings...
    /*
    console.log('Object.keys(obs_like)', Object.keys(obs_like));
    const k = Object.keys(obs_like);
    // make a map from them...
    const km = get_truth_map_from_arr(k);
    console.log('km', km);

    if (km._events) {
        console.log('Object.keys(km._events)', Object.keys(km._events));
        console.log('obs_like._events', obs_like._events);
        console.log('obs_like._eventsCount', obs_like._eventsCount);
    }

    throw 'stop';
    */
}

const obscollect = (obs, fn_collect, arr_res) => {
    obs.on('next', data => {
        const item_res = fn_collect(data);
        arr_res.push(item_res);
    })
    return obs; // built for chaining fns.
}

// need to make sure mfp works properly for this...
// also will help to give the function a name using mfp.
// mfp now gets used during fnl setup
// maybe obspool will be obselete or better explained in the future.
// should remove obspool until mfp is (more) complete.


const obspool = () => {
    console.trace();
    throw 'out of order';
}

// mfp works so this may be worth bringing back.

/*
const _obspool = mfp({

    // 07/06/2019 - making mfp more capable & flexible - need to fix it though so it handles simple sig matching again...

    '[f,a]': (fn_obs, arr_params) => {
        console.log('[f,a]');
        console.log('arr_params', arr_params);
        //console.log('arguments', arguments);
        // each of the arr params - create the observable
        return observable((next, complete, error, status, log) => {
            let c = arr_params.length;
            // not pooling the complete data...?
            each(arr_params, param => {
                const res_obs = fn_obs(param);
                res_obs.on('next', next);
                res_obs.on('error', err => {
                    c--;
                    //error(err);

                    // next(err)
                    //  then need to check it's not an error object?
                    // {type: 'error'}
                    //  could be easier?
                    // next with an error object?
                    //  log it?
                    log(err);

                    if (c === 0) complete();
                });
                res_obs.on('complete', err => {
                    c--;
                    if (c === 0) complete();
                });

                // then will need to listen to see if they are all complete?
                //  or all errored?

                // Rules / option to allow this to stop_on_error
                //  default being false.
            })
        })
    }
})
*/

// fcall
//  an enhanced way of calling a function
// Pausable sequence

// not so sure about the usage right now.
const seq = (q_obs) => {
    return observable((next, complete, error) => {
        let c = 0,
            obs_q_item;
        let process = () => {
            if (c < q_obs.length) {
                let q_item = q_obs[c];
                obs_q_item = q_item[1].apply(q_item[0], q_item[2]);
                obs_q_item.on('next', data => {
                    next(data);
                });
                obs_q_item.on('error', error => {
                    error(error);
                });
                obs_q_item.on('complete', data => {
                    c++;
                    process();
                });
            } else {
                complete();
            }
        }
        process();
        let stop = () => {
            obs_q_item.stop();
            complete();
        }
        let pause = () => {
            obs_q_item.pause();
        }
        let resume = () => {
            obs_q_item.resume();
            //complete();
        }
        return [stop, pause, resume];
    });
}

const obs_to_cb = (obs, callback) => {
    let _obs = observable(obs);
    let arr_all = [];
    //console.log('obs_to_cb callback', callback);
    //console.trace();
    _obs.on('next', data => arr_all.push(data));
    _obs.on('error', err => callback(err));
    _obs.on('complete', last => {
        //console.log('arr_all.length ', arr_all.length);
        /*
        if (arr_all.length === 0) {
            callback(null, last);
        } else {
            callback(null, arr_all);
        }
        */
        if (typeof last !== 'undefined') {
            // don't return the array of all, they are only interim results
            // or have it as the 3rd callback param!
            callback(null, last, arr_all);
        } else {
            //console.log('callback', callback);
            callback(null, arr_all);
        }
    });
}
// an unpaging version...
//  or put unpaging elsewhere, around the definition of observable function.

// page / chunked

// unpaged function
// takes an observable that gives arrays (pages), breaks them up

const unpage = (obs) => {
    return observable((next, complete, error) => {
        obs.on('next', arr_data => {
            //console.log('arr_data', arr_data);
            // Specialised processing for Command_Response_Message?
            // An unpage function would be nice there.
            //  or each_record
            // Unpage would make sense because it can be used here, it's generic.
            if ('unpaged' in arr_data) {
                let unpaged = arr_data.unpaged;
                for (let c = 0, l = unpaged.length; c < l; c++) {
                    //console.log('unpaged[c]', unpaged[c]);
                    next(unpaged[c]);
                }
            } else {
                for (let c = 0, l = arr_data.length; c < l; c++) {
                    next(arr_data[c]);
                }
            }
        });
        obs.on('complete', () => {
            complete();
        });
        obs.on('error', err => error(err));
        // Stop, pause, resume
        return [];
    });
}

const obs_or_cb = (obs, callback, always_plural) => {
    //console.log('obs_or_cb callback', callback);
    if (callback) {
        //console.log('is cb');
        //console.log('has obs', obs);
        obs_to_cb(obs, callback);
    } else {
        return observable(obs, always_plural);
    }
}

const sig_obs_or_cb = (a, inner) => {
    // then if the last is a callback (function)
    let a2;
    //let using_cb = false;
    let callback;
    // 
    if (typeof a[a.length - 1] === 'function') {
        // its a callback
        //console.log('its a cb');
        a2 = Array.prototype.slice.call(a, 0, -1);
        callback = a[a.length - 1];
        //using_cb = true;
    } else if (typeof a[a.length - 1] === 'undefined') {
        // its a callback
        //console.log('its a cb');
        a2 = Array.prototype.slice.call(a, 0, -1);
        //using_cb = true;
    } else {
        a2 = Array.prototype.slice.call(a);
    }
    // if the last one is undefined
    //  (as in a missing callback)

    let sig = get_a_sig(a2);

    let obs = observable((next, complete, error) => {
        // no, can't return that...
        //  need to return the observable???
        //  
        return inner(a2, sig, next, complete, error, a2.length);
    });

    //console.log('obs', obs);
    //throw 'stop';
    return obs_or_cb(obs, callback);
    //let [stop, pause, resume] = inner();
    // need to call the inner function as though an observable gets made.
    //  maybe it's not possible / justifyable to put that handling here.
    //return obs_or_cb()
    // then call the inner function?
}

// -------------- Promises ----------------
// ________________________________________

// Just give it a function...?

const cb_to_prom_or_cb = (inner_with_cb, opt_cb) => {
    if (typeof opt_cb !== 'undefined') {
        inner_with_cb(opt_cb);
    } else {
        return new Promise((resolve, reject) => {
            inner_with_cb((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            })
        })
    }
}

const prom_or_cb = (prom, opt_cb) => {
    let _prom;
    if (prom instanceof Promise) {
        //return prom;
        _prom = prom;
    } else {
        // assuming its a function.
        _prom = new Promise(prom);
    }

    if (opt_cb) {
        _prom.then((res) => {
            opt_cb(null, res);
        }, err => {
            opt_cb(err);
        });
    } else {
        return _prom;
    }
}

const prom = (prom) => {
    if (prom instanceof Promise) {
        return prom;
    } else {
        // assuming its a function.
        return new Promise(prom);
    }
}

/*
    Advanced Function

    // Will have a function call that assists with typing / signatures.
    //  Regex and wildcard checking would be nice.
    //   Regex too slow
    //   Check if the signatures match a few regular expressions and parse the 

*/

// Data_Source
//  a closure where 3 functions next, complete, error can be called.
const is_obs = obj => {
    return obj.is_obs === true;
}
const is_prom = obj => {
    return obj instanceof Promise || obj.is_obs === true;
}

//  Not sure what this is for.
// Multi-type specifier
const obs_prom_arr_item = (obj, obs, prom, arr, item) => {
    if (obj.is_obs === true) {
        return obs(obj);
    } else {
        if (obj instanceof Promise) {
            return prom(obj);
        } else {
            if (Array.isArray(obj)) {
                return arr(obj)
            } else {
                return item(obj);
            }
        }
    }
}
// limit

// limit the number of results from an observable
//  then stop

// Will this take an obs-multi wrapper? Like vml?

// Definitely need examples and tests.

// This is lower level than ofp.
//  A full understanding and testing of this and ofp will help.
//   ofp will be a platform for quite a few functions.
//   maybe in combination with moft or omfp?
//    could incorporate upgrades here too.

// but will use mfp as a module in its own right.

// obs.collect? etc...

// Summary:
// 1. obs() does allow for and implement functionality to support stages
// 2. stages() uses and returns an obs. it's to help set up an observable that uses stages.
//  no inner observable
//  it's a way to get observables setting its stage values.

//  The intermediate stages could be observables.
//   Would help some types of observations.

// returns a function.
//  mfp could help annotate this.

// mfp warnings on the wrong return type will help.
//  console.warn as the wrong return type.

// this could be a relatively simple function?

// this will help to compose functions out of other functions
//  eg same decompression function within a download or load from disk function.

// fn_stages???
// declarative mfp?
// mfp with object and function....

//  stages could have improved pipe stages.
//   a syntax for data piping?
//   readable and writable streams?
//  stream into the next function, not using an observable?

//  a function accepting a readable_stream?
//   we could make a writable stream from the buffer results too.

//  integrating the methods and syntax with pipe would make sense.
//   downloading and decompressing without buffering in between would be useful.
//    will be optional too.

// A stage could itself be defined as a transform stream.
//  want nicer syntax to decare a Transform_Stream.

// works with obs, incorporates monitoring.
//  want to be able to inspect the data rate of specific stages of a function.

//  now need to work on inspecting the data rates of stages that involve / process R readable_stream.

// when the input type of a stage is a readable stream
// output type is readable stream

// fn.io?

// a .io property would be good for providing rates.
//  input b/s, output b/s   i/o ratio
//   some fairly simple measurements, code needs to be a little complex to do it.

// could have monitoring elsewhere, and brought in here?
//  for the moment put it here and in obs stages.
//  maybe refer to / use monitoring code lower in the platform if it's suitable there.

// the rate monitoring is currently a feature of observable.
//  however, in some cases it appears as though we are moving away from observables to the node native streams.

// observe_stream?

// observables monitoring themselves?
//  observables monitoring internal stages.
//  that makes most sense for how monitoring will be used at the moment.

//  want to calculate the rates of various operations within the function.
//   and latencies too of course.

//  want a dl etc function which has got built in advanced monitoring, compression handling etc.

// this will help to tell in many cases what the performance is like.

// monitor_stream
//  could be a useful encapsulation for this.

// raise stage event / events.

// mid_stage_event?

// try listening to stream events.

// stage input stream event
// stage output stream event

// log info about both of them.

//  want to measure log ram usage sizes too
//   keep it under control where necessary.
//    log size limits.


// turns out to be a considerably large amount of code.

// returns a 'staged function'.

// 16/06/2019 - about 2000 lines including comments.


// 18/06/2019 - want to remake stages, so that makes use of fn-io-transform and fn-monitor.






const stages = mfp({
    name: 'stages',
    return_type: 'function'   // function that returns an observable.
}, function() {
    // arrow function instead?
    //  can we keep the same this in some places? or it doesn't matter when we use arrow fns elsewhere?
    const a = arguments, l = a.length;
    const sig = get_a_sig(a);
    //const arr_stages = [];
    console.log('stages sig', sig);
    let arr_stages;
    let num_stages;

    // a separate function?
    //  an options object?
    //   the options object would have the option for providing a ??? function that gets called when we send a stage event???

    // Definitely need more work on getting events between this part and the execution.

    let _raise_stage_event;

    const prepare = () => {

        // but really its best to execute a function inside stages.
        //  giving that function the capability of?:
        //   Raising events on the result object
        //   Raising stage events that go through the exising stages and observable system?

        // Raising the 'have-result' or 'have-result-stream' would help to determine the latency
        // 'have-result-stream' or 'result-stream' or 'response-stream' event.

        //  knowing when a stram starts to be recieved is useful when calculating latency.
        const input_ofns = ofns => {
            const map_stage_reserved_names = {
                _raise_stage_event: true
            }
            arr_stages = [];
            // a 'pre' stage?
            //  or do without that?
            //   implement it separately / differently?

            //console.log('ofns', ofns);

            each(ofns, (fn_stage, stage_name) => {
                if (stage_name === '_raise_stage_event') {
                    _raise_stage_event = fn_stage;
                } else {
                    if (!fn_stage.name) {
                        fn_stage.name = stage_name;
                    }
                    arr_stages.push([stage_name, fn_stage]);
                }
                
            })
            num_stages = arr_stages.length;
            //console.log('input_ofns num_stages', num_stages);
            //console.trace();
        }

        if (sig === '[a]') {
            valid = true;
            each(a[0], stage => {
                // and the stage should be an array
                //console.log('stage', stage);
                //console.log('get_a_sig(stage)', get_a_sig(stage));
                if (get_a_sig(stage) === '[s,f]') {
                    const [stage_name, fn_stage] = stage;
                    if (!fn_stage.name) fn_stage.name = stage_name;
                } else {
                    valid = false;
                    console.trace();
                    throw 'expected stage to be specified as an array [s,f]'
                }
            });

            if (valid) {
                arr_stages = a[0];
                num_stages = arr_stages.length;
            }

        } else if (sig === '[o]') {
            // ok, so stages input as object works OK.
            // an object...
            //  will put that into the arr_stages.
            //console.log('');
            //console.log('a[0]', a[0]);
            // stages as an object.
            //  options as well?

            // where the stages are all functions / stream transformers / other transformers?
            // reserved words that are not / may not be stages?

            // assigning local variables from reserved words makes sense.
            //  need to improve the stages(fn) api.
            //   resolves the function call and uses it as input.
            //    but provides it with _raise_stage_event
            //     possibly more in terms of a Stages Event / Events API object.
            //      look at redux sagas too?

            input_ofns(a[0]);
            //console.log('2) num_stages', num_stages);
            //console.log('arr_stages.length', arr_stages.length);
            // [o,f]??? with the second being the _raise_stage_event?
            //  raise_stage_event or _stage_event or whatever could be included in that object.
            //   starting with _ makes sense.

            //console.trace();
            //throw 'stages expected an array (may become more flexible in the future)';
        } else if (sig === '[f]') {
            // ok, so stages input as object works OK.
            // an object...
            //  will put that into the arr_stages.
            /*
            arr_stages = [];
            each(a[0], (fn_stage, stage_name) => {
                arr_stages.push([stage_name, fn_stage]);
            })
            num_stages = arr_stages.length;
            */

            // Will help when declaring the stages where shared local variables get set up first.

            //console.log('stages taking a fn -----');
            // has_response function....
            //  execute it with that has_response function?

            // Seems tricky to get that data through.
            // call it with the raise_stage_event function.

            //  and a version with fns stages with raise_stage_event?
            //   would be in options?

            // have access to the event passing system?

            //  Need to be able to raise result events from the definition of a staged function.

            //   See where we can get the result object?
            //    Need to make it available where possible
            //   Or at least the event sending.
            //   Needed to say when the 'waiting for response' stage is over.
            // call it with a second function too?
            //  but do / should we even have that second function yet?
            // could set the raise_stage_event function at a later part?
            //  or give it the stages_event_api object?
            //   and assign properties to that object?
            // May need to rethink this function passing...

            const raise_stage_event = (name, evt) => {
                // and probably change other clunky event API.
                //console.log('[f] sig stages prepare (section) raise_stage_event', name, evt);

                //console.log('[f] sig stages prepare (section) raise_stage_event');
                //console.log('tf(name)', tf(name));
                //console.trace();
                // then a different function which could have been assigned.
                // will it know what stage is running?
                //  it should know what stage it is processing

                //  multiple stages can run at once as they stream or are async in some ways (not promises though, they get resolved)
                // then assign _raise_stage_event in the part that handles these stages.
                //  when a stage gets run.
                // _raise_stage_event - how / can / when will it be assigned?
                //console.log('!!_raise_stage_event', !!_raise_stage_event);
                if (_raise_stage_event) _raise_stage_event(name, evt);

            }

            // maybe best to see what we can do right here?
            //  seems like one of the trickier parts now, at least to retrofit.

            const res_fns_stages = a[0](raise_stage_event);
            // do / call the functions object input processing here.
            //  input_functions_object
            //  input_ofns;

            // ofns means functons object.
            
            //const fns_stages = a[0](raise_stage_event);
            //console.log('fns_stages', fns_stages);
            /*
            
            num_stages = res_fns_stages.length;
            console.log('tf(res_fns_stages)', tf(res_fns_stages));
            console.log('num_stages', num_stages);
            throw 'stop';
            // should be an object

            res_fns_stages._raise_stage_event = raise_stage_event;
            */

            // and it returns a function.
            //  not into the function execution here?
            //  pass into it a raise_stage_event?

            console.log('Object.keys(res_fns_stages)', Object.keys(res_fns_stages));
            //let res_fns = 
            input_ofns(res_fns_stages);
            //return stages(res_fns_stages);
            //console.trace();
            //throw 'stages expected an array (may become more flexible in the future)';
        } else {

            // an object...
            //  will put that into the arr_stages.

            //arr_stages = [];
            //each()
            console.trace();
            throw 'stages expected an array or object (may become more flexible in the future)';
        }

    }
    let res_prepare = prepare();

    if (res_prepare) {
        return res_prepare;
    }

    const process = () => {
        console.log('3) process() num_stages', num_stages);
        //console.log('stages (setup) process');
        //console.trace();

        // Any way to access the obs res while processing the stages?
        // calling the normal function...

        const res = function() {
            const a2 = arguments, l2 = a2.length;
            const sig2 = get_a_sig(a2);
            // the args though... working differently on an arguments obj???
            //  we have an args obj the first time its called.

            let next_apply_args = a2.length === 0 ? undefined : a2;
            // seems to work right now???
            //  probably need to apply the arguments obect rather than call.

            // apply these args instead?
            //  not so sure.

            // if it's an arguments object with length 0....
            //  how to check for this?
            // args obs can be treated as an array at times.
            //  need to be careful of course, but make the system more error-resistant too.

            //console.log('next_apply_args', next_apply_args);
            //console.trace();
            //throw 'stop';

            // parse stages to array to start with....
            //  may get / gather some data on the stages' data types?
            // and end stage function?
            //  returning the stage result
            //   and other data about how long the stage takes etc?
            //   

            // observable stage complete event makes sense.
            //  observable's getting a much larger API now.
            //   lets hope its still fast.

            // always need to await the stages?
            // other possible return types?

            // Being able to access the return data...
            //  could be a little difficult from the staged function definition.
            // want to be able to raise a result recieved event within the code.
            //  need to improve the API of stages itself.
            //   The inner stages function call seems like an important place for this regarding 2 way data flow possibilities.
            //   So it will be very much about an inner function call?
            //    Rejig the way the params are set up?
            ///    Or create an Evented_Class rather than a function?
            //      Or local variable and function trick, if it works?

            // More advanced API in the stages function.
            //  will provide a raise function.
            //   raises an event on the result object.

            console.log('pre return stages obs');
            return observable((next, complete, error, status, log, stage) => {
            //return observable((next, complete, error, status, log, begin_stage, stage_complete) => {
                // though stages are supported in obs, its the stages function that provides the syntactic sugar for it.
                //  took a day practically to work that one out.

                // the functions inside could / will be asyncronous.
                //  not necessarily.
    
                // so we tell if we are given a promise / async function / and execute it accordingly.
                //  want to tell if any of the internal functions are observable.
    
                // custom loop system.
                //  process_next
    
                let c = 0;
                let _last_stage_res;

                // _raise_stage_event???
                /*
                console.log('assigned _raise_stage_event');
                _raise_stage_event = (name, evt) => {
                    console.log('experimental _raise_stage_event');

                    // but this could be assigned elsewhere.
                    //  within the stage execution.
                    //   so the system will know the stage name anyway.

                    // Need clearer definitions of sequence
                    //  Functions being executed
                    //  Functions being processed

                    // stage-exec-complete
                    // stage-io-complete
                    
                    // stage-complete is ambiguous
                    //  remove it for the moment?
                    //  maybe it makes sense for when a stage has stopped doing everything, but it's not so clear.
                    //   stage-io-complete makes sense
                    //   stage-exec-complete makes sense.

                    // Possibly return each stage as an Evented_Class?
                    //  Or we pass all stage events through, and can pick them out based on stage name / index?
                    
                    // At times we need to be certain about if we are talking about stage execution, stage input, or stage output.
                }
                */
                // want to assign the raise stage event function within the stage processing.

                // Stage events concerning input processing / promise awaiting?
                //  Getting the timings of these would help.
                // Knowing what happened for stage preparation would be useful data to report.

                // before processing the next stage....

                // an array of the function args at each stage?
                //  should be what gets returned by the previous stage in many cases.
                const process_next = () => {
                    console.log('process_next c:', c);
                    console.log('num_stages', num_stages);
                    //console.log('');

                    // Using the new Observable Stage API.
                    //console.log('l', l);

                    // better check to see if we have a next stage.
                    const have_next_stage = !!arr_stages[c];
                    //console.log('have_next_stage', have_next_stage);
                    // will be best for this to (just) treat how results are processed.
                    // maybe have async / flow control here to process the stage
                    //  then assess if there is a next stage to send it to.
                    const ec_stage_api = new Evented_Class();

                    // a version that handles substages too.
                    //  a stage can have its own pre, main and post, with the pre and post being added automatically.







                    const raise_stage_event = (name, evt) => {
                        // name overwriting?

                        // post-data-out
                        //  substage_name = 'post'
                        //  noun = 'data'
                        //  verb = 'out'    / complete




                        


                        // stage_name, substage_name

                        const obj = {
                            'name': name
                        }
                        Object.assign(obj, evt);
                        ec_stage_api.raise('stage_event', obj);
                        // prepare?
                    }
    
                    if (have_next_stage) {
                        // get the result
                        //  is it an unresolved promise?
                        //  is it an observable
                        //   rxjs?
                        
                        // _raise_stage_event

                        //  assigning this means that the higher level code (running in each stage) can raise stage events.
                        //   Maybe raise events on the result obs?
                        //   Maybe have direct access to the result obs?

                        // Want to provide an API with the minimal amount of typing / uncompressing non-local variables.

                        //  Much of this will be possible using many local variables and not something.a_property.the_next_property_with_a_long_name.
                        //   Want the code here and in the provided APIs to compress very well.

                        const stage_name = arr_stages[c][0];
                        const fn_stage = arr_stages[c][1];
                        _raise_stage_event = raise_stage_event;
                        // Could work this way :)

                        //  sending it to the closure works...

                        stage(stage_name, ec_stage_api);

                        // then there are stage events that can be called by the higher level code.
                        //  Goes back through the stage API.
                        //   And it keeps the correct stage name.
                        //    Think that needs to be done within a closure.
                        //     Need to be careful about long-running stages.
                        //    Even stages that run after returning their result.

                        // assignment does not seem to work properly now.
                        
                        //_raise_stage_event = raise_stage_event;

                        // io_byte_ratio will certainly be a useful reading for some stages
                        //  such as JPEG as well.
                        //  will be interesting to measure the streams without needing much extra coding.

                        //

                        // Lets see if these stage events get hooked up from the (dl) function definition.


                        // The stage could execute while still waiting for input.
                        //  So an input-complete time will help too.

                        // ms_input_complete.
                        //  .ms?
                        //  .timings?   - a timings API too?
                        //  not yet. just record some important measurements.

                        // ms_io_taken
                        //  time from the start of the input to the end of the output
                        

                        // Will definitely have a useful collection of measurements for analysing function performance.
                        //  The application automatically benchmarking itself (and interactions with external APIs) will be very useful in places.
                        //  The app can adapt to the conditions it operates under. Including network conditions, relative speed / reliability of other machines / APIs.

                        // no, pre exec seems OK here.
                        // nope, just the alerting / events fn.
                        
                        //  events set up quite early it seems
                        //   but do want arrange params events.

                        // but the stage itself could be an observable.
                        //  this pre and post exec is probably useful for measuring timing data.
                        //   how much sync type the fn takes. how much async time.

                        // ms_exec?
                        //  ms_exec_taken?
                        //  measuring how long the exec function takes to call.
                        //   its probably not long. is it worth measuring?
                        //   possibly some stages do have significant sync time, such as JSON parsing.

                        // call the obs stage fn

                        // stages of a stage :)
                        //  init?
                        //  

                        // when to call the stage event?
                        //  when we have the result object.
                        //  that may be an incomplete result or promise

                        // stage event is just to say what stage we are beginning now.

                        //begin_stage(stage_name);

                        //console.log('stage_name', stage_name);
                        //console.log('fn_stage', fn_stage);
    
                        //const stage_res = fn_stage.apply(this, next_apply_args);

                        // if c is 0 then apply it with the args obj?
                        //  because after a function runs, the next args is the result object.
                        //   simple, single object passing.
                        //    may make for an easy and convenient data pipeline / flow.

                        // its just a single arg.
                        let stage_res;

                        //console.log('stage_name', stage_name);
                        //console.log('fn_stage', fn_stage);


                        // This looks like the place to possibly apply a param transformation.

                        //  mfp could do param validation?
                        //  or we get the allowed params from the function before calling it.
                        //   use those for param validation.
                        

                        // pre stage call parameter transformations.
                        //  while this could be in OFP, want something to work here (as well?)
                        
                        // R readable stream to B buffer
                        //  chunking / buffering.

                        // buffer from readable stream?
                        //  read stream to buffer etc.

                        // still need simple transformation function (expected async)

                        // fn_stage.validate_args(next_apply_args);

                        // resolving async types such as promises before calling a stage makes the most sense.
                        //  means the stage before has actually completed.
                        //  makes most sense in terms of program flow.

                        // prepare function?
                        // an execute stage function?

                        // use some kind of asyncronous poly fn wrapper?

                        //  want a simple system for promises here.
                        //  and for readable streams.

                        //  some functions will accept R, some B, some O.
                        //   accepting P is less useful probably. automate it?

                        // can have a map of transformations here.

                        //  look at what the stage accepts?
                        //   tests and example on viewing mfp fn param info...

                        //console.log('fn_stage.map_sigs', fn_stage.map_sigs);
                        // and the args / type of args we are about to supply.

                        //console.log('next_apply_args', next_apply_args);

                        let dsargs = deep_sig(next_apply_args);
                        // 
                        //console.log('dsargs', dsargs);

                        let fn_ready_args;
                        const monitor_post_output_readable_stream = (rs) => {
                            // output-transform data
                            //  or just all it the post substage?
                            // ok, need to get this recording the size
                            // raising 'post-data-out'
                            rs.on('data', data => {
                                // and readable stream output data too.

                                // input_data function?
                                //  makes sense.
                                //  for monitoring a readable stream.

                                console.log('pre post-data-out raise_stage_event ' + stage_name);

                                raise_stage_event('post-data-out', {
                                    data: data
                                });

                                //chunks.push(data);
                            });
                            rs.on('end', () => {
                                // raise the stage complete at a different time. ???

                                // monitoring / length recording / events?
                                //exec_fn();
                            });
                            rs.on('error', err => {
                                //console.log('error reading stream for param transformation in stages()');
                                //error(err);
                            });
                        }

                        // not for the last fn in the stages list.
                        const exec_fn = () => {


                            console.log();
                            console.log('calling exec_fn ' + stage_name);
                            console.log();

                            // then need to also monitor post processing readable streams too.
                            // two outputs to consider here:
                            //  main output
                            //  post processing output (run on what the function returns)
                            //   eg promise that returns a readable stream.

                            // best to resolve the promise here?
                            //  definitely seems best when considering the stages of a function.
                            // stage_part?

                            // are we dealing with the output post processing / transformation? or just the regular main output?

                            // monitor_main_output_observable
                            const monitor_main_output_observable = obs => {
                                obs.on('next', data => {
                                    // and readable stream output data too.
    
                                    // input_data function?
                                    //  makes sense.
                                    //  for monitoring a readable stream.
    
                                    raise_stage_event('main-data-out', {
                                        data: data
                                    });
    
                                    //chunks.push(data);
                                });
                                obs.on('complete', complete_data => {
                                    // obs can dump all its data at once at the end.
                                    const evt = {};
                                    if (complete_data) evt.data = complete_data;

                                    //  complete is the sub-sub-stage?
                                    // substage: main, noun: data, out-complete?

                                    // substage: pre / main / post
                                    //  substage for running the function?

                                    // subsubstage: input / output
                                    //  part? substage part?  input, main, output
                                    //   ie there is the 

                                    // event_name: complete


                                    // definitely need to handle the io data events.
                                    // data-complete?

                                    // could get into a lot of granularity.
                                    //  need to get this granularity right, in the correct abstraction.
                                    //

                                    // noun such as 'data'?
                                    // subsubsubstage: complete
                                    //  event name?
                                    // 

                                    // status events for the substages make a lot of sense.
                                    //  

                                    // stage, substage, status?, event?
                                    //  event could be a status event.
                                    //  event could be a data event.
                                    // status: 

                                    // for the moment, status (change) events are the most useful.

                                    // different stages
                                    //  different parts / substages of those stages
                                    //   events for those substages....
                                    //    eg data-complete?
                                    //     eg data-in, data-out

                                    // give status of any stage
                                    //  suvh as moving between parts
                                    
                                    // then status of parts?
                                    //  or further events for stage parts would be possible.

                                    // 


                                    // substage: main, substage part: output, noun: data(stream), status: complete




                                    raise_stage_event('main-data-out-complete', evt);

                                    /*

                                    raise_stage_event('output-end', {
                                        //data: data
                                    });

                                    // default name with observable anyway.
                                    //  look for output end too / instead?
                                    //   always use output-complete as standard.
                                    raise_stage_event('output-complete', {
                                        //data: data
                                        sig: 'R'
                                    });
                                    */

                                    // only complete once post-output is complete?
                                    //  main-complete event?

                                    //  pre-complete etc
                                    //  post-complete?

                                    // no, don't think stage is necessarily complete either.
                                    //  but the readable stream returned by its main part is complete.

                                    /*

                                    console.log('--- CONSIDER CHANGING ---');
                                    raise_stage_event('complete', {
                                        //data: data
                                    });
                                    */
    
                                    // monitoring / length recording / events?
                                    //exec_fn();
                                });
                                obs.on('error', err => {
                                    //console.log('error reading stream for param transformation in stages()');
                                    //error(err);
                                });
                            }

                            const monitor_main_output_readable_stream = rs => {

                                rs.on('data', data => {
                                    // and readable stream output data too.
    
                                    // input_data function?
                                    //  makes sense.
                                    //  for monitoring a readable stream.

                                    //  a stage part event
                                    //   the main part
                                    //    output of the main part
                                    //     parts have stages? parts have sub-parts?
                                    //     subpart///


                                    // part of a substage is like the direction
                                    //  input, main???, output

                                    // may be best to treat the input an output arg measurement of any function call within its own function 

                                    // stage,      substage,   part,      subpart
                                    // download,   main,       output,    data(stream event)

                                    // yes, making a function io monitoring function system makes a lot of sense
                                    //  as well as function io transformation.

                                    // don't see the need for all of that within stages.
                                    //  make the monitoring abstraction
                                    //   then use that monitoring abstraction within obs and stages
                                    //   also use function call transformation within stages
                                    //    with custom rules set up.






                                    //    data-out is the event name?
                                    //     


    
                                    raise_stage_event('main-data-out', {
                                        data: data
                                    });
    
                                    //chunks.push(data);
                                });
                                rs.on('end', () => {
                                    //fn_ready_args = Buffer.concat(chunks);
    
                                    // send it all?
                                    //  not sure if useful and secure by default. Probably is secure as can run function anyway.
    
                                    // would provide an API for getting intermediate data throughout an algorithm.
                                    // exec-data-complete?
                                    // exec-data-out-complete?

                                    //  does not contain the data here. not been buffering.

                                    raise_stage_event('main-data-out-complete', {});

                                    /*

                                    raise_stage_event('output-end', {
                                        //data: data
                                    });

                                    // default name with observable anyway.
                                    //  look for output end too / instead?
                                    //   always use output-complete as standard.
                                    raise_stage_event('output-complete', {
                                        //data: data
                                        sig: 'R'
                                    });
                                    */

                                    // only complete once post-output is complete?
                                    //  main-complete event?

                                    //  pre-complete etc
                                    //  post-complete?

                                    // no, don't think stage is necessarily complete either.
                                    //  but the readable stream returned by its main part is complete.

                                    /*

                                    console.log('--- CONSIDER CHANGING ---');
                                    raise_stage_event('complete', {
                                        //data: data
                                    });
                                    */
    
                                    // monitoring / length recording / events?
                                    //exec_fn();
                                });
                                rs.on('error', err => {
                                    //console.log('error reading stream for param transformation in stages()');
                                    //error(err);
                                });
                            }

                            const monitor_main_input_readable_stream = rs => {
                                rs.on('data', data => {
                                    raise_stage_event('main-data-in', {
                                        data: data
                                    });
                                });
                                rs.on('end', () => {

                                    raise_stage_event('main-data-in-complete', {});

                                    /*
                                    raise_stage_event('output-end', {
                                        //data: data
                                    });
                                    raise_stage_event('output-complete', {
                                        //data: data
                                        sig: 'R'
                                    });
                                    */

                                    /*

                                    raise_stage_event('complete', {
                                        //data: data
                                    });
                                    */
                                });
                                rs.on('error', err => {
                                    //console.log('error reading stream for param transformation in stages()');
                                    //error(err);
                                });
                            }

                            //console.log('exec fn stage stage_name', stage_name);
                            // better handling of the last stage here?
                            //console.log('c', c);

                            // special case for when fn_ready_args is an R?

                            // isa function?
                            // isa(fn_ready_args, 'R')?
                            // isa(fn_ready_args, 'R', fn_yes, fn_no)?
                            //  tm for type matching?
                            //console.log('dsargs', dsargs);
                            const given_args_sig = deep_sig(fn_ready_args);
                            if (given_args_sig === 'R') monitor_main_input_readable_stream(fn_ready_args);
                            // only monitoring of input 
                            // readable stream in normal mode always provides a buffer. sometimes other types though.

                            /*

                            if (given_args_sig === 'R') {
                                const rs_input = fn_ready_args;
                                let l_data = 0;
                                console.log('!!rs_input', !!rs_input);
                                rs_input.on('data', assumed_buf => {
                                    l_data += assumed_buf.length;
                                });
                                rs_input.on('complete', () => {
                                    console.log('l_data', l_data);
                                });
                            }
                            */

                            // don't think it works here.... ???
                            //raise_stage_event('main-pre');

                            // need some way to have the event means.
                            // definitely want pre-exec here...

                            //  seems like it's working.
                            //   signature it's being executed with
                            // however, want events during the params rearrangement / transformation / waiting.
                            // exec with the types?

                            //  after having processed the input, if necessary.

                            // and the object itself? call it arg? args?

                            // input_args?
                            //  arg?

                            // exec or main???

                            raise_stage_event('main-pre', {
                                sig: given_args_sig,
                                args: fn_ready_args
                            });

                            if (c === 0) {
                                stage_res = fn_stage.apply(this, fn_ready_args);
                            } else {
                                stage_res = fn_stage.call(this, fn_ready_args);
                            }
                            const tsr = deep_sig(stage_res); //ssr?
                            // or the sig of the stage_res?
                            //  deep_sig
                            //   deep_sig could work with duck typing reference.
                            //    could use an object discovery tree for fast object detailed type discovery.
                            //     custom categories in a tree, such as for strings, or below that, such as types of URLs.

                            // an event / pre / post events etc for fixing the params?
                            //  could be useful within the observable.

                            // Looks like we are getting some reasonable time measurements now too, fo en exec time.
                            //  not quite yet...

                            // worth sending the result through?
                            //  probably...
                            //  

                            // exec-start? exec-about-to-start?
                            // exec-complete?

                            raise_stage_event('main-call-complete', {
                                res: stage_res,
                                sig: tsr
                            });
                            // See below - this gets done.
                            /*
                            if (tsr === 'R') {
                                monitor_main_output_readable_stream(stage_res);
                            }
                            */
    
                            //const stage_res = fn_stage.call(this, next_apply_args);
                            //console.log('stage_res', stage_res);
    
                            // luckily we have the stage_num, c.
    
                            // // and the sig it's getting called with?
                            // not sig.
                            //  stage call type.
    
                            //const stage_call_sig = get_a_sig(next_apply_args);
                            //console.log('stage_call_sig', stage_call_sig);
    
                            //const stage_call_type = tf(fn_ready_args);

                            //console.log('stage_call_type', stage_call_type);
                            // ok with observable results here.
                            //   promises not so good.
                            //    stage function needs to be able to listen to promise resolution events.
                            //  'evented function'???
    
                            // make an Event_Listener to send the promise events through?
                            
                            // only if there is a promise being returned?
    
                            //const ec_promise_resolutions = new Evented_Class();
                            
                            // using different stage (monitoring) API now.

                            //stage(stage_name, stage_res, c, stage_call_type, ec_promise_resolutions);
                            _last_stage_res = stage_res;
                            // won't actually be complete...
    
                            //  maybe just a 'stage' event?
                            //   give it the stage_res.
                            // stage_complete event?
                            
                            // and pre-stage events?
    
                            // checking the type of the stage res.
                            // have stage result object event?
                            //  could make sense for more general purpose monitoring / instrumentation.

                            // stage have-result

                            // stage could do further result awaiting, transformation, monitoring etc

                            // want to know when any stage is complete.
                            //  including the io...

                            // need simple measurements for each stage in the function.


                            // need to get a view of the functions that is separtate from their pre-processing etc...
                            //  however is in sync with the pre-processing etc.
                            //  it is going on below the surface.

                            
                            // input start and complete whenever there is any input?
                            //  not just streaming data

                            

                            // input-data-part?
                            // output-data-part?



                            // level 1 api...

                            // for the whole function call.

                            // input-start
                            // (input-data)
                            // input-complete

                            // output-start
                            // (output-data)
                            // output-complete


                            // .io?
                            // .stages[x].io

                            // could subscribe to the whole io events stream
                            //  then use that, with an assistace function.




                            // subscribing to a .io events object?
                            //  .io.on(...)
                            //  .stages.io?


                            // 





                            // for each stage...   (is this level 2??)

                            // input-start
                            // (input-data)
                            // input-complete

                            // output-start
                            // (output-data)
                            // output-complete






                            // result...
                            //  could be a promise.

                            // the result may not be the output.
                            //  as in could be a promise.
                            

                            // result_sig makes sense.
                            //  possibly different to output_sig


                            // result will go through on the post-exec
                            /*

                            raise_stage_event('result', {
                                't': tsr,
                                result: stage_res
                            });

                            */
    
                            //console.log('*** tsr', tsr);

                            // give the type of each stage result?
                            //  that will go within instrumentation.

                            //console.log('stage_res', stage_res);
    
                            // and when it's the last stage, and we get a promise back...
                            //  need to get the result. can't send the promise through like before.
    
                            // o or p...
    
                            // with an observable, we need to decide what info to send back and where / what to log.
    
                            //  this is a more definitive system of sub-observables.
    
                            // consider how to keep the interface very simple here where possible.
                            //  we can give easy access to the observable.
                            //   that access could be ignored
                            //   then we use the result.
    
                            //console.log('tsr', tsr);
    
                            // see what the parameter(s) being accepted by the next function is / are.
    
                            // want to (be able to) pipe data
                            //  or have one function use a previous function's observable.
    
                            // want to be able to use stream transformers easily enough.
                            //  a function could return a readable stream rather than an observable.
                            

                            // send observables through like normal.
                            //  later fns will be designed to take an obs as input
                            //   even with input transform if necessary.

                            // no need for monitor_post_input_readable_stream it seems


                            //  readable streams always acceptable outputs?
                            //  promises never acceptable?

                            // sending the observable through to the next function makes sense.

                            // postprocessing and continue...


                            //  Don't want to postprocess observables?
                            //   Send them through
                            //   Measuring them could help....

                            // monitor observables though.
                            //  could measure their output rate.



                            if (tsr === 'O') {
                                next_apply_args = _last_stage_res;
                                monitor_main_output_observable(next_apply_args);
                                c++;
                                process_next();
                            } else if (tsr === 'R') {
                                next_apply_args = _last_stage_res;
                                console.log('pre monitor_main_output_readable_stream');
                                console.trace();
                                //throw 'stop';
                                monitor_main_output_readable_stream(next_apply_args);
                                // output stream events

                                // stage completed before processing completed?
                                //  seems possible.
                                //   stage_io_complete?
                                //    stage_async_complete?
                                //    stage_fully_complete?

                                // 
                                // only complete when the io is done?
                                //  makes sense really.

                                c++;
                                process_next();
                                //c++;
                                //complete(next_apply_args);
                                /*
                                next_apply_args.then(res => {
                                    //console.log('prom resolved');
                                    //next_apply_args = res;
                                    c++;
                                    //process_next();
                                    complete(res);
                                }, err => {
                                    console.log('err', err);
                                    console.trace();
                                    throw 'last stage promise error NYI';
    
                                });
                                */
    
                            } else if (tsr === 'p') {
                                //console.log('we have a promise');

                                // no need to await promises on output?
                                //  or is worth it.
                                // don't get a streaming benefit from passing promises through (probably)


                                // await-result
                                // pre-await-result?

                                // await-result-start
                                // await-result-complete


                                // will help with having detailed timings / instrumentation of what the stage processor does.
                                //  better than console logging in some ways.
                                //console.log('c', c);
                                //console.log('num_stages', num_stages);
    
                                // the stage list...?
    
                                //console.log('stage_res', stage_res);
                                // get a promise that doesn't resolve?
                                //  need to work back through this.
    
                                //console.log('code for promise resolution below...');
                                //console.trace();
    
                                //console.log('is promise');
    
                                // any stage has an error, cancel the whole thing???
                                //  could set different error mode?

                                // the sig of what is being transformed.
                                //  sig, res_sig?
                                //  just sig for the moment.
                                //  

                                // want to give it in the input args too. stage_res
                                // 
                                // post-output start


                                raise_stage_event('post-start', {
                                    sig_from: tsr,
                                    args: stage_res
                                });
    
                                stage_res.then(res => {
                                    //console.log('prom resolved');
                                    next_apply_args = res;
                                    c++;
                                    const rsig = deep_sig(res);
                                    raise_stage_event('post-complete', {
                                        sig_to: rsig
                                    });


                                    console.log('stage_name', stage_name);
                                    console.log('rsig', rsig);

                                    //console.trace();
                                    //throw 'stop';
                                    
                                    if (rsig === 'R') monitor_post_output_readable_stream(res);
                                    

                                    /*
                                    raise_stage_event('output-complete', {
                                        //data: data
                                        sig: rsig
                                    });
                                    
                                    raise_stage_event('complete', {
                                        //data: data
                                    });
                                    */
                                    process_next();
                                }, err => {
                                    console.log('err', err);
                                    console.trace();
                                    throw 'stage promise error NYI';
    
                                });
    
                            } else {
                                next_apply_args = _last_stage_res;
                                c++;

                                // output complete?

                                raise_stage_event('output-complete', {
                                    //data: data
                                    sig: deep_sig(_last_stage_res)
                                });
                                
                                raise_stage_event('complete', {
                                    //data: data
                                });
                                process_next();
                            }
                        }

                        // not executing immediately?

                        // pre verify input???
                        //  input processing...?

                        // pre await input?

                        // check sigs
                        // process them
                        // check and transform sigs
                        // validate sig
                        // transform input param(s)
                        // execute / start
                        //  intermediate / next / data results
                        // complete

                        // Transformation of input params could provide events that can be monitored.

                        // signature validation stage.
                        //  make an event

                        if (!fn_stage.map_sigs) {
                            // no input sig validation.
                            fn_ready_args = next_apply_args;
                            // have the args.
                            //  input ready?
                            //  look at the input sig?
                            // Pre exec really....

                            // no, this is not saying the input is complete.
                            //  there could be an input stream.

                            // it's really pre-exec.

                            // input-complete

                            /*
                            raise_stage_event('input-complete', {
                                sig: dsargs
                            });
                            */
                            exec_fn();
                        } else if (fn_stage.map_sigs[dsargs]) {
                            // again input ready, send the input args...

                            // not really using input validate.
                            //  assuming valid unless there is an error

                            /*
                            raise_stage_event('input-validate', {
                                sig: dsargs,
                                valid: true,
                                value: true
                            });
                            */

                            fn_ready_args = next_apply_args;

                            /*

                            raise_stage_event('input-complete', {
                                sig: dsargs
                            });

                            */
                            exec_fn();
                        } else {
                            // there are some specific transformations...
                            //  maybe could use a promise from a lookup here.

                            // right now most interested in R readable_stream to B buffer.

                            // This part could raise events
                            //  during input args data transformation.

                            // Needing to wait for a readable stream to arrive.
                            //  data rate API?

                            /*

                            raise_stage_event('input-validate', {
                                sig: dsargs,
                                valid: false,
                                value: false
                            });
                            */

                            // but then do automatic input transformation.
                            //  or attempt it.

                            // input transform event?
                            //  pre function exec param tranformation or waiting?

                            // just badly need to get this stuff done and the API ready!!!

                            // stage events for input-transform

                            // pre input transform

                            // post input transsform

                            //  and log these as stage events.


                            // OK, post processing instead, for the moment.
                            //  in terms of getting promises.

                            // input preprocessing transformation.
                            if (dsargs === 'R' && fn_stage.map_sigs['B']) {
                                // input-transform-start

                                // and the object it comes from?
                                //  may be useful to pass.
                                
                                // pre stage in

                                // set the type here.
                                raise_stage_event('pre-start', {
                                    'sig_from': 'R',
                                    'sig_to': 'B',
                                    'args': next_apply_args
                                });

                                const rs = next_apply_args;
                                const chunks = [];

                                // maybe data-in-start will make for nicer programming. not sure.

                                // pre-data-in-start?

                                rs.on('data', data => {

                                    // will itself do the input-start call.


                                    // and readable stream output data too.

                                    // input_data function?
                                    //  makes sense.
                                    //  for monitoring a readable stream.

                                    // recieving input data...

                                    // input-transform-input?
                                    //  there is no input-transform-output data in this case.
                                    //  input-transform-input-date
                                    //  input-transform-output-data
                                    //   makes sense for streams.
                                    //    potentially we will use such functions / data recognition in such detail here.

                                    // input transformation data?

                                    // input transform input data
                                    //  

                                    // sig_data?
                                    //  check it's a buffer?
                                    //   would it slow down too much?


                                    raise_stage_event('pre-data-in', {
                                        data: data
                                    });

                                    chunks.push(data);
                                });
                                rs.on('end', () => {
                                    fn_ready_args = Buffer.concat(chunks);
                                    // send it all?
                                    //  not sure if useful and secure by default. Probably is secure as can run function anyway.

                                    // would provide an API for getting intermediate data throughout an algorithm.


                                    // It's not really the normal input
                                    //  it's post-input-transform.

                                    // input processing timings too.
                                    //  would mean waiting for input to arrive in some cases.

                                    // eg 'pre-complete'
                                    //  then will be in the ms results too.
                                    /*
                                    raise_stage_event('input-end', {
                                        //data: data
                                    });
                                    
                                    // because the input to the stage is really a buffer.
                                    //  the read stream finishes before the fn(buf) starts.

                                    raise_stage_event('input-complete', {
                                        sig: 'B'
                                    });
                                    */

                                    // Be really precise with the names, including event names.
                                    //  Then maybe have abbreviations done in the build.
                                    //   See about babel and typescript inner workings. Also my own search and replace systems.

                                    // amount of data?

                                    // input-transform-complete
                                    //  no 'post'....

                                    // args and res? not from and too???
                                    //  consider naming conventions a bit later, get it working now.

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

                                    /*
                                    raise_stage_event('post-input-transform', {
                                        'from': 'R',
                                        'to': 'B'
                                    });
                                    */

                                    // monitoring / length recording / events?
                                    exec_fn();
                                });
                                rs.on('error', err => {
                                    console.log('error reading stream for param transformation in stages()');
                                    error(err);
                                });
                            } else {
                                console.log('dsargs', dsargs);


                                console.trace();
                                throw 'No fn preprocessing param transformation available';
                            }
                        }
                        // argument transformation prior to calling function.
                        //  a few simple transformations I expect.
                        //  later see about instrumentation such as stream reading rate.
                        //   having it here makes sense (in fnl stages).

                        // data, end, error

                        // R to B

                        // P to whatever?

                        // maybe not like this...

                        //  not having the transformation defined right here, but using flow control here to get it done.
                        //   or always have async prepare stage?

                        // Definitely seems solvable this way.
                        /*
                        const arg_transformations = {
                            R: {
                                B: (readable_stream) => {

                                    // read the stream to a buffer.
                                    //  seems like this would have to return a promise.

                                }
                            }
                        }
                        */

                        // check for having a readable stream and being allowd a buffer.
                        // could check for single transformations that would work in the if logic here instead.
                        //  promise to whatever then try it
                        // readable stream to buffer

                        // handled by prev stage result processing I think:
                        // promise to whatever.???
                        //  observable???
                        
                        // first fn called / applied differently.
                        //  more initial param config instead? or rule that a stage just passes one param, the return from the previous one.

                        
                    } else {
                        console.log('process_next reached completion. may still need to do some output transformation.');
                        const tsr = tf(next_apply_args);
                        console.log('tsr', tsr);
                        // complete with the result of the last stage.

                        // may need to wait for the last stage.

                        // could be an obs or prom

                        if (tsr === 'O') {
                            next_apply_args.on('error', err => {
                                console.log('err', err);
                                console.trace();
                                throw 'last stage obs error NYI';
                            });

                            // not sure we still have raise_stage_event and it still works?

                            raise_stage_event('post-start', {
                                sig_from: tsr,
                                args: next_apply_args
                            });

                            // and ongoing stage next data updates?

                            next_apply_args.on('complete', complete_data => {
                                //next_apply_args = complete_data;
                                c++;
                                //process_next();

                                // don't supply the data here?
                                // This is post-processing on the output of the stage.
                                //  Last stage is a special case where it waits for an observable.

                                // report_post_output???

                                raise_stage_event('post-complete', {
                                    sig_from: tsr,
                                    args: next_apply_args
                                });
                                complete(complete_data);
                            });
                            // next_apply_args = result from the observable on complete.

                        } else if (tsr === 'p') {
                            //console.log('is promise');
                            // any stage has an error, cancel the whole thing???
                            //  could set different error mode?

                            next_apply_args.then(res => {
                                //console.log('prom resolved');
                                //next_apply_args = res;
                                c++;
                                //process_next();
                                //raise_stage_event('complete', {
                                //    //data: data
                                //});
                                complete(res);
                            }, err => {
                                console.log('err', err);
                                console.trace();
                                throw 'last stage promise error NYI';

                            });
                        } else if (tsr === 'R') {
                            const rs = next_apply_args;
                            monitor_post_output_readable_stream(rs);
                            c++;
                            //raise_stage_event('complete', {
                            //    //data: data
                            //});
                            complete(next_apply_args);
                        } else {
                            // readable stream - monitor / send output data
                            //  no post-processing here.
                            //next_apply_args = _last_stage_res;
                            c++;
                            //raise_stage_event('complete', {
                            //    //data: data
                            //});
                            // complete for the whole obs.
                            complete(next_apply_args);
                            //process_next();
                        }
                        //complete(_last_stage_res);
                    }
                }
                process_next();
            });
            // looks like dl is working nicely in stages now.
            //  interested in getting measurements working.
            //  stage time logging.
            // can see about ofp plurals for dl as well.
            //  with max simultaneous.
            //   lets remove and be more precise about some logging now.
            //    new log features, want to try them too.
            //     logging status changes.
            //    logging timings and data type verifications
        }
        res.is_staged = true;
        // or it returns a function?
        res.return_type = 'observable'; //???should already be.
        return res;
    }
    return process();
})

// output_complete - final output for the stage.
//  either main part or post-processing.

//  main-output-complete
//  post-output-complete
//  output-complete - whichever of the above two is later.
//   always gets called.


// need to finish off single function staged call:
//  finish measurements of all parts
//   calculate rate
//   and io ratio

// measuring the overall rate is important
//  still need to do more work on getting the data sizes for the stages.

// Stages
//  will return an observable
//   so yes, use mfp to include the return type at least.
//   only accept an array or an object?
//    only accept array for the moment.
//    must be an array of functions.
//     more type checking / grammar work needed?

// An observable that gives info about the various stages inside it....

module.exports = {
    'observable': observable,
    'nce': nce,
    'obs': observable,
    'obsalias': obsalias,
    'obscollect': obscollect,
    'obsfilter': obsfilter,
    'obspool': obspool,
    'seq': seq,
    'sequence': seq,
    'sig_obs_or_cb': sig_obs_or_cb,
    'cb_to_prom_or_cb': cb_to_prom_or_cb,
    'prom_or_cb': prom_or_cb,
    'prom': prom,
    'obs_or_cb': obs_or_cb,
    'unpage': unpage,
    'is_obs': is_obs,
    'is_prom': is_prom,
    'obs_prom_arr_item': obs_prom_arr_item,
    'stages': stages
}

if (require.main === module) {
    // Could return its stop function.
    //  Use its next, complete, error functions in one closure
    //  Get back its stop, pause, resume functions as the result in an array

    /*
    // Keeping this longer form -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

    let data_source_interval_mult = (next, complete, error) => {
        ...
        return [stop, pause, resume];
    }
    // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~

    // Other code with a data_source functionality?
    // Seems like a fairly good standad for making an observable.

    let obs = observable(data_source_interval_mult);

    */
    // observables / data sources that apply to something else?
    //  anyway, can use this observable for the moment to improve some server code.

    // Data source - gets functions to call, returns functions.
    //  The observable manages that.

    // Maybe return a data_source itself? or the data source is simply a function being executed.
    // This looks like it could tidy up some server code.

    let obs = observable((next, complete, error) => {
        let c = 2;
        let paused = false;

        let stop = () => {
            clearInterval(ivl);
            complete();
        }

        let ivl = setInterval(() => {
            if (!paused) {
                let v = c * 2;
                //console.log('v', v);
                next({
                    'v': v
                });
                c++;
                if (c > 8) {
                    stop();
                }
            }

        }, 1000);

        return [stop, () => {
            paused = true;
        }, () => {
            paused = false;
        }];
    });

    /* .filter(data => {
        return data.v !== 8;
    }).filter(data => {
        return data.v % 3 !== 0;
    }); */

    // ok, this event listener works too.

    let test_obs = () => {
        obs.on('paused', () => console.log('* paused'));
        obs.on('resumed', () => console.log('* resumed'));
        obs.next(data => {
            console.log('data', data);
        });
    }
    //test_obs();

    let test_then = () => {
        (async () => {
            let res = await obs;
            console.log('awaited res', res);
        })();
    }
    //test_then();

    console.log('stages', stages);

    let test_split = () => {
        obs.on('paused', () => console.log('* paused'));
        obs.on('resumed', () => console.log('* resumed'));

        let [obs1, obs2] = obs.split(data => data.v % 3 === 0)

        obs1.on('next', data => console.log('obs1 data', data));
        obs2.on('next', data => console.log('obs2 data', data));
    }

    //test_split();

    let test_filter = () => {
        obs.filter(data => {
            return data.v !== 8;
        }).filter(data => {
            return data.v % 3 !== 0;
        });

        obs.next(data => {
            //console.log('data', data);
            if (data === 8) {
                obs.delay(5000);

                // works nicely here.
                // want listeners for the pause and resume events.
                // That would be convenient syntax

                obs.pause();
                console.log('paused');
                setTimeout(() => {
                    console.log('wait over');
                    obs.resume();
                }, 2000);

            }
        }).end(() => {
            console.log('end');
        })
    }
} else {

}