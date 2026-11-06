const person = {
    name : "Prakalp" ,
    introduce:function(){
        return ("Hello " +this.name);
        
    }
}


const intro = person.introduce.bind(person);
// console.log(intro());

//task2

function introduce1(name) {
    console.log("hello "+this.name);
     

}

const newname = {name : "shailu"}
const newname1 = {name : "Prakalp"}
// introduce1.call(newname1)

// task3

function sum(a, b) {
    return (a + b) * this.multiplier;
}

const obj1 = {
    multiplier: 2
};

const obj2 = {
    multiplier: 5
};

console.log(sum.apply(obj1,[2,3]));
console.log(sum.call(obj1,[2,3]));
 


 
