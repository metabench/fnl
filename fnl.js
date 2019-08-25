/*
    18/06/2019 - New version, will use io transform and measurement abstractions.


    21/06/2019 - Get it working (basically) using function io wrappers.
        Now need the abstractions for monitoring / stage monitoring / arg & param & res monitoring.


    // Also the initial arg?
    // For the moment, monitor the arguments between the stages.
    // Also the result arg.

    //  can monitor arrays too?
    // monitor_item(item, evt_monitoring => ())

    // The event callback system makes a lot of sense to use.







    // function monitoring


    // io transformations

    // monitoring the io transformations

    overall fn input = first stage fn input = first stage pre-processing input


    // Tracking where the same arguments are used?

    // Tracking execution stage - where the execution is between?



    // really want to know the input and output of each function call.


    //  arguments watcher?
    //  arguments info and watcher?


    // call a function on the args.
    //  gets the sig
    //  monitors any streams and observables.

    // observe_args?


    //  monitor-args?
    //   seems best as a callback function? or multi-callback function?
    //    event callback function.
    //     


    // Monitoring the args at various io / function call stages will be useful so we don't wind up monitoring the same arguments / io too many times.











*/



// Most likely will leave out a separate status() function wrapper.
//  Maybe that should be part of the normal observable?

// Anyway, need to have the monitoring and io transforms


// input to the whole function
// output to the whole function.


//  Monitoring of io transforms too....


// monitoring functions with stages, and output transformed stages:
//  do we need to monitor the same stream twice? 3 times?

// monitoring the variables involved is important.
//  output from one function is (often?) input to the next.

//  so monitoring the variables / parameters will mean that we have both the output of one part and input to the next.

//  see about just wrapping all of the functions with io_transform.
//   leave monitoring out of it for the moment.












const log = () => {};

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
const {each, tof, tf, mfp, deep_sig, clone, def} = lang;
const fn_io_transform = require('./fn-io-transform');


// Want rates and stage rates easily available in staged fn results.
//  Can have rates for various streams
//  For various transformations (2 streams?)

// calculating rates and ratios is nearner now.






const nce = (obs, next, complete, error) => {
    obs.on('next', next);
    obs.on('complete', complete);
    obs.on('error', error);
    return obs;
}


const monitor_item = require('./monitor-item');
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


// Obs has come on well for use in stages
// Could do with a bit more clarity about status feature.

// Will now make it raise .io complete when its not waiting for a readable stream (or other?)

// Having stages make a note that there is ongoing io?


// io.ongoing?

// a 'done' synonym / alias could work well.
//  done being more concise than 'complete'. Same / very similar meaning too.


// some kind of status saying io is ongoing?
//  not always having an io object?



