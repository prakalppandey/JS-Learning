function simulateAsyncTask(){
    console.log("Task started");
    
    setTimeout(() => {
        console.log("Task finished");
        
    }, 2000);
}

//simulateAsyncTask()

// task 2
function simulateMultipleTasks(){
    setTimeout(() => {
        console.log("Task [1] finished");
        
    }, 1000);
    setTimeout(() => {
        console.log("Task [2] finished");
        
    }, 2000);
    setTimeout(() => {
        console.log("Task [3] finished");
        
    }, 3000);
}

//simulateMultipleTasks()

// task 3

function fetchDataWithCallback(callback){
    setTimeout(() => {
        callback("Fetched data")
        
    }, 2000);

}

function Fetch(data){
    console.log(data);
    
}

fetchDataWithCallback(Fetch)