// • Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }
}
const p1 = new person('king', 45);
p1.greet();

// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }
    updateAge(newage) {
        this.age = newage;
        console.log(`the updated age is ${newage}`);
    }
}
const p2 = new person1('king', 45);
p2.greet();
p2.updateAge(17);
// Activity 2: Class Inheritance

// • Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class student extends person {
    static studentCount = 0;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        student.studentCount++;
    }
    static getStudentCount() {
        console.log(student.studentCount);
    }


    greet() {
        console.log(`hello my name is ${this.name} and my age is ${this.age} and my id is ${this.studentId}`);
    }
    //task5 
    static display() {
        console.log("hello world");
    }
}
const p3 = new student('hello', 45, 78);
//p3.getStudentId();
// • Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
p3.greet();

// Activity 3: Static Methods and Properties

// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(student.display());


// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
const p4 = new student('he', 45, 79);
const p5 = new student('shello', 45, 178);
console.log(student.getStudentCount());
// Activity 4: Getters and Setters

// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class NPerson {
    constructor(Fname, Laname) {
        this.Fname = Fname;
        this.Laname = Laname;
    }
    get fullname() {
        console.log(this.Fname, this.Laname);
    }
    //task8
    set fullname(name) {
        const [Fname, Laname] = name.split(' ');
        this.Fname = Fname;
        this.Laname = Laname;
    }
}
const p6 = new NPerson('king', 'khan');
console.log(p6.fullname);
// • Task 8: Add a setter method to the Person class to update the name properties ( firstName and lastName). Update the name using the setter and log the updated full name.
p6.fullname = 'mohammed kaif';
p6.fullname;
// Activity 5: Private Fields (Optional)

// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance
    constructor(initialamount) {
        this.#balance = initialamount;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${amount} is deposited in Your Account and Your New balance Is ${this.#balance}`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`${amount} is  withdrawn from  Your Account and Your New balance Is ${this.#balance}`);
        }
    }
    getBalance(){
        console.log(`yout balance is ${this.#balance}`);
    }
}



// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const bank =new Account(1500);
bank.getBalance();
bank.deposit(750);
bank.withdraw(250);
bank.getBalance();