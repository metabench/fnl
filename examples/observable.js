const {obs} = require('../old/fnl');

const {mfp} = require('lang-mini');

const counter = require('./counter');

// 

// observable defining function
//  observable inner
//  o_fn
//  

// mfp, no params?
//  would still wrap the function
//  would be a step towards giving an options object or extending the syntax.
//   it would know that it's not polymorphic if just given 1 fn.
// generally useful function syntax should go in mfp
//  i'll see if there is anywhere it doesn't fit.
//   eg can say that it's a pure function. name it.

// Could be time for the observable fp.
//  want to take these count results, modify them, pass them on.
//  want it to be expressed very simply.

// Could also look into what logs can be produced.

// observable system for declaring and running functions

// standard testing objects?

// want to use the counter in a few places.
//  seems like now the time is good to do more work on ofp.

// have ofp process the counting function.

// wont be so hard to do.





const eg_counting = () => {

    // could make a 'counter' creation function
    //  not sure how to make the examples available to other packages.

    console.log('eg_counting');
    //const max = 10;
    //const delay = 1000; // ms

    // does mfp wrap an observable OK?
    //  What does it do?
    // An observable itself is not a function.

    //  an observable producer function is.


    // param ordering by type....

    // give a string name as a string param?
    //  'counter'?
    //  

    // name and return type?
    //  as an array?
    //  all as a string with multiple words

    // mfp features for handling strings with multiple words, breaking them down?
    //  w signature type for word. S for sentence?

    // put in roadmap.

    //return_type: 'observable => n'
    //return_subtype: 'n'

    // simple return_type
    //  then return_subtype could be very useful for further understanding / definition

    // use counter for a few ofp tests and examples.

    

    const o_counter = counter();
    console.log('!!o_counter', !!o_counter);

    // Need tests and examples on Evented_Class too.

    // events not being raised????
    o_counter.on('next', data => {
        console.log('o_counter data', data);
    })
    o_counter.on('complete', (complete_data) => {
        console.log('o_counter complete complete_data:', complete_data);
    })
}
eg_counting();
