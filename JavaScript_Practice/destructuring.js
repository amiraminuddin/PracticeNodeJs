const person = {
    name: 'Don',
    age: 24,
    //key as a function
    greet() {
        console.log('Hi, I am  '+ this.name)
    }
};

const printName = ({name}) => {
    console.log(name);
}

printName(person);

//object
const { name, age } = person;
console.log(name, age);

//array
const hobbies = ['Sports', 'Cooking'];
const  [hobb1, hobb2] = hobbies;
console.log(hobb1, hobb2);