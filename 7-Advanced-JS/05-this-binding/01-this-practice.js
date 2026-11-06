const user = {
    name : "rahul" ,
    introduce() {
        return "My name is" + this.name
    }
}

const friend = {
    name :" Amit"
} 
const introduceFriend = user.introduce.bind(friend)
console.log(introduceFriend());


// Practice 2 

const cart = {
    user: "Rahul",
    items: 3,

    showCart() {
        console.log(`${this.user} has ${this.items} items`);
    }
};

const anotherUser = {
    user: "Amit",
    items: 5
};

const totalitem = cart.showCart.bind(anotherUser)
console.log(totalitem());
