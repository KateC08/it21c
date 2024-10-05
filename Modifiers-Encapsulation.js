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
}