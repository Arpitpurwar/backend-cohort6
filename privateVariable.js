class Person{
    #age

    static address = 'Kanpur'

    constructor(name){
        this.name = name
    }

    printIntro(){
        return `My name is ${this.name} and age is ${this.#age}`
    }

    get getAge(){
        return this.#age
    }

    set setAge(age){
        this.#age = age
    }
}

console.log(Person.address)

let p1 = new Person('Rohan')
p1.setAge = 25
console.log(p1.printIntro())
console.log(p1.getAge)


