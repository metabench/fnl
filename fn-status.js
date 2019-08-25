// Status - Function Wrapper to enable the status of a function call to be set.
//  event-driven programming for the most part.





// 18/06/2019 - This is being made to support the stages() function.
//  Want a more coherent abstract API for specifying that a function call has reached a particular status

// Status of particular arguments in input?
// Status of output object?




// while input and output are running...
//  async-io?
//  or just one of them...
//  async-i
//  async-o

// Just being able to set the status, with substatuses will be useful.






// those are events really

// input-start
// input-data
// output-start
// output-data
// input-data
// output-data
// input-data
// output-data
// input-complete
// output-complete

// input-complete



// Ongoing statuses...

// pre, main, post

// then main substatuses...

//  regarding both input and output here?

//  streaming functions can take streaming input, provide streaming output.


// Not going to provide it with valid statuses right now.
//  but need to provide the set status event inside the function.
//   this could be a relatively simple example of that pattern.

// 



// do we want a status callback in the definition?


//  original function here, with callback?

// provide a closure where set_status as well as the normal args are given?
//  want to write it 


// on calling...???


// the status wrapper function returns???


//

// having it within a closure where set_status is available?




// status(set_status, (normal_args) => {

    // and we can use set_status within this function body.




//})

/*
// status((set_status) => {

    return () => {}

}, () => {

//});

*/


// or wrapping the fn call for its status?
//  maybe wouldnt work like this with normal function calls?
// need a callback for status changes too?



// maybe don't need this status function right now.
//  not clear exactly what it is and what it's for.





const fn_wrap_status = (fn) => {


    //

    // a little like observable?

    // or want the same function as before, but just with set_status in its scope?




}





/*

    Can wrap a function call so we set it's status, throughout the operation of the function.

    // This will provide a set_status function.

    // Keep things within a more functional way for the moment.
    //  The function calls could be used to build up status log objects.


    // Act differently on observables?
    // Want it to work on normal functions, could work differently on observable returning functions.


    set_status('input');
    set_status('input', 'transform', 1);
    // sub-status levels could be really useful.
    //  consider that there is a main status string, but possible sub-status levels too.







    set_status('pre');      ???
    set_status('ready');





*/