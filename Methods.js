const person = {
    name: "Kate",
    age: 19,
    gender: "Female"
   }

   //Process and Output
   console.log("Hello There!");
   console.log("Name: " + person.name);
   console.log("Age: "  +person.age);
   console.log("Gender: " + person.gender);  
   console.log("~~~~~~~~~~~~~~~~~~~~~~~~");

   //Class named Person
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    //Solution 1: Display via console.log
    displayInfo() { //Process and Output
       console.log("Name: " + this.name);
       console.log("Age: "  + this.age);
       console.log("Gender: " + this.gender);

    //Solution 2: Display via HTML
    const p2 = `
    Name: ${this.name} <br>
    Age: ${this.age} <br>
    Gender: ${this.gender} <br>
    `;

       document.getElementById('person2').innerHTML = p2;   
    }
}

// Create an instance of Person
const person2 = new Person("Katelyn", 19, "Female");

//Calls the method
person2.displayInfo();
person2.displayInfoViaHTML();