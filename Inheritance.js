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

}