// 


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
    
    if (sig === '[f]' || sig === '[f,u]') {
        _opts = {};
        _fn_inner = a[0];
    } else if (sig === '[f,o]') {
        _fn_inner = a[0];
        _opts = a[1];
    } else if (sig === '[o,f]') {
        _opts = a[0];
        _fn_inner = a[1];
    } else {
        console.log('sig', sig);
        console.trace();
        throw 'NYI';
    }


    // not on the specific function...?
    //  may be nice to have an obs_fn?
    //  




    

    const obs_res = ((opts, fn_inner) => {
        // get values from the opts....
        //  name option is becoming important now.
        // then this will need to return something.
        const ms_start = Date.now();
        // ms.abs, ms.rel
        const ms_since_start = () => Date.now() - ms_start;
        let res = new Evented_Class();
        const io = res.io = new Evented_Class();



        // io.ongoing?
        //  would be a decent place for that flag.

        // io.status?
        //  be able to tell / automatically tell when the status is complete.
        //   may be better there than the function's overall status
        //    io status being automatically set in function execution?
        //     in stages function execution?





        // Flagging whether we are waiting for io makes sense.
        //  Want to say the io is complete when the function call is totally complete.
        //  For the moment the .io complete event is what we'll use
        //   maybe it's not perfect.

        // .io complete event is important...
        //  want to detect cases where there is ongoing io.

        // maybe the complete event will also contain the/an io complete callback.

        // io complete will be the completion of the last uncomplete stage.
        //res.io = new Evented_Class();

        // Save res time?
        //  record res time
        //  record_res_ms
        // Absolute and relative timings 
        // Only have stages there when using stages???

        // not so sure about res.ms right now.
        //  changing the time that measurement works during staged functions.

        // probably not using .ms and .io for the moment.

        /*

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

        */
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
        /*
        const record_res_ms = (name) => {
            const now = Date.now();
            res.ms.abs[name] = now;
            res.ms.rel.start[name] = now - ms_start;
        }
        */

        let llog = [];
        let _status = 'init';
        
        //log('ms_start', ms_start);
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

        /*

        const stages_execution_info = [
            // any further execution info?
            // it could go here.
            // how many ms into the stages execution / since start.
            // anything about data type here?
            //[stage_number, stage_name, '', ms_start, 0]
            // leaving this init stage out for the moment.
        ];
        */

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
                log('str_status', str_status);
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


        // get rid of this and some other stage monitoring.
        //  it's going to be done with some other (slightly lower level) functions.


        //const stage = (stage_name, ec_stage_api) => {


        // another abstraction for dealing with function status, and its timing?
        //  function status could work well for pre, main, awaiting-result, post

        //  fn_status would be a nice and simple abstraction.
        //   can specify the status values.
        //    will understand simple works like 'pre', 'post', 'main'.
        //     status will be less sophisticated than stages.

        /*

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
        */

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

        /*
        Object.defineProperty(res, "stages_execution_info", {
            get: () => stages_execution_info//,
            //writable: false
        });
        */

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

        // More work / clarity on obs status?
        //  Want to get the doc website up first.

        Object.defineProperty(res, 'status', {
            get() {
                // Could clone it for security so it can't be changed
                return _status;
            }
        });

        // .ms and .io as a property?
        //  not doing that right now.

        // We call the inner function on each function call.
        //  This provides the closure.
        //  Could change fnl stages so that it calls function inner upon the function call.
        //   not just at the beginning?
        //    or not at the beginning?

        // Maybe better not to have the timeout when debugging / looking at the callstack.

        setTimeout(() => {
            [stop, pause, resume] = fn_inner(data => {
                // And could apply a filter here.
                //  Could apply a number of filters.
                let passes = true;

                // Maybe remove filtering?
                //  Or filtering here is more efficient?

                if (this.filters) {
                    for (let filter of this.filters) {
                        passes = filter(data);
                        if (!passes) break;
                    }
                }

                // check the type of what's bein returned here?
                // keep track of it?

                // meaning if we don't see any R objects (maybe some others) then there is no need to wait for anything to say that the obs is complete.
                //  special cases for identifying ongoing io?
                //   the function status makes a lot of sense there.

                // as does .io complete.

                if (passes) res.raise('next', data);
            }, last_data => {
                // The observable complete event
                //  Are we still waiting on any output?
                //   This is an important thing to know.
                //    Is this the final at least slightly tricky thing to solve?

                const tld = tf(last_data);
                //console.log('obs complete function called');
                //console.log('should now check if any io is still going. if not, raise io.complete');

                //console.log('tld', tld);
                //console.trace();


                // Give more thought towards if .io complete is the best way.
                //setImmediate(() => {
                //log('!!last_data', !!last_data);
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
                //record_res_ms('complete');
                const ms_complete = Date.now();

                res.ms_complete = ms_complete;
                res.ms_taken = ms_complete - ms_start;

                // ms_latency for consistency.
                //  only for staged functions so far?
                //  or could respond to the 'have-response' / 'response' / 'main-response' event.
                // listen for the main stage response?
                //  to begin with, want to build up more detailed stages data in the res.stages array.
                //res.ms.taken = res.ms.rel.start.complete;
                //res.ms_taken = ms_since_start();
                //res.ms_complete = Date.now();
                // and ms.taken is the relative measurement between start and complete.
                // ms complete is the absolute time measurement
                //  or ms_taken is better
                //log('res.ms_complete', res.ms_complete);

                if (tld !== 'u') {
                    // See if it's an (ongoing?) readable stream?
                    if (tld === 'R') {
                        // Can we see the stage or status of the R?
                        // listen for the complete event...?
                        // Need to put the last data inside a wrapper object?
                        // 
                        io.ongoing = true;
                        // Monitoring not standard within observable.
                        last_data.on('complete', () => {
                            io.ongoing = false;
                            io.raise('complete');
                        });
                    } else {
                        console.log('not an R, will raise complete and .io complete now');

                        res.raise('complete', last_data);
                        // io.complete = true?
                        // raise the io.complete event?
                        io.raise('complete');

                        // 
                        // Should be complete enough...?
                    }
                    
                } else {
                    res.raise('complete');
                }
                //});
            }, error => {
                res.raise('error', error);
            }, status, log) || [];

            // status before log!!!
    
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

            // is it still doing io there?
            //  need to be clever and clear about that.
            //  it's a bit of a complication, and solving it means that we will have a source of confusion in programming more solved.



            // an ongoing io flag that gets set somewhere would be useful?


            // More explicit way of recognising ongoing io?
            //  The dl function does that
            //  As do some of the stages
            //   But it is only when all the stages are over does io complete get called.





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
            //log('then');
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
                    //log('complete last', last);
                    //log('had_next', had_next);
                    //log('res_all', res_all);
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

    /*

    const _ = obs_res._ = {
        async: true,
        return_type: 'observable'
    }

    // Should be a nice improvement.

    console.log('observable create res._', obs_res._);
    console.trace();

    //throw 'stop';
    */

    return obs_res;
    // Looks like a decent and performent startup pattern here.
}

// but observable itself is a function. seems ok like this.
observable._ = {
    name: 'observable',
    return_type: 'observable',
    async: true
}

//observable.return_type = 'observable';
//observable.async = true;


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
        //log('!!complete', !!complete);
        //log('complete', complete);

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
    log('Object.keys(obs_like)', Object.keys(obs_like));
    const k = Object.keys(obs_like);
    // make a map from them...
    const km = get_truth_map_from_arr(k);
    log('km', km);

    if (km._events) {
        log('Object.keys(km._events)', Object.keys(km._events));
        log('obs_like._events', obs_like._events);
        log('obs_like._eventsCount', obs_like._eventsCount);
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
    //  or it's now f,a?
    //   be able to recognise an 'a' in a sig.
    //   would be useful for sig matching.
    //    also be able to give / use details inside an array.


    '[f,a]': (fn_obs, arr_params) => {
        log('[f,a]');
        log('arr_params', arr_params);
        //log('arguments', arguments);
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
    //log('obs_to_cb callback', callback);
    //console.trace();
    _obs.on('next', data => arr_all.push(data));
    _obs.on('error', err => callback(err));
    _obs.on('complete', last => {
        //log('arr_all.length ', arr_all.length);
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
            //log('callback', callback);
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
            //log('arr_data', arr_data);
            // Specialised processing for Command_Response_Message?
            // An unpage function would be nice there.
            //  or each_record
            // Unpage would make sense because it can be used here, it's generic.
            if ('unpaged' in arr_data) {
                let unpaged = arr_data.unpaged;
                for (let c = 0, l = unpaged.length; c < l; c++) {
                    //log('unpaged[c]', unpaged[c]);
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
    //log('obs_or_cb callback', callback);
    if (callback) {
        //log('is cb');
        //log('has obs', obs);
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
        //log('its a cb');
        a2 = Array.prototype.slice.call(a, 0, -1);
        callback = a[a.length - 1];
        //using_cb = true;
    } else if (typeof a[a.length - 1] === 'undefined') {
        // its a callback
        //log('its a cb');
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

    //log('obs', obs);
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

const arg_transformation = require('./default-arg-transformations');

const transform_stage_input = {
    'R': arg_transformation.R
}



// turns out to be a considerably large amount of code.

// returns a 'staged function'.

// 16/06/2019 - about 2000 lines including comments.


// 18/06/2019 - want to remake stages, so that makes use of fn-io-transform and fn-monitor.


// 19/06/2019 - OK, stages is not so long or complex with the IO transformations and monitoring stripped from it.
//  Having those encapsulated in their own functions will improve the code.


// Calculate the overall 'rate'.
//  Function output rate.

// input rate is not so relevant to this function.
// hard to calculate in fact. maybe irrelevant.


// create stages object of the result.


// .stages object
//  .main true
//  
// .main object?
//  could be the main stage object.

// .input object
// .output object

// .output.rate

const stages = mfp({
    name: 'stages',
    return_type: 'function'   // function that returns an observable.
}, function() {
    // arrow function instead?
    //  can we keep the same this in some places? or it doesn't matter when we use arrow fns elsewhere?
    const a = arguments, l = a.length;
    const sig = get_a_sig(a);
    //const arr_stages = [];
    //log('stages sig', sig);
    let arr_stages;
    let num_stages;

    // simpler way to raise a stage event?

    // its within the function that gets called.
    //  want access to the observable result?

    let fn_inner;
    //let _raise_stage_event;

    // Not so sure that preparing these functions works so well....
    //  Or does it...?


    // Not so sure that stage preparation actually works (here).
    //  Possibly should use functions that have already been prepared if possible.
    //   Or make a non-functional (ie does not wrap a function) system of io transformations.


    // Possibility of calling the prepared functions within the right closure?

    const prepare_arr_fns = (ofns) => {

        const input_ofns = ofns => {
            const map_stage_reserved_names = {
                _raise_stage_event: true
            }
            const res = [];
            //arr_stages = [];
            // a 'pre' stage?
            //  or do without that?
            //   implement it separately / differently?
            //log('ofns', ofns);
            // filter it so it's not the reserved words...

            const o_filtered_stage_fns = {};
            let num_stages = 0;
            let last_stage_name;

            each(ofns, (fn_stage, stage_name) => {
                // want to know if it's the last too.
                //  won't have output transformation of promise.
                // io transformed stage...
                //  with transformation event callback?
                //   then could give that to monitoring function.
                // doing input and output on the stage function makes sense.
                //  definitly makes sense to wait for promises to resolve.

                //const io_transformed_stage = fn_io_transform(fn_stage)
                //  then monitored stage...

                // evented_fn, like evented_class?
                //  events given in a callback
                //   or observable if the callback is not provided?
                //   or relatively basic Evented_Class, with the right API?

                // leaving stage events out of here for the moment.

                // an events callback function makes a lot of sense in some cases.
                //  it's quite simple and performant, direct, and could then be wrapped in some kinds of objects.

                if (!map_stage_reserved_names[stage_name]) {
                    o_filtered_stage_fns[stage_name] = fn_stage;
                    num_stages++;
                    last_stage_name = stage_name;
                }
            });

            each(o_filtered_stage_fns, (fn_stage, stage_name) => {
                // want to know if it's the last too.
                //  won't have output transformation of promise.
                // define the transforms based on what the function accepts?
                //  so if the fn is known to only accept some params, we can give it transforms to that parameter / those parameter arrangements.
                // see what the stage accepts, if that's defined.
                //log('stage_name', stage_name);
                //log('fn_stage', fn_stage);
                //log('Object.keys(fn_stage)', Object.keys(fn_stage));
                const is_last_stage = stage_name === last_stage_name;
                //log('is_last_stage', is_last_stage);
                const map_sigs = fn_stage.map_sigs;

                if (Object.keys(fn_stage).length === 0) {
                    // still should io wrap it for arguments and promise resolution.
                    const io_transform = {

                    }
                    // all stages apart from last should have output promise resolution.
                    if (!is_last_stage) {
                        io_transform.o = {
                            p: arg_transformation.p
                        }
                    }
                    // io transformed, with the io transformation monitoring?
                    //  monitor the output of the input transform only?
                    //  then monitor the function call too?
                    //  monitor the input to the output processing stage?

                    // monitoring integrated here?

                    const io_transformed_stage = fn_io_transform(fn_stage, io_transform);
                    io_transformed_stage.name = stage_name;
                    res.push([stage_name, io_transformed_stage]);
                    //fn_stage.name = stage_name;
                    //arr_stages.push([stage_name, fn_stage]);
                } else {
                    // if we have the map of signatures...
                    //  we can tell 

                    if (map_sigs) {
                        const io_transform = {
                            i: transform_stage_input
                        }
                        io_transform.o = {
                            'p': arg_transformation.p,
                            'O': arg_transformation.O
                        }
                        const io_transformed_stage = fn_io_transform(fn_stage, io_transform);
                        io_transformed_stage.name = stage_name;
                        res.push([stage_name, io_transformed_stage]);
                    } else {
                        const io_transform = {

                        }
                        //if (!is_last_stage) {
                            //io_transform.p = arg_transformation.p;
                        io_transform.o = {
                            'p': arg_transformation.p,
                            'O': arg_transformation.O
                        }
                        //}
                        const io_transformed_stage = fn_io_transform(fn_stage, io_transform);
                        io_transformed_stage.name = stage_name;
                        res.push([stage_name, io_transformed_stage]);
                    }
                }
            });
            //num_stages = res.length;
            //log('input_ofns num_stages', num_stages);
            //console.trace();
            return res;
        }
        return input_ofns(ofns);
    }

    const prepare = () => {
        // but really its best to execute a function inside stages.
        //  giving that function the capability of?:
        //   Raising events on the result object
        //   Raising stage events that go through the exising stages and observable system?
        // Raising the 'have-result' or 'have-result-stream' would help to determine the latency
        // 'have-result-stream' or 'result-stream' or 'response-stream' event.
        //  knowing when a stram starts to be recieved is useful when calculating latency.

        // Preparing the functions for execution.
        //  Seems tricky now if we want to choose which closure the functions run in.
        
        if (sig === '[a]') {
            valid = true;
            each(a[0], stage => {
                // and the stage should be an array
                //log('stage', stage);
                //log('get_a_sig(stage)', get_a_sig(stage));
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
                //arr_stages = a[0];
                arr_stages = prepare_arr_fns(a[0]);
                num_stages = arr_stages.length;
            }
        } else if (sig === '[o]') {
            input_ofns(a[0]);
        } else if (sig === '[f]') {

            // Giving the function a single function.
            //  That function event working independently with all function calls.

            // But we are given a single function here.
            //  Not sure how it will apply to the particular function call and particular result obs object.

            // maybe this does work....

            // Want to be able to raise stage events through the running of the stages.
            //  possibly we should use an evented_fn wrapper.
            //   has a .events as part of the result.
            //    maybe it would be more flexible and less constrained than observable.


            // Wrong use of closures here so far.
            //  Not sure...

            // sending the function raise_stage_event into the function call.
            //  likely would be better to do this through access to the result observable.
            //   not as sure about doing it through the closure here.

            // Don't think we can define this function during the stages prep.

            /*
            const raise_stage_event = (name, evt) => {

                // Within the definition part?
                //  Not sure how to get this to apply to the result.

                // This part is within the definition rather than the part that produces the result.
                //  Making a new instance of that function for each call?

                // Want to get events back to the 'stages' part.
                //  Should be OK....
                //   Because of closures.
                //  ?????

                // no, can't set _raise_stage_event for every function call.
                //  however, an events property on each function call would make sense.



                //if (_raise_stage_event) _raise_stage_event(name, evt);

                console.trace();
                throw 'stop';


            }
            */

            // yes, can pass the function in here...
            //  however, that would probably only work with singletons.
            //  need to get it so that a new function is made before the function call?
            //  but then a whole execution of the prepare function each time the function is run?
            //   maybe, as it may need a new closure each time.

            // want this raise_stage_event to be used on specific function calls.
            //  its calls are relevant to specific executions of the function.

            // Need to way the function input and calling? Seems we are close...

            // Not so sure how to wrap the whole thing in a closure....
            //  Need a different function call with the raise_stage_event for every time the stages fn is called.

            //console.trace();
            //throw 'Broken';

            // Maybe this sets up the stage functions within the wrong closure when this is called at the beginning.
            // first call of it... but it's possibly in the wrong closure.
            //  for the moment, lets call it within the right closure.

            // call the prepared functions?
            //  but they are prepared to operate within the wrong closure?
            
            // Think that the functions that are prepared need to be called within local closure.
            //  This could be done with a callback on the setup closure.
            //   ???

            // Preparing the functions on each call...?

            //const res_fns_stages = a[0]();

            // Not so wure we eant to call this now...?

            // really not so sure about calling the inner function on setup.
            //  maybe a different api that works with prepared functions will work better.
            arr_stages = prepare_arr_fns(a[0]());
            num_stages = arr_stages.length;
            //input_ofns(res_fns_stages);
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
    const ms_pre_prepare = Date.now();
    // maybe best not to (try to) prepare the functions all at once.
    let res_prepare = prepare();
    const ms_prep_time = Date.now() - ms_pre_prepare;

    if (res_prepare) {
        //log('pre prepare');
        log('ms_prep_time', ms_prep_time);
        return res_prepare;
    }
    //log('post prepare');
    // can call the prepared functions, with the unique function / functions / objects from the wanted closure?

    // set up the empty stage result info here?
    //  then can clone it for every function call.

    const arr_stages_info = new Array(arr_stages.length);
    each(arr_stages, (arr_stage, i) => {
        //log('fn_stage.name', fn_stage.name);
        //log('fn_stage', fn_stage);
        const stage_name = arr_stage[0];
        //log('stage_name', stage_name);
        // ms_input_start
        // ms_input_complete
        arr_stages_info[i] = {
            name: stage_name
        }
    });
    //throw 'stop';
    // or the stages event function will be fine applying to the function def?
    // Ability to respond to stage events here?
    // Some kind of function execution closure...?
    // Takes an event callback function?

    // Main part of the fn, after prepare.
    //  Not the execution closure.


    // 06/07/2019 - Want to make it so that completion and io completion are better handled and dealt with.
    //  would be nice if we didnt need to use io complete in many circumstances
    //   and tell easily when we do need to use it.
    //   be able to easily tell if the io is ongoing
    //    that would be nice by default

    //  see what the result is when it's complete.
    //   if it's an R (or others not yet specced / done) then there is ongoing io.
    //  normally complete event will mean totally complete
    //   ongoing io will be considered a bit more of a special case.
    //    could return an ongoing_io flag in the complete event.

    //  yes. an ongoing io flag makes most sense.
    //   boolean value for easiest checking.
    //    other bits of functionality can bring this into a 'status' system.
    

    





    const process = () => {
        //log('3) process() num_stages', num_stages);
        // I think the current system is broken, but I'm not sure.
        //  Need to get various events back.

        // Even have the stages function return the event?
        //  Not got the event passing all sorted out yet.

        // Likely to need different event function callbacks here.

        // 1. a stage event function here perhaps?
        //  How to get the stages function to provide the stage event function?

        // think I have it....
        const res = function() {
            const a2 = arguments, l2 = a2.length;
            const sig2 = get_a_sig(a2);
            // 2. a stage event function here perhaps?
            // raise it on the obs_res?
            // The stages event function?
            // Can monitor the input args here.
            // input.status
            //  waiting?
            //  processing / on / started / running?
            //   'on' is simplest
            //  complete?
            // input.bytes
            // res.input.events
            //  an evented_class
            // res.output.events
            let next_apply_args = a2.length === 0 ? undefined : a2;
            //log('pre return stages obs');
            // Could raise a stage event here...?
            //  But really want stage timings to be nicely integrated.
            // // is it just io?
            // or info? metadata? md?
            // .info?
            // obs.io?
            //  .io seems like a decent name.
            // or 'other' event types in the observable?
            // .stages would make sense too.
            //  where data is provided about the various stages.
            // .stage_events?
            // maybe don't want to necessarily observe events (again), but want the data provided through observing / listening to their events.

            // Events seem easier to raise here.
            // This would be the place to call the closure for the stages to run in.
            //  Call the given function each time the function executes.
            //  Also call it for preparing the stages?
            //   Should be fine, so long as it executes within the correct scope.
            // Call the given function here....
            // Define the stage callback function?
            // or later on when it's got access to the callback function.
            //  latencies for 

            // need to know the last stage that wasnt skipped.

            // will raise 'stage' events on obs_res

            //console.log('');
            //console.log('pre create obs_res');
            //console.trace();

            const obs_res = observable((next, complete, error, status, log, stage) => {
                // create the stage event callback function
                // timings for make-request
                // have-response

                //console.log('');
                //console.log('wrapped stages function being processed!!!');
                //console.log('');
                //console.trace();

                const log_stage_events = [];
                obs_res.log_stage_events = log_stage_events;
                // map of stage events by name.
                //  will help with latency calculations.

                const map_stage_events_by_name = {};
                // want to record the timings for the stage events.
                //  and the times between subsequent stage events will be useful too... such as for providing a latency measurement.
                // a log / list of stage event timings.
                //  and just stage event info?
                // and the time since the previous event too...
                //  will be useful for finding things like latencies.

                let ms_last_stage_event;
                // just with a name, no properties here???
                // Specific stage events...?
                // And have the general ones, such as stage exec start etc?
                // Want to be able to raise stage events.
                // It should definitely know which stage it applies to!
                //  And should not need to be told in the idiomatic code.
                // Knowing what stage is running would be very useful for the stage_event function.
                //  have we got / can we set a single running stage variable?

                let c = 0;

                // the c variable does not follow asyncronous execution.?

                const cb_stage_event = (name, evt) => {
                    // the evt name?
                    // the event name being included in the event object?
                    evt = evt || {
                        name: name
                    }
                    //console.log('cb_stage_event name:', name);
                    //console.log('evt', evt);
                    //console.log('c', c);

                    // c is the current stage index?
                    //  not so sure it will be reliable. may need more testing.
                    //console.trace();
                    const now = Date.now();
                    // want the stage name here as well.
                    evt.ms = now;
                    evt.i_stage = c;

                    // Seems it does do OK waiting for promise resolution.
                    //console.log('arr_stages[c]', arr_stages[c]);
                    evt.stage_name = arr_stages[c][0];
                    
                    if (ms_last_stage_event) {
                        evt.ms_since_last = now - ms_last_stage_event;
                    }
                    ms_last_stage_event = now;
                    log_stage_events.push(evt);
                    map_stage_events_by_name[name] = evt;

                    if (name === 'have-response') {
                        // can set the result latency.
                        obs_res.ms_latency = now - map_stage_events_by_name['make-request'].ms;
                    }

                    obs_res.raise('stage', evt);
                    /*
                    log('cb_stage_event');
                    log('name', name);
                    log('evt', evt);
                    console.trace();
                    throw 'stop';
                    */
                    // It works with function reprep.
                    //  Maybe a single closure will be fine so long as no local variables are needed.
                    //  Though we could pass in a local {} to store local (in purpose) variables.
                };
                // call the main inner function (it returns the functions, but hopefully we can use the ones that are already prepared.)
                //  but those prepared ones could be within the wrong closure :( )

                const t1 = Date.now();
                const new_obj_fns = a[0](cb_stage_event);
                // and prepare them again?
                // and newly prepared stages....

                //log('new_obj_fns', new_obj_fns);
                // Maybe function reprep won't take so long....? Especially if function prep gets called a lot, it will get compiled to run faster.

                const newly_prepared_stages = prepare_arr_fns(new_obj_fns);
                const arr_stages = newly_prepared_stages; // overrides in this scope.
                const reprep_time = Date.now() - t1;
                log('reprep_time', reprep_time);

                // Repreparation of functions could be very inefficient :(
                //  Maybe necessery for easiest use of the wanted closure.
                //   Likely not though.
                //   Or direct reference to the obs res would be another route - could use some syntactic sugar.
                //console.trace();
                //throw 'stop';

                
                //let _last_stage_res;
                const res_input = obs_res.input = {};
                // and a stages object?
                const res_output = obs_res.output = {};
                // res.events
                //  would be simple enough to watch for events on that.
                //   could send them all through that.
                // Likely won't use res_events.???
                //const res_events = obs_res.events = new Evented_Class();
                //  And another route for transmitting events.
                //log('arr_stages_info', arr_stages_info);
                //console.trace();
                const res_stages = obs_res.stages = clone(arr_stages_info);

                //log('res_stages', res_stages);
                //throw 'stop';
                //const res_stages = res.stages = 

                // Raising stage events?

                // Monitor what goes into the function.

                //console.log('a2', a2);
                //console.trace();

                monitor_item(a2, (evt_input_args) => {
                    //log('evt_input_args', evt_input_args);
                    const event_name = evt_input_args.name;
                    //log('event_name', event_name);
                    //res_events.raise('input', evt_input_args);

                    //console.trace();
                    //throw 'stop';
                    // input started..
                });
                // Need to do some further work in order to get latency.
                //  It will have more to do with relative timings.
                // since_start           start of the whole observable system
                // since_stage_start
                // need more relative timings to work out the latency.
                //  or latency is the time the main function has its result available / output starting?
                // ms until the main output?
                //  the main stream starting.
                
                // seems like we need that in order to measure the latency.
                //  or an event that gives the latency point?
                //  and better to measure the latency without the fn setup etc.
                // need more / better relative timings.
                // time from the request being made until we have the response object.
                // need a clear way of measuring the latency?
                //  not something where it looks into the response of the 'main' stage?
                //  status change, from waiting to has-response?
                // sent-request first.
                // raising a has-response event?
                // keep track of the last stage that was run.
                //  then if the execution is complete, ie with missed stages, 
                let i_last_unskipped_stage = -1;
                let exec_is_complete = false;
                // last unskipped stage index may be better.
                //  not sure we need the name
                const process_next = () => {
                    // post processing promise resolution?
                    //  better if it's set up ahead of time.
                    //log('next_apply_args', next_apply_args);
                    //log('num_stages', num_stages);
                    // need promise resolution post-processing.
                    //  the io processing will already be put in place.
                    // monitor the input ags to the first stage.
                    // Will (at first) monitor the objects before, after, and in between the different stages.
                    const have_next_stage = !!arr_stages[c];
                    const i_stage = c;
                    //const ec_stage_api = new Evented_Class();
                    //log('process_next c:', c);
                    log('have_next_stage', have_next_stage);
                    //log('Object.keys(arr_stages)', Object.keys(arr_stages));

                    if (have_next_stage) {
                        const stage_name = arr_stages[c][0];
                        const fn_stage = arr_stages[c][1];
                        // crate the stage info object in the result.
                        const is_main_stage = fn_stage.main === true;
                        const is_last_stage = c === arr_stages.length -1;
                        //log('');
                        //log('stage_name', stage_name);
                        //console.trace();
                        //log('is_main_stage', is_main_stage);
                        //log('');
                        const res_stage = res_stages[c];
                        const res_prev_stage = res_stages[c - 1];
                        const res_next_stage = res_stages[c + 1];
                        res_stage.ms_start = Date.now();
                        /*
                        if (res_prev_stage && res_prev_stage.bytes_out) {
                            // only when the previous stage's io is complete.
                            res_stage.bytes_in = res_prev_stage.bytes_out;
                        }
                        */
                        // bytes in being the bytes out of the prev stage.
                        if (is_main_stage) {
                            res_stage.main = true;
                            // monitor the output?
                            //  get the output rate from it.
                        }
                        // 

                        // and raise a main stage result when necessary.
                        //throw 'stop';
                        //_raise_stage_event = raise_stage_event;
                        // Could work this way :)
                        //  sending it to the closure works...
                        //stage(stage_name, ec_stage_api);
                        //let stage_res;
                        //let dsargs = deep_sig(next_apply_args);
                        // when it's the main stage, will set the .main object as well as the stage object in the array.

                        let fn_ready_args;
                        const exec_fn = () => {
                            const i_stage = c;
                            //log();
                            console.log('calling exec_fn ' + stage_name);
                            console.trace();
                            //log();
                            //const given_args_sig = deep_sig(fn_ready_args);
                            // ms_exec_start?
                            // need the output-start and output-complete events.
                            //  maybe only output-start if its async output.
                            //log('pre fn_stage.call');
                            //log('fn_stage', fn_stage);
                            //log('!!fn_ready_args', !!fn_ready_args);
                            // Does the function get skipped?
                            //  Need to know which is the last executed function.
                            const stage_res = fn_stage.call(this, fn_ready_args, transform_call_event => {
                                //log('Object.keys(transform_call_event)', Object.keys(transform_call_event));
                                const {name, sig, value} = transform_call_event;
                                // likely not to need an output sig.
                                //log('name, sig', name, sig);
                                // at the start?
                                if (name === 'complete') {
                                    // the stage could have been skipped.
                                    //  no need to monitor output in that case.
                                    //console.log('transform_call_event', transform_call_event);
                                    //console.log('Object.keys(transform_call_event)', Object.keys(transform_call_event));
                                    if (transform_call_event.skipped === true) {
                                        res_stage.skipped = true;
                                    } else {
                                        // The last unskipped stage...?
                                        if (i_stage > i_last_unskipped_stage) i_last_unskipped_stage = i_stage;
                                        // Raising monitoring events may work best.
                                        // monitor the output when the function call is complete?
                                        // could send the input and output transforms / transformed parameters here.
                                        let content_length;
                                        // Not so sure we know what the last unskipped stage is at this point?
                                        //  Telling when the io is complete would work better at the very end of the call chain?
                                        // skipped function calls have output too?
                                        //  same as the input.
                                        // so the output from the last stage still happens....
                                        // be able to get access to the monitoring later as well?
                                        monitor_item(value, (evt_stage_res) => {
                                            // will maybe have 'start'?
                                            //  'available'?
                                            const cl_evt = clone(evt_stage_res);
                                            //log('cl_evt', cl_evt);
                                            //console.trace();
                                            //log('');
                                            const event_name = evt_stage_res.name;
                                            // io complete.
                                            // these are output events.
                                            // 'available' event.
                                            // used to say the result start.
                                            // possible event names...
                                            // 'data'
                                            // but also want to know the bytes into a function.
                                            //  could be previous stage .bytes_out.
                                            // Calculate its rate before its complete.
                                            if (event_name === 'complete') {
                                                console.log('c', c);
                                                console.log('stage item complete');


                                                // Or the complete event could contain a separate callback too for the io-complete?


                                                // output_complete_ms
                                                const ms_output_complete = Date.now();
                                                const ms_taken = ms_output_complete - res_stage.ms_start;
                                                res_stage.ms_output_complete = ms_output_complete;
                                                // But what if we have not recorded bytes being output?
                                                if (res_stage.ms_output_start) {
                                                    const ms_output_taken = res_stage.ms_output_taken = ms_output_complete - res_stage.ms_output_start;
                                                    if (ms_output_taken > 0) {
                                                        //console.log('res_stage.bytes_out', res_stage.bytes_out);
                                                        if (res_stage.bytes_out) {
                                                            const output_rate = res_stage.bytes_out / (ms_output_taken / 1000);
                                                            res_stage.output_rate = output_rate;
                                                            // and if it's the main stage:
                                                            if (is_main_stage) {
                                                                obs_res.main_rate = output_rate;
                                                            }
                                                        }
                                                    }
                                                    // can also calculate the output rate.
                                                }
                                                res_stage.ms_taken = ms_taken;
                                                // main stage complete?

                                                // last unskipped stage complete?
                                                

                                                //console.log('i_last_unskipped_stage', i_last_unskipped_stage);
                                                //console.log('i_stage', i_stage);
                                                
                                                // May have got into race consdition?
                                                //  Only want to raise 'complete' after the last stage has executed at least.

                                                console.log('c', c);
                                                console.log('i_stage', i_stage);
                                                console.log('is_last_stage', is_last_stage);

                                                // only when execution is complete as well.

                                                // Working on the monitored item right now.

                                                // Maybe don't use .io object by default?
                                                //  So it not being there means there is no ongoing io?


                                                // Worth having a more serious and signigicant look into this.
                                                //  It was a bit tricky before.
                                                //  Want clarity and ease of use.



                                                // Now this is (so far untested) done within obs, when it returns an R.

                                                /*
                                                if (exec_is_complete && i_stage === i_last_unskipped_stage) {
                                                    obs_res.io.raise('complete');
                                                }
                                                */
                                                // this stage number?


                                                // at the end, c would be the length of the stages array....

                                                /*
                                                if (is_last_stage) {
                                                    obs_res.io.raise('complete');
                                                }
                                                */

                                                /*
                                                if (c === arr_stages.length) {
                                                    obs_res.io.raise('complete');
                                                }
                                                */

                                                /*

                                                // would work with a timeout?
                                                //  probably best on the end of the whole thing.
                                                //  last stage.

                                                if (i_last_unskipped_stage === i_stage) {
                                                    obs_res.io.raise('complete');

                                                    // OK, looks like this is working now.
                                                    // Make use of this within ofp.

                                                }
                                                */


                                                // can calculate the output rate of the stage here.
                                                ///log('monitor_item event:');
                                                //log('-------------------')
                                                //log('stage_name', stage_name);
                                                //log('evt_stage_res', evt_stage_res);
                                                // and the next stage's bytes in...
                                                //if (res_next_stage && res_stage.bytes_out) {
                                                    //res_next_stage.bytes_in = res_stage.bytes_out;
                                                //}
                                            } else if (event_name === 'available') {
                                                // look at the content_length
                                                //console.log('R available evt_stage_res', evt_stage_res);
                                                //console.trace();
                                                if (evt_stage_res.content_length) {
                                                    res_stage.content_length = evt_stage_res.content_length;
                                                    // also want to check to see if its the main stage.
                                                    // main_content_length?
                                                    if (is_main_stage) {
                                                        content_length = obs_res.content_length = evt_stage_res.content_length;
                                                    }
                                                }
                                                res_stage.ms_output_start = Date.now();
                                            } else if (event_name === 'data') {
                                                // evt_stage_res
                                                // Can get the estimated time remaining here.
                                                /*
                                                    Don't need to calculate as much here - it's already been calculated in the monitoring function.
                                                    {
                                                        name: 'data',
                                                        t: 'B',
                                                        bytes: data.length,
                                                        bytes_total: bytes,
                                                        byte_rate: byte_rate,
                                                        content_length: content_length,
                                                        bytes_remaining: bytes_remaining,
                                                        ms_est_remaining: est_remaining,
                                                        ms_taken: ms_taken,
                                                        proportion: proportion
                                                    }
                                                */
                                                // bytes_total
                                                const {bytes, bytes_total, byte_rate, content_length, bytes_remaining, ms_est_remaining, ms_est_complete, ms_taken, proportion} = evt_stage_res;
                                                //res_stage.ms_output_start = Date.now();
                                                // though we could add to the bytes_out.
                                                //res_stage.bytes_out = res_stage.bytes_out || 0;
                                                //res_stage.bytes_out += cl_evt.bytes;
                                                // and can measure / record the bytes out rate.
                                                //const ms_outputting = Date.now() - res_stage.ms_output_start;
                                                const ms_processing_output = ms_taken; // subtract paused time too?
                                                const out_rate = byte_rate;
                                                // Some of this may be better encapsulated elsewhere.
                                                //console.log('stage_name', stage_name);
                                                //console.log('byte_rate', byte_rate);
                                                res_stage.bytes_out = bytes_total;
                                                // the bytes io gets stored in the stages info anyway.
                                                // also will skip decompression stage if we don't get gzipped or whatever web compression.
                                                if (res_stage.bytes_in) {
                                                    // out / in
                                                    //  oi ratio seems like the one we want most.
                                                    // just bytes_ratio?
                                                    res_stage.bytes_oi_ratio = res_stage.bytes_out / res_stage.bytes_in;
                                                }
                                                // the main rate makes sense to use.
                                                //  not say its the overall fn output rate.
                                                if (is_main_stage) {
                                                    // main_bytes_out
                                                    // main_byte_rate?
                                                    // main_rate
                                                    // obs_res.main_bytes_out = obs_res.main_bytes_out || 0;
                                                    obs_res.main_bytes_out = bytes_total;
                                                    // and main_rate
                                                    // the main rate.
                                                    obs_res.main_output_rate = out_rate;
                                                    // estimated completion time?
                                                }

                                                if (i_last_unskipped_stage === i_stage) {
                                                    // this will be the output for all the stages as a whole.
                                                    // do want to be able to calculate the sizes of arrays etc.
                                                    //  be able to switch it off, but it will be useful for consistency in measurements.
                                                    //   will be useful in knowing and using actual data rates.
                                                    obs_res.bytes_out = bytes_total;
                                                    //obs_res.bytes_out += cl_evt.bytes;
                                                    obs_res.output_rate = out_rate;
                                                    // and the out / output rate.
                                                    // estimated completion time?
                                                    //console.log('cl_evt', cl_evt);
                                                    // 
                                                    if (def(proportion)) obs_res.proportion = proportion;
                                                    if (def(bytes_remaining)) obs_res.bytes_remaining = bytes_remaining;
                                                    if (def(ms_est_remaining)) obs_res.ms_est_remaining = ms_est_remaining;
                                                    if (def(ms_est_complete)) obs_res.ms_est_complete = ms_est_complete;
                                                    // and estimate when it will be complete too.
                                                }

                                                if (res_next_stage) {
                                                    res_next_stage.bytes_in = res_next_stage.bytes_in || 0;
                                                    res_next_stage.bytes_in += cl_evt.bytes;
                                                }
                                            } else {
                                                // ignore data events for the moment
                                                log('event_name', event_name);
                                                console.trace();
                                                throw 'stop';
                                            }
                                            // output complete separate to stage exec complete.
                                            // send this through to further monitoring?
                                        });
                                    }
                                    // can go to the next
                                    // we have the value it was completed with :)
                                    // don't need last_stage_res?
                                    //_last_stage_res = value;
                                    next_apply_args = value;
                                    c++;
                                    // output complete?
                                    log('pre process next stage');
                                    process_next();
                                } else {
                                    log('transform_call_event', transform_call_event);
                                    //console.trace();
                                    // send it through as a stages event?
                                    /// want to 
                                    // determining rate and latency with a few different operations...?
                                    // and output-transform-complete too?
                                    if (name === 'input-transform-complete') {
                                        // record the stage as having an input transformation.
                                        //o_dl.stages?
                                        // .stages could work better than .io and .io.stages.
                                        // .rate and .latency seem the most important.
                                        
                                        //  definitely the most important for eos-live.
                                        // set the time of io transform complete...
                                        const ms_input_transform_complete = Date.now();
                                        res_stage.ms_input_transform_complete = ms_input_transform_complete;
                                        res_stage.ms_input_transform_taken = ms_input_transform_complete - res_stage.ms_input_transform_start;
                                    } else if (name === 'input-transform-start') {
                                        // record the stage as having an input transformation.
                                        //o_dl.stages?
                                        // .stages could work better than .io and .io.stages.
                                        // .rate and .latency seem the most important.
                                        
                                        //  definitely the most important for eos-live.
                                        // set the time of io transform complete...
                                        res_stage.ms_input_transform_start = Date.now();
                                    } else if (name === 'exec-start') {
                                        // record the stage as having an input transformation.
                                        //o_dl.stages?
                                        // .stages could work better than .io and .io.stages.
                                        // .rate and .latency seem the most important.
                                        
                                        //  definitely the most important for eos-live.
                                        // set the time of io transform complete...
                                        res_stage.ms_exec_start = Date.now();
                                    } else if (name === 'exec-complete') {
                                        // record the stage as having an input transformation.
                                        //o_dl.stages?
                                        // .stages could work better than .io and .io.stages.
                                        // .rate and .latency seem the most important.
                                        
                                        //  definitely the most important for eos-live.
                                        // set the time of io transform complete...
                                        const ms_exec_complete = Date.now();
                                        res_stage.ms_exec_complete = ms_exec_complete;
                                        res_stage.ms_exec_taken = ms_exec_complete - res_stage.ms_exec_start;
                                    } else {
                                        log('name', name);
                                        log('transform_call_event', transform_call_event);
                                        console.trace();
                                        throw 'stop';
                                    }
                                    // input-transform-complete
                                    // input transfom data events...?
                                    //  will want to know what the data was changed to.
                                    // stage input transformation event...?
                                }
                            });
                        }
                        fn_ready_args = next_apply_args;
                        log('pre exec_fn');
                        exec_fn();
                    } else {
                        //log('process_next reached completion. may still need to do some output transformation.');
                        //console.log('i_last_unskipped_stage', i_last_unskipped_stage);
                        // then the output from the last unskipped stage is the main function output
                        // connect to that stage's output monitoring / events?
                        const tsr = tf(next_apply_args);
                        c++;
                        log('tsr', tsr);
                        //log('pre raise complete');
                        // can complete the download function with a readable stream.
                        //  or a parsed object.
                        // and the io complete?
                        //  wait for the whole of the io to be complete?
                        // wait for the last unskipped stage?
                        console.log('the stages exec is complete');
                        console.log('i_last_unskipped_stage', i_last_unskipped_stage);
                        // then we want to wait for the completion of that stage to say that the whole function is complete?
                        // or monitor the next_apply_args specially here, this will be the output monitoring of the function.
                        //  But these args are already monitoried?
                        exec_is_complete = true;
                        complete(next_apply_args);
                        //log('post raise complete');
                    }
                }
                process_next();
            });
            return obs_res;
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
                //log('v', v);
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
        obs.on('paused', () => log('* paused'));
        obs.on('resumed', () => log('* resumed'));
        obs.next(data => {
            log('data', data);
        });
    }
    //test_obs();

    let test_then = () => {
        (async () => {
            let res = await obs;
            log('awaited res', res);
        })();
    }
    //test_then();

    log('stages', stages);

    let test_split = () => {
        obs.on('paused', () => log('* paused'));
        obs.on('resumed', () => log('* resumed'));

        let [obs1, obs2] = obs.split(data => data.v % 3 === 0)

        obs1.on('next', data => log('obs1 data', data));
        obs2.on('next', data => log('obs2 data', data));
    }

    //test_split();

    let test_filter = () => {
        obs.filter(data => {
            return data.v !== 8;
        }).filter(data => {
            return data.v % 3 !== 0;
        });

        obs.next(data => {
            //log('data', data);
            if (data === 8) {
                obs.delay(5000);

                // works nicely here.
                // want listeners for the pause and resume events.
                // That would be convenient syntax

                obs.pause();
                log('paused');
                setTimeout(() => {
                    log('wait over');
                    obs.resume();
                }, 2000);

            }
        }).end(() => {
            log('end');
        })
    }
} else {

}
