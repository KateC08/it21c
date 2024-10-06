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
}