function fetchUser() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("User data fetched");
            
        }, 1000);
    })

}

function fetchPosts() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("User data fetched");
            
        }, 1000);
    })

}

async function fetchAllData() {
    const results = await Promise.all([
    fetchUser(),
    fetchPosts()
    
    
]);
console.log(results);
}

// fetchAllData()

//  task2

function fetchSuccess(){
return new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("done!!")
    }, 1000);
})
}
function fetchFailure(){
return new Promise((resolve,reject) =>{
    setTimeout(() => {
        reject(new Error("Failed!!"));
    }, 1000);
})
}

async function handlePromises(){
    
    try {
        const result = await Promise.all([fetchSuccess(),fetchSuccess()])
        console.log(result);
        
        
    } catch (error) {
        console.log(error);
        
    }
}

// handlePromises()

// Task 3

async function fetchWithTimeout(promise, timeout) {

    let timer;

    const timeoutPromise = new Promise((resolve, reject) => {
        timer = setTimeout(() => {
            reject(new Error("Timeout exceeded"));
        }, timeout);
    });

    try {
        const result = await Promise.race([
            promise,
            timeoutPromise
        ]);

        return result;

    } catch (error) {
        return error.message;

    } finally {
        clearTimeout(timer);
    }
}


// Test 1: Data arrives before timeout

const dataPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 2000);
});

fetchWithTimeout(dataPromise, 3000)
    .then(console.log);


// Test 2: Timeout occurs before data arrives

const slowPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Slow data fetched");
    }, 5000);
});

fetchWithTimeout(slowPromise, 2000)
    .then(console.log);
