/*class Person {
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

        const p1 = `
        Name:  ${this.name} <br>
        Age:  ${this.age} <br>
        Gender: ${this.gender} <br>
        `;

        document.getElementById('st').innerHTML += p1;
    }

}

class Student extends Person {

    //Constructor
    constructor(name, age, gender, year, degree) {
        super(name, age, gender);
        this.year = year;
        this.degree = degree; 
    }

    //Overriding the displayInfo method from Person class
    displayInfo() {
        
        super.displayInfo();

        console.log("Year: " + this.year);
        console.log("Degree: " + this.degree);

        
        const s1 = `
            Year: ${this.year} <br>
            Degree: ${this.degree} <br>
        `;

        document.getElementById('st').innerHTML += s1;
    }
}
//Declaring an instance to access the Student class
const student1 = new Student('kie', 19, 'Female', '2nd year', 'BSIT');

//Calling methods
student1.displayInfo();*/

class Person {
    //Private Data Fields
    #name;
    #age;
    #gender;

    constructor(name, age, gender) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
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

    displaysInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);

        const p4 = `
           Name: ${this.name} <br>
           Age: ${this.age} <br>
           Gender: ${this.gender} <br>
        `;
        document.getElementById('st').innerHTML = p4;
    }
}

class Student extends Person {

    constructor(name, age, gender, year, course, gwa) {
        super(name, age, gender);

        this.year = year;
        this.course = course;
        this.gwa = gwa;

    }

    displaysInfo() {
        super.displaysInfo();
        console.log("Year: " + this.year);
        console.log("Course: " + this.course);
        console.log("Gwa: " + this.gwa); 

        const p4 = `
           Year: ${this.year} <br>
           Course: ${this.course} <br>
           Gwa: ${this.gwa} <b>
        `;
        document.getElementById('st').innerHTML += p4; 
    }
}
const st = new Student("Jhoanna Robles", 22, "Female", "4th year", "sekret", "basta");
st.displaysInfo();