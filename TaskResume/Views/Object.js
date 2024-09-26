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



// Create an object Student with properties name and marks (an array of numbers). Add a method addMark(mark) to add a new mark to the marks array and calculateAverage() to calculate and log the average of the marks.



// Question 3

const Student = {
    name: "Alice",
    totalMarks: 0,
    numberOfMarks: 0,

    // Method to add a new mark and update the total and count
    addMark(mark) {
        this.totalMarks += mark;
        this.numberOfMarks++;
        console.log(`Added mark: ${mark}`);
    },

    // Method to calculate the average of the marks
    calculateAverage() {
        if (this.numberOfMarks === 0) {
            console.log(`${this.name} has no marks yet.`);
        } else {
            const average = this.totalMarks / this.numberOfMarks;
            console.log(`${this.name}'s average mark is ${average}`);
        }
    }
};


Student.addMark(85);
Student.addMark(90);
Student.calculateAverage();






// Create an object Laptop with properties brand, batteryLife (in hours), and currentBattery (in percentage). Add methods charge() to set the battery to 100% and use(hours) to reduce the battery based on usage. Log the current battery status after each action.



// Question 4


const Laptop = {
    brand: "Asus",
    batteryLife: 4,
    currentBattery: 100,  // 100% battery

    charge() {
        this.currentBattery = 100;
        console.log(`${this.brand} laptop is fully charged.`);
    },

    use(hours) {
        const usagePercentage = (hours / this.batteryLife) * 100;
        this.currentBattery -= usagePercentage;

        if (this.currentBattery < 0) {
            this.currentBattery = 0;
        }

        console.log(`${this.brand} laptop has ${this.currentBattery}% battery left after using for ${hours} hours.`);
    }
};

Laptop.charge();
Laptop.use(2);
Laptop.use(8);



// Create an object LibraryBook with properties title, author, and isAvailable (a boolean indicating if the book is available). Add a method checkOut() that changes isAvailable to false, and a method returnBook() that changes isAvailable to true. Use console.log() to show the book's availability status after each action.


// Question 1

let libraryBook = {
    title: "Essential English Grammear",
    author: "Raymond Murphy",
    isAvailable: true,
    checkOut: function () {
        this.isAvailable = false;
        console.log(this.title + " by " + this.author + " is not available.");
    },
    returnBook: function () {
        this.isAvailable = true;
        console.log(this.title + " by " + this.author + " is available.");
    }
}
// Check out the book
libraryBook.checkOut();
// Return the book 
libraryBook.returnBook();



// Create an object SmartBulb with properties brand, isOn (a boolean), and brightness (a number between 0 and 100). Add methods turnOn(), turnOff(), and adjustBrightness(value) to modify the bulb's status and brightness level. Use console.log() to show the bulb's status after each action.


// Question 2

let smartBulb = {
    brand: "skska",
    isOn: false,
    brightness: 0,
    turnOn: function () {
        this.isOn = true;
        console.log(this.brand + " bulb is on.");
    },
    turnOff: function () {
        this.isOn = false;
        console.log(this.brand + " bulb is off.");
    },
    adjustBrightness: function (value) {
        if (value >= 0 && value <= 100) {
            this.brightness = value;
            console.log(this.brand + " bulb brightness is " + this.brightness + "%");
        }
    }
}
// Turn on the bulb
smartBulb.turnOn();
// Turn off the bulb
smartBulb.turnOff();
// Adjust the brightness to 50%
smartBulb.adjustBrightness(50);
// Adjust the brightness to 150%
smartBulb.adjustBrightness(150);
// Adjust the brightness to 0%
smartBulb.adjustBrightness(0);







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function determineAgeGroup(age) {
    if (age >= 0 && age <= 12) {
        return "Child";
        } else if (age >= 13 && age <= 19) {
            return "Teenager";
            } else if (age >= 20 && age <= 64) {
                return "Adult";
                } else if (age >= 65) {
                    return "Senior";
                    }
                    }
                    // Call the function with a test age
                    console.log(determineAgeGroup(25)); // Output: Adult
                    console.log(determineAgeGroup(70)); // Output: Senior



   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////               
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
        } else if (score >= 80 && score < 90) {
            return "B";
            } else if (score >= 70 && score < 80) {
                return "C";
                } else if (score >= 60 && score < 70) {
                    return "D";
                    } else if (score < 60) {
                        return "F";
                        } else {
                            return "Invalid score.";
                            }
                            }
                            // Test the function with a score
                            console.log(getGrade(85)); 
                            console.log(getGrade(55)); 
                            console.log(getGrade(95));
                            console.log(getGrade(75));
                            

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                             function checkEvenOdd(number){
                                if (number % 2 == 0) {
                                    return "Even";
                                    } else {
                                        return "Odd";
                                        }
                                        }
                                        // Test the function with a number
                                        console.log(checkEvenOdd(10)); // Output: Even
                                        console.log(checkEvenOdd(11)); // Output: Odd




                                        


                            
                            




















