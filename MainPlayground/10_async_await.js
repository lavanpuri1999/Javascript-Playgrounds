// async function always returns a Promise

// await is an alternative to handle the value resolved by a Promise, 
// just like we did it with .then

// await can only be used inside an async function


function fakeApiCall(name, time) {
   return () => new Promise((resolve, reject) => {
        setTimeout(() => { 
            if(name === "Diya") reject(new Error('Kid')) 
            else resolve(name)
        }, 1000)
   });
}

const a = [fakeApiCall("Lavan"), fakeApiCall("Diya"), fakeApiCall("Kush")];

async function handleAllCalls() {
    for(let i = 0; i < a.length; i++) {
        try {
        const str =  await a[i]();
        console.log(str) 
        }
        catch (err) {
            console.log(err)
            break;
        }
    }    
}

// handleAllCalls();

function handleAllPromisesSequentially() {
    let p = Promise.resolve();
    // Important: Promise chaining using a promise variable outside the for loop
    for (let i = 0; i < a.length; i++) {
        p = p.then(() => a[i]())
             .then(str => {
                 console.log(str);
             });
    }
    p.catch(err => {
        console.log('Stopped due to error:', err.message);
    });
}

handleAllPromisesSequentially();

// PROMISES

// Promise.all([p1, p2, p3]) 
// All API calls are made parallely 
// p1 -> 3 secs
// p2 -> 2 secs
// p3 -> 1 secs

// After 3 secs, it will return all the results, [val1, val2, val3]
// As soon as any of these promises gets rejected, promise.all will return an error

// Promise.allSettled
// In case of all resolved, it works the same as Promise.all
// In case of failures, it will wait for all promises to get settled

// Promise.race([p1, p2, p3])
// As soon as first promise is settled, it will return the result
// So it will result result of p3
// If p3 fails, it will resturn result of the first settled promise, i.e. p3, i.e. error

// Promise.any[(p1, p2, p3)]
// Similar to race, but will wait for first resolved promise (successful)
// if p3 fails, it will wait for p2, when p2 resolves successfully, it will return that value
// if all fail, it will return an aggregate error, which will be array of all 3 errors