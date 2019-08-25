

// If it's useful for obs and stages, then input and output transformation in one function with integrated monitoring could work well.



// Separate version for monitored transformations?
//  Keep this as a core?
//  A way to extend this?


// Could make a new fn-io-monitored-transform
//  And different options for what gets monitored.
//  Seems easy already to add timings for various things.
//  Not so sure we need another module.




// fn-io-monitored-transform???
//  that seems like it would be more applicable to stages()
//  seems useful for getting io data rates, and transformation rates?


const {deep_sig} = require('lang-mini');


/*
    Definition / map of input transformations by sig

    This will also wrap a function to create another callable function.


    // such as: returned promises are to be resolved.

    // This is going to use asyncronous transformations.


    // and with some functions, could provide transform streams?

    fn_io_transform(fn, sig_map_input_transformations, sig_map_input_transformations)


    // A status wrapper function?
    //  So we can define what the status of the function is when it's been called.

    // pre, main, post ... complete?
    //  always ends with complete? or 'done'.


    // Would allow for a nice complete / done / finished aliasing.


    // 


    // Integrating its own monitoring here could be useful.

    


*/

// a non-fp version of this?
//  just to do the transformation, get the callback
//   including transformation event callbacks?


// and a transformation event callback too?
// options?
//  enable monitoring
//  

// const obj_transform = (obj, map_transformations)

// cb_transformation_events(evt)
//  

// auto_promise_resolve?
//   promise resolution 


// Are transformations defined backwards right now?
//  Easier to start with what we currently have.
//  Be able to set up a transformation so that looks at the params we have.

const isArguments = ( item ) => Object.prototype.toString.call( item ) === '[object Arguments]';


// And a transformation event callback too?


// including monitoring in the function definition???
//  may be implicit and set up when using stages ().
//  or an easy to set option.





