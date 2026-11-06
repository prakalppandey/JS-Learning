function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Rahul", age: 25
            })
        }, 2000);
    })
}

async function displayUser() {
    try {
        const data = await getUser()
    console.log(data);

    } catch (error) {
        console.log("error");
        
    }
        
}
//displayUser()

//Practice 2

function getUser1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Rahul"
            })
        }, 2000);
    })

}

function getCoins(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                coins : 500
            })
        }, 1000);
    })

}

async function displayGameData() {
    try {
        const [coins,user] = await Promise.all ([getCoins(),getUser1()])
        console.log(coins);
        
        console.log( user.name+" has "+coins.coins +" coins");
        
    } catch (error) {
        console.log("error");
        
    }
}

// displayGameData()


// Practice 3 

function getUser2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Rahul"
            })
        }, 2000);
    })

}

function getCoins2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({
                error : "Coins service failed"               
            })
        }, 1000);
    })

}

async function displayGameData() {
    try {
        const [coins,user] = await Promise.all ([getCoins2(),getUser2()])
        console.log(coins);
        
        console.log( user.name+" has "+coins.coins +" coins");
        
    } catch (error) {
        console.log(error.error);
        
    }
}

displayGameData()
