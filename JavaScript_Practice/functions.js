const Name = 'Don';
let  age = 29;
const hasHobbies = true;

age = 30;

//make function as variable
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'name is ' +
        userName +
        ', age is ' +
        userAge +
        " and the user's Hobbies: "+
        userHasHobby
    );
};

const sub = (a , b) => {
    return (a-b);
};

console.log(sub(7,4));
console.log(summarizeUser(Name,age,hasHobbies));
