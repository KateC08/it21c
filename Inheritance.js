class Person {
    //Private Data Fields
    #name;
    #age;
    #gender;
    //constructor with three parameters
    constructor(name, age, gender) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }
    //getters method
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get gender() {
        return this.#gender;
    }

    //Method that Displays output via console.log
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);

    }

    //Method that Displays output via HTML
    displayInfoViaHTML() {
        const personElement = documentElementById('person1');
        personElement.innerHTML = `
          <strong>Name: </strong> ${this.name} <br>
          <strong>Age: </strong> ${this.age} <br>
          <strong>Gender: </strong> ${this.gender} <br>
        `;
    }
}

class Student extends Person {
    
}
//Declaring an instance to access the person class
const person1 = new Person('kie', 19, 'Female');
