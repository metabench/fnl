/*
    And this could use the counter observable.




*/

const {obs, stages} = require('../old/fnl');

const {mfp, tf} = require('lang-mini');

const counter = require('./counter');

// Simplest multi stage function
//  stage names are important....

console.log('**stages', stages);


// an object for the stages looks like easier syntax.


// doesn't take any params.
const multi_logs = () => {
    
    // local variables that can be used amongst all of the stages.
    //  can set those local variables within the first stage.

    // stages returns a function.

    
    // immediately execute, with local variables?

    //  local variables will be needed for a few different bits of functionality


    // send output of one function to the input of the next.
    //  (stripping arrays?) need to be explicit / clever about that.


    // having a counter as one of the stages would be a nice test / example.

    // the obs framework will be nice for recording results from examples.


    // setting it up as an object would work well.
    //  be easier syntax.


    // Not sure that this place for local variables is necessarily the best way.
    //  Will work on patterns.

    // 


    // This way means running the stages function each time.
    //  Not sure that is best.

    // examples with a definition as an object or an array

    return stages({
        first: (a1, a2, a3) => {
            console.log('first stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'first stage result';
        },
        second: (a1, a2, a3) => {
            console.log('second stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'second stage result';
        },
        third: (a1, a2, a3) => {
            console.log('third stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'third stage result';
            // the third stage result is the result for the whole thing.
        }
    })();

    // running other varieties of these functions within stages would make sense
    //  then want to make the 'dl' function in stages too.
    //   integrated measure of buffer sizes in places.
    //  need to work on making this suitable for measuring a dl
    //   and multiple dls.


    /*
    return stages([
        ['first', (a1, a2, a3) => {
            console.log('first stage log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'first stage result';
        }], ['second', (a1, a2, a3) => {
            console.log('second stage log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'second stage result';
        }], ['third', (a1, a2, a3) => {
            console.log('third stage log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'third stage result';
            // the third stage result is the result for the whole thing.
        }]
    ])();
    */
}

// this is more idiomatic.
//  but calling stages with a function.
//   that function returns an object or array
//   it can track local variables.
//    local variebles between stages would definitely be useful.
//  not so sure we want a constricted phase pipeline.
//   could make it that way.



// would like to declare stages with it's 'init' stage?
//  but that could assign the declared local variables in the initial closure.
//   a bit more closure engineering seems appropriate.

// takes a function
//  that function returns the object or array


/*

    // so if stages is called with a single function as its sig.



    stages(() => {

        let var1, var2;

        return {
            'first': fn,
            'second': fn,
            'third': fn
        }


    })

*/



const multi_logs_2 = stages({
    first: (a1, a2, a3) => {
        console.log('first stage console log');
        console.log('a1, a2, a3', a1, a2, a3);
        return 'first stage result';
    },
    second: (a1, a2, a3) => {
        console.log('second stage console log');
        console.log('a1, a2, a3', a1, a2, a3);
        return 'second stage result';
    },
    third: (a1, a2, a3) => {
        console.log('third stage console log');
        console.log('a1, a2, a3', a1, a2, a3);
        return 'third stage result';
        // the third stage result is the result for the whole thing.
    }
})


// want the nicest / most convenient way of declaring stages.


// And this nicer syntax is working now.
//  The local variables will really help.
//   However, data transfer between stages will help too, may have better precision in some ways.







const multi_logs_3 = stages(() => {
    let local1, local2;



    // this way of declaring it should work... not sure why its not.

    return {
        first: (a1, a2, a3) => {
            console.log('first stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'first stage result';
        },
        second: (a1, a2, a3) => {
            console.log('second stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'second stage result';
        },
        third: (a1, a2, a3) => {
            console.log('third stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'third stage result';
            // the third stage result is the result for the whole thing.
        }
    }

});


// if one of the stages were counting....
//  that would be an interesting test of incorporating an observable



const logs_and_more_1 = stages(() => {
    let local1, local2;

    // Seems simple enough to use now.
    //  Could try further type checking / mfp definition inside.
    //   could make for another example, or a few more.


    // mfp, and define a simple grammar for the stages' functions.
    //  would help to check that the program / function is working as expected.

    // more work, egs and docs on mfp?
    //  grammar examples, feature by feature?


    // using some mfp definitions for some simple functions in here would help

    // also interested in examples that throw errors - and marking them as such.



    // this way of declaring it should work... not sure why its not.

    return {
        first: (a1, a2, a3) => {
            console.log('first stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'first stage result';
        },
        second: (a1, a2, a3) => {
            console.log('second stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'second stage result';
        },
        third: (a1) => {
            console.log('third stage is about to return a counter obs');
            return counter();
        },
        fourth: (a1, a2, a3) => {
            console.log('fourth stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'fourth stage result';
            // the third stage result is the result for the whole thing.
        }
    }

});


// and using mfp to declare a multi-stage function?
//  should be quite simple.
//   only want to auto-combine things a bit later, once some things have been proven to work as their own separate pieces of functionality.


// for the moment, the stages fn is built on top of obs.


// Automatic loggings of stage timings will help.
//  data rates?
//   will be very useful for measuring download / disk access rates.

// Integrated benchmarking will be very useful in apps.






const logs_and_more_2 = stages(() => {
    let local1, local2;

    // Seems simple enough to use now.
    //  Could try further type checking / mfp definition inside.
    //   could make for another example, or a few more.


    // mfp, and define a simple grammar for the stages' functions.
    //  would help to check that the program / function is working as expected.

    // more work, egs and docs on mfp?
    //  grammar examples, feature by feature?


    // using some mfp definitions for some simple functions in here would help

    // also interested in examples that throw errors - and marking them as such.

    



    // and naming the functions when they are given like this?
    //  may as well have stages do that automatically.



    // this way of declaring it should work... not sure why its not.


    // using mfp here can help to declare data types.
    //  first function accepts anything
    //   returns string.




    return {
        first: mfp({

            // easily specifying a single sig?
            //  or a pattern for a valid sig?


            return_type: 'string'
        }, (a1, a2, a3) => {
            console.log('first stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'first stage result';
        }),

        // specify the grammar here so that the 2nd only accepts a single string as the param....
        //  run-time type checking.

        // more examples on mfp type checking?
        //  sig or deep sig?


        second: mfp((a1, a2, a3) => {
            console.log('second stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'second stage result';
        }),
        third: mfp((a1) => {
            console.log('third stage is about to return a counter obs');
            return counter();
        }),
        fourth: mfp((a1, a2, a3) => {
            console.log('fourth stage console log');
            console.log('a1, a2, a3', a1, a2, a3);
            return 'fourth stage result';
            // the third stage result is the result for the whole thing.
        })
    }

});


// Want to try observables as the intermediate functions.





console.log('multi_logs', multi_logs);

const o_stages = logs_and_more_2();

console.log('o_stages', o_stages);


// So listening to observables within stages is easy enough.

o_stages.on('stage', evt_stage => {
    console.log('evt_stage', evt_stage);

    const stage_name = evt_stage.name;

    const stage_value = evt_stage.value;

    const ts = tf(stage_value);

    if (ts === 'O') {
        stage_value.on('next', data => {
            console.log('stage_name next data', data);
        })
    }


    // The value of a stage could actually be an observable.
    //  Try this with a counter.


});

(async() => {
    const res_multi_logs = await o_stages;
    console.log('res_multi_logs', res_multi_logs);

    // nice, it's working.

})();


// stage-complete event?
//  could be a useful part of the architecture.