const fn_transformation = (fn, map_transformations) => {

    //console.log('');
    //console.log('fn_transformation');
    //console.log('');

    //console.log('Object.keys(map_transformations)', Object.keys(map_transformations));
    //console.trace();


    // both input and output tranform, as defined, if defined.
    //  not even automatic promise resolution assured here - needs to be provided in the map.

    const input_transformations = map_transformations.i;
    const output_transformations = map_transformations.o;

    // needs to return a function.

    // function will always be async?
    //  will use event callback rather than observable.

    const fn_res = function() {
        const args = arguments;

        if (args.length === 2 && typeof args[1] === 'function') {
            let [a, cb_transform_exec_events] = args;
            if (isArguments(a)) {
                if (a.length === 1) {
                    a = a[0];
                }
            }

            // so now a is the proper function call args???
            //  check to see if a is an arguments object.
            //   only one object there? swap it for item 0

            // maybe was not given an arguments object?
            // a could be an object?

            //let fn_ready_args;
            const sig_called_with = deep_sig(a);
            const sig_arguments = deep_sig(arguments);
            // fishing the argument out of the arguments object?

            //console.log('transformed fn called with sig', sig_called_with);
            //const exec_output_transformations = () => {
            //}

            const exec_fn = () => {

                //console.log('fn transform exec');


                //console.log('!!fn.skip', !!fn.skip);

                // decide if we skip the function call - returning the input.


                // exec start, exec complete

                // And will also measure exec timings.


                cb_transform_exec_events({
                    'name': 'exec-start'//,
                    //sig: evt_output_transform.sig,
                    //value: evt_output_transform.value
                });

                const fn_res = fn.call(null, a);

                cb_transform_exec_events({
                    'name': 'exec-complete'//,
                    //sig: evt_output_transform.sig,
                    //value: evt_output_transform.value
                });


                const sig_fn_res = deep_sig(fn_res);
                if (output_transformations) {
                    if (output_transformations[sig_fn_res]) {
                        output_transformations[sig_fn_res].call(null, fn_res, (evt_output_transform) => {
                            cb_transform_exec_events({
                                'name': 'complete',
                                sig: evt_output_transform.sig,
                                value: evt_output_transform.value
                            });
                        });
                    } else {
                        cb_transform_exec_events({
                            'name': 'complete',
                            sig: sig_fn_res,
                            value: fn_res
                        });
                    }
                } else {
                    // probably should have been given an events cb function.
                    cb_transform_exec_events({
                        'name': 'complete',
                        sig: sig_fn_res,
                        value: fn_res
                    });
                }
            }

            const skip_fn = () => {
                // complete callback.
                cb_transform_exec_events({
                    'name': 'complete',
                    //sig: sig_fn_res,
                    value: a,
                    skipped: true
                });

            }
        
            if (input_transformations) {

                // do we skip the stage?
                let do_skip = false;
                //console.log('!!fn.skip', !!fn.skip);
                if (fn.skip) {
                    do_skip = fn.skip(a);
                }

                // Only do / try the input transformation if we don't already have accepted parameters?

                //console.log('have input transformations');
                //console.log('Object.keys(input_transformations)', Object.keys(input_transformations));

                //console.log('sig_called_with', sig_called_with);


                // if the sig_called_with is already in the accepted sigs?

                //console.log('fn', fn);
                //console.trace();
                //throw 'stop';

                //console.log('do_skip', do_skip);

                if (do_skip) {
                    //console.log('skipping function call');
                    skip_fn();
                } else {

                    if (fn.map_sigs && fn.map_sigs[sig_called_with]) {
                        exec_fn();
                    } else {
                        if (input_transformations[sig_called_with]) {
                            // run that transformation function.
        
                            // need to add the extra callback argument?
                            // apply not call?
        
                            // call seems better.
                            //  call it with an arguments object?
        
                            //console.trace();
                            //throw 'stop';
        
                            // 
    
                            // input transform start.
    
                            
    
                            cb_transform_exec_events({
                                'name': 'input-transform-start'
                            });
                            
    
    
        
                            input_transformations[sig_called_with].call(null, a, (evt_input_transform) => {
                                //console.log('evt_input_transform', evt_input_transform);
                                const {name, sig, value, io_sigs} = evt_input_transform;
                                if (name === 'complete') {
                                    a = value;
                                    evt_input_transform.name = 'input-transform-complete';
                                    // then report this event to a listener?
                                    //cb_transform_exec_events
                                    cb_transform_exec_events(evt_input_transform);
                                    exec_fn();
                                } else {
                                    console.trace();
                                    throw 'NYI';
                                }
                                //console.trace();
                                //throw 'stop';
                                // replace the argument(s) a with the value
                            });
                        } else {
                            // just call it
                            //fn_ready_args = a[0][0];
                            exec_fn();
                        }
                    }


                }

                

                
                // arguments object has already been sorted out.



                /*




                if (isArguments(a[0]) && typeof a[1] === 'function') {
                    console.log('carry out input_transformations', fn.name);
                    console.trace();

                    //const input_transformation_sigs = Object.keys(input_transformations);

                    console.log('!!input_transformations[sig_called_with]', !!input_transformations[sig_called_with]);
                    console.log('sig_called_with', sig_called_with);

                    
                } else {

                    console.log('a.length', a.length);
                    console.log('Object.keys(a)', Object.keys(a));

                    console.log('sig_called_with', sig_called_with);


                    if (input_transformations[sig_called_with]) {
                        input_transformations[sig_called_with].call(null, fn_res, (evt_output_transform) => {
                            //console.log('evt_output_transform', evt_output_transform);
        
                            console.trace();
                            throw 'stop';
        
        
                            // Could have been a promise resolution.
                            //const sig_fn_res = deep_sig(fn_res);
                            console.log('Object.keys(evt_output_transform)', Object.keys(evt_output_transform));
        

                            // / *

                            //cb_transform_exec_events({
                            //    'name': 'complete',
                            //    sig: evt_output_transform.sig,
                            //    value: evt_output_transform.value
                            //});
                            // * /
        
        
        
        
                            // probably want something for 'sig' which corresponds to the value.
        
        
        
        
        
                        });
                    } else {
                        console.log('89347812 pre exec');
                        exec_fn();

                    }


                    //console.trace();
                    //throw 'NYI';
                }

                */

                // transformation sigs
        
                // process them....
                //if (input_transformations)
        
                
        
        
        
            } else {
                //fn_ready_args = arguments;
                exec_fn();
            }

            //console.log('');
            //console.log('calling transformed function fn.name', fn.name);
            //console.trace();





        } else {
            throw 'Expected args: normal_args, cb_transform_event';
        }



        


        
    }

    if (fn.name) fn_res.name = fn.name;
    if (fn.main) fn_res.main = fn.main;
    if (fn.skip) fn_res.skip = fn.skip;

    // 



    return fn_res;


   

}


module.exports = fn_transformation;