function createCounter(){
    let count = 0 ;
    return function () {
        count++;
        return count;
    }
    
} 
const counter = createCounter()
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


// task 2
function rateLimiter(fn, limit) {
    let allowed = true;

    return function () {
        if (allowed) {
            fn();

            allowed = false;

            setTimeout(() => {
                allowed = true;
            }, limit);

        } else {
            return "Rate limit exceeded";
        }
    };
}

function login() {
    console.log("Login successful");
}

const limitedLogin = rateLimiter(login, 2000);

console.log(limitedLogin());
console.log(limitedLogin());

// task 3 
function memoize(fn){
    let cache = {5:25}
    return function (num) {
        if(num in cache){
            return cache[num];
        }
        else{
            const result = fn(num)
            cache[num] = result;
            return result
        }
    }
}
 function square(num){
    console.log("Calculating...");
    return num*num
}


const memoizeans = memoize(square)
console.log(memoizeans(5));
console.log(memoizeans(15));
console.log(memoizeans(25));
console.log(memoizeans(5));
console.log(memoizeans(15));
 

