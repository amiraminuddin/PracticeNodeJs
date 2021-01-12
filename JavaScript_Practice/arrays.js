const person = {
    name: 'Don',
    age: 24,
    //key as a function
    greet() {
        console.log('Hi, I am  '+ this.name)
    }
};

//create constant array
const hobbies = ['Sports', 'Cooking'];

/**
 * access with for loop
for (let hobby of hobbies){
   console.log(hobby); 
}
**/

//add new item in array
hobbies.push("Playing game");

//map() create a new array with the result calling a function for every array element
//map() method does not change the original array.
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));
console.log(hobbies)

//rest
const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4));


//trest sikit