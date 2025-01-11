class Person {

    //Data fields
    #name;
    #age;
    #gender;
    #height;
    #weight;

    constructor(name, age, gender, height, weight) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
        this.#height = height;
        this.#weight = weight;
    }

    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    get gender() {
        return this.#gender;
    }
    get height() {
        return this.#height;
    }
    get weight() {
        return this.#weight;
    }

    //Displays output via Console.log
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Height: " + this.height);
        console.log("Weight: " + this.weight);

         //Displays output via Web page
         const info= `
            Name: ${this.name} <br>
            Age: ${this.age} <br>
            Gender: ${this.gender} <br>
            Height: ${this.gender} <br>
            Weight: ${this.weight} <br>
         `;
        document.getElementById('person3').innerHTML = info;
    }

   
}

//Creating an instance of the Person Class
const person3 = new Person('keyt', 19, 'Female', '4/11', 45);

//Calling method
person3.displayInfo();
