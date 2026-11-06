function Animal(){
   
}
function Dog(){
   
}

Animal.prototype.makeSound = function() {
    return ("Animal makes a sound");
};

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = function(){
     return ("bark");
    
}



const dog1 = new Dog()
// console.log(dog1.makeSound());


// task 2
function Shape(color){
    this.color = color; 
}

Shape.prototype.getColor = function () {
    return this.color;
} 

function Rectangle(color ,width , height){
     Shape.call(this, color);
     this.width = width;
      this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.getArea = function(){
    return this.width*this.height
}

const rect1 = new Rectangle("red", 3, 3);

console.log(rect1.getColor());
console.log(rect1.getArea());


