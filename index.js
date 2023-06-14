// I need to create 3 classes (Cat, Dog, Bird) that all have the same properties 
// (name and sex). Each class will have a method called "speak" attached to it. Cat will have
// "name says meow!", Dog will have "name says woof!", and Bird will have
// a conditional input. If the instance of Bird is male, speak returns 
//"It's me! name, the parrot!". If it is not male, speak returns "name says squawk!".


class Cat {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name
        this.sex = sex 
    }
    speak() {
        if (this.sex === "male" ) {
            return `It's me! ${this.name}, the parrot!`
        }
        else {
            return `${this.name} says squawk!`
        }
    }
}