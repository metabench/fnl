


// Could have one overriding fnl function?
//  Not yet.


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

const lang = require('lang-mini');
const Evented_Class = lang.Evented_Class;
const get_a_sig = lang.get_a_sig;

// we give it a singer inner function as its param


// Writing the inner observable function...
//  cll the inner function with functions found here.


// observable((next, complete, error) => {
// do stuff, raise events through functions here.
//})

// Not so sure we want it like this...

// Filter observable
//  Could make a new observable, or apply the filter to the same one.

// filter, .filtered.

// could apply a list of filters.


const observable = (fn_inner, always_plural) => {

    // So that observable(orig_observable) = orig_observable

    if (fn_inner.__type_name === 'observable') {
        return fn_inner;
    }


    // call the inner function, it assigns event triggers / raises


    // and get three functions coming in


    // on the next tick?
    let res = new Evented_Class();
    // Not sure about this.
    //  allows functions that resolve immediately to be thenable.
    //setImmediate(() => {

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
        //console.log('last_data', last_data);
        if (typeof last_data !== 'undefined') {
            res.raise('complete', last_data);
        } else {
            res.raise('complete');
        }

        //});


    }, error => {
        res.raise('error', error);
    });

    // and raise pause events too.

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


    res.next = handler => {
        res.on('next', handler);
        return res;
    }
    res.data = res.next;

    res.complete = handler => {
        // then handler has not been set up yet?
        // 

        //setImmediate(() => {

        //console.log('res complete');

        res.completed = true;

        res.on('complete', handler);
        //});


        return res;
    }
    res.done = res.end = res.complete;
    res.error = handler => {
        res.on('error', handler);
        return res;
    }


    res.filter = (fn_filter) => {
        this.filters = this.filters || [];
        this.filters.push(fn_filter);
        return res;
    }

    // split observable
    //  will return 2 observables

    // validation split
    res.split = (fn_split) => {
        // listen to own events.
        let obs_true = observable((next, complete, error) => {
            // no need for responders here?
            return [res.stop, res.pause, res.resume];
            // define stop, pause resume functions.
            // need to get the source to do that.
        })
        let obs_false = observable((next, complete, error) => {
            return [res.stop, res.pause, res.resume];
        });

        // without these functions here?

        res.next(data => {
            let v = fn_split(data);
            if (v) {
                // raise it on true obs res
                obs_true.raise('next', data);
            } else {
                obs_false.raise('next', data);
            }
        });

        res.complete(() => {
            obs_true.raise('complete');
            obs_false.raise('complete');
        })
        res.error(err => {
            obs_true.raise('error', err);
            obs_false.raise('error', err);
        })
        return [obs_true, obs_false];
    }

    res.then = (handler) => {

        // the whole thing in set immediate?

        console.log('then');
        // what if it's already resolved?



        let res_all = [];
        // but if next has not hapenned?
        let had_next = false;
        //console.log('had_next', had_next);
        res.next(data => {
            res_all.push(data);
            had_next = true;
        });

        // but only one entry

        console.log('res.completed', res.completed);

        if (res.completed) {
            if (had_next && res_all.length > 0) {
                if (res_all.length > 1 || always_plural) {
                    handler(res_all);
                } else {
                    handler(res_all[0]);
                }

                
            } else {
                handler(last);
            }
        } else {

            res.complete(last => {
                //console.log('complete last', last);
                //console.log('had_next', had_next);
                //console.log('res_all', res_all);
                if (had_next && res_all.length > 0) {
                    if (res_all.length > 1 || always_plural) {
                        handler(res_all);
                    } else {
                        handler(res_all[0]);
                    }

                    
                } else {
                    handler(last);
                }
            })
        }

        // and error handling
    }

    res.__type_name = 'observable';
    //})




    // don't want this 'target' value added to the object.
    //  useful in DOM processing but not elsewhere.

    //fn_inner((next, complete, error) => {

    //});

    //fn_inner(next, complete, error);

    // A pause function?
    //  Not sure where that would go.

    // 'filter' implies to do it on the same object.
    // 'filtered' implies it's a new observable

    // same object filtering would be faster.


    // Maybe don't raise them inside anyway

    // could avoid the [] requirement when it can't stop, pause, resume






    // a then function?
    //  converts to promise, calls the promise's .then function


    // res stop
    //  stop sending the data on
    //  if send the message that the observation has stopped, which means that the data source coudl be stopped.

    return res;
}

// fcall
//  an enhanced way of calling a function

const seq = (q_obs) => {
    return observable((next, complete, error) => {
        let c = 0, obs_q_item;
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
    let arr_all = [];

    //console.log('obs_to_cb callback', callback);
    //console.trace();

    obs.on('next', data => arr_all.push(data));
    obs.on('error', err => callback(err));
    obs.on('complete', last => {
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
        })
    } else {
        return _prom;

    }
}



// Data_Source
//  a closure where 3 functions next, complete, error can be called.




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




    //let ds_

    // observables / data sources that apply to something else?
    //  anyway, can use this observable for the moment to improve some server code.

    // Data source - gets functions to call, returns functions.
    //  The observable manages that.

    // Maybe return a data_source itself? or the data source is simply a function being executed.
    //  

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
                next({ 'v': v });
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

        /*

        obs.then(res => {
            console.log('res', res);
        })
        */

        (async () => {
            let res = await obs;
            console.log('awaited res', res);
        })();


    }
    test_then();


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

            console.log('data', data);

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

    //test_filter();





    /*

    obs.next(data => {

        console.log('data', data);

        if (data === 8) {


            obs.delay(5000);



            // works nicely here.
            // want listeners for the pause and resume events.


            // That would be convenient syntax

            / *

            obs.pause();
            console.log('paused');
            setTimeout(() => {
                console.log('wait over');
                obs.resume();
            }, 2000);

            * /


        }
    }).end(() => {
        console.log('end');
    })

    */



    /*

    obs.on('next', data => {
        console.log('data', data);

        // stop ir if data is 8 or more...

        if (data === 8) {
            obs.pause();
            console.log('paused');
            setTimeout(() => {
                console.log('wait over');
                obs.resume();
            }, 2000);
        }

        //obs.stop();

    })
    */
    /*
     obs.on('complete', () => {
         console.log('complete');
     });
     */

} else {

}

module.exports = {
    'observable': observable,
    'seq': seq,
    'sequence': seq,
    'sig_obs_or_cb': sig_obs_or_cb,
    'cb_to_prom_or_cb': cb_to_prom_or_cb,
    'prom_or_cb': prom_or_cb,
    'obs_or_cb': obs_or_cb,
    'unpage': unpage
}

