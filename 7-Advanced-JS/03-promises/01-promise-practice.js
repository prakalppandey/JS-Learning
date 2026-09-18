function orderPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pizza ready!")
        }, 2000);
    })
}


// Pracice 2 

function payment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Payment failed");

        }, 1000);

    }).catch((error) => {
        console.log(error);
    })

}

// payment()

//practice 3
function processOrder() {
    return new Promise((resolve, reject) => {
        resolve("Order Placed");
    }).then((resolve) => {
        console.log(resolve);
        return "Payment successful"
    }).then((payment) => {
        console.log(payment);
        return "Food preparing"
    }).then((prep) => {
        console.log(prep);
        return "Food delivered"
    }).then((delivered) => {
        console.log(delivered);
    })

}
// processOrder()

//Practice 4 — Async/Await
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Prakalp",
                age: 29
            })
        }, 1000);
    })
}

async function doit() {
    const result = await getUser()
    console.log(result.name , result.age);
}

// doit()

//practice 5
function checkPayment(){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
       reject("payment failed")  
    }, 1000);
   
})
}

async function runIt() {
      try {
        await checkPayment();
    } catch (error) {
        console.log(error);
    }
}



// runIt()

//practice 6
function login(isValid){
    return new Promise((resolve,reject)=>{
        if (isValid){
            resolve("Login successful")
        }
        else{
            reject("Invalid credentials")
        }
    })
}

async function runIt(isValid) {
      try {
    const result = await login(isValid);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
    
}

// runIt(true)

//Practice 7 — Final Promise Challenge

function processPayment(amount){
return new Promise((resolve, reject)=>{
    if (amount>0){
        setTimeout(() => {
            resolve("Payment of ₹"+ amount +" successful")
        }, 1000);
    }
    else{
        reject("Invalid amount")
    }
})
}

async function doit(amount) {
    try{
        const result = await processPayment(amount)
            console.log(result);
            
    }    
    catch(error){
        console.log(error);
        
    }
}

doit(100)