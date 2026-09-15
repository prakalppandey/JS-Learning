function delayMessage(){
    console.log("start");
    setTimeout(() => {
        console.log("Message after 2 seconds");
            }, 2000);

            console.log("End");
    
}
delayMessage();

//Practice 2

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

