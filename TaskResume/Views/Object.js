let myDate = Date();
console.log(myDate);

// let person = {
//     name:"Arman",
//     age:21,
//     status:function(){
//         console.log("Employee is in working stage");

//     }
// }
// person.status();



let myCollege = {
    name: "RMC",
    location: "Saharsa",
    student: function () {
        console.log("Student is studying in RMC");
    }

}
myCollege.student();



let myHobby = {
    name: "Playing Cricket",
    location: "Saharsa",
    hobby: function () {
        console.log("Arman is playing cricket");
    }
}
myHobby.hobby();




let travel = {
    name: "Arman",
    location: "Ayodhya",
    travel: function () {
        console.log("Arman is traveling to Ayodhya");
    }
}
travel.travel();

// Create a Book object that stores the title, author, and pages. Implement a method getSummary() that returns a string summarizing the book's details.
let book = {
    title: "Pokimon",
    author: "Satoshi Tajiri",
    pages: 200,
    getSummary: function () {
        return this.title, this.author, this.pages

    }
}
console.log(book);

book.getSummary();

// Create a Person object that contains firstName, lastName, and a method getFullName() that returns the full name of the person
// let person={
//     firstName:"Arman",
//     lastName:"Verma",
//     getFullName:function(){
//         return this.firstName + " " + this.lastName;
//         }
//         }
//         // Call the getFullName() method on the person object
//         console.log(person.getFullName());



// Create an object named Car that has properties make, model, and year. Add a method getCarInfo() that returns a string describing the car.


// Question 1

let car = {
    make: "Tata",
    model: "Range Rover",
    year: 2024,
    getCarInfo: function () {
        return this.make + " " + this.model + " " + this.year;
    }
}
// Call the getCarInfo() method on the car object
console.log(car.getCarInfo());
// hello js



// Create an object named Rectangle with properties width and height. Add a method getArea() that returns the area of the rectangle.


// Question 2

let rectangle = {
    width: 10,
    height: 20,
    getArea: function () {
        return this.width * this.height;
    }
}
// Call the getArea() method on the rectangle object
console.log(rectangle.getArea());



// Create an object Person with properties firstName, lastName, and age. Add a method introduce() that returns a string introducing the person by their full name and age.


// Question 3

let person = {
    firstName: "Arman",
    lastName: "Verma",
    age: 30,
    getintroduce: function () {
        return "Hello, my name is " + this.firstName + " " + this.lastName + "  I am " + this.age + " years old.";

    }
}
// Call the introduce() method on the person object
console.log(person.getintroduce());






// Create a Phone object with properties brand and price. Add a method getDetails() that returns a string stating the brand and price of the phone.


// Question 4

let phone = {
    brand: "Samsung",
    price: 15000,
    getDetails: function () {
        return "Brand: " + this.brand + ", Price: $" + this.price;
    }
}
// Call the getDetails() method on the phone object
console.log(phone.getDetails());




