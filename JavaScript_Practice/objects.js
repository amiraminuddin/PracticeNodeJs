const person = {
    name: 'Don',
    age: 24,
    //key as a function
    greet() {
        console.log('Hi, I am  '+ this.name)
    }
};


console.log(person.name);
console.log(person.age);
person.greet();


