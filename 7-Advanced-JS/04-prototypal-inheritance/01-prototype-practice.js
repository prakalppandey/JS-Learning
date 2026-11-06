const animal = {
    type: "animal" ,
    speak() {
        console.log("animal make a soung");

    }
}

const dog = Object.create(animal)
dog.name = "bruno";
console.log(dog.name);  // Bruno
console.log(dog.type);  // Animal

// Practice 2
const animal2 = {
    type :"Animal",
    speak(){
        return "Animal makes a sound";
         
    }
}

const dog1 = Object.create(animal2)

console.log(dog1.speak());
console.log(dog1.type);

 
