class Person{
    constructor(name){
        console.log('parent constructor')
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age){
        console.log('Child constructor')
        super(name)
        this.age = age;
    }

    toString(){
        return (`Name & age: ${super.toString()},${this.age}`)
     }

}

// p1 = {name : 'Arpit', tostring : Function()}
// let p1 = new Person('Arpit') 

// console.log(p1);

// { name: 'Rohan', age: 23 }
let p2 = new Student('Rohan', 23)
console.log(p2)
console.log(p2.toString())



// class student extends person{
//     constructor(name,id){
//         //super keyword for calling the above class constructor
//         super(name);
//         this.id = id;
//     }
//     toString(){
//         return (`${super.toString()},Student ID: ${this.id}`);
//     }
// }



// let student1 = new student('Mukul',22);
// console.log(student1.toString());