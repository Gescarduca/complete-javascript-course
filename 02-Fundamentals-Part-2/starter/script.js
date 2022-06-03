/* 'use strict';
//difference between function declarationa and expression
// is that a declaration  can be used before its declared
//(through hoisting the correspondent function up)
//and a function expression cannot since it will only exist
//after assignment


// function declaration
function calcAge1(birthYear){
    return 2037 -birthYear;
}
const age1 = calcAge1(1991);

//function expression

const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(birthYear);

console.log(age1,age2); */

//arrow function´
/* 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); 

//arrow function also work with multiple variables and 
//expressions inside, similar to lambda in java

const yearsUntilRetirement = birthYear => {
    const age = 2037-birthYear;
    return 65-age;
}

console.log(yearsUntilRetirement(1991));
 */
//with multiple parameters

/* const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037-birthYear;
    const retirement = 65-age; 
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Bob'));
console.log(yearsUntilRetirement(1980, 'Jonas')); */


//method for arrys
//push to add and unshift to add element at the start of the array
//both methos return the new lenght of the array
//also in javascript arrays can be hold differente types of
//variables
/* const friends = ['Gui','Paulo','Jorge'];
const newLength = friends.push('Rafael');
console.log(friends);
const newLengthAtStar = friends.unshift('Daniel');
console.log(friends);

//remove method
//pop returns the removed element
friends.pop();
console.log(friends);
//shift removes first element in array, and returns that element
friends.shift();
console.log(friends);

//get position in array
console.log(friends.indexOf('Gui'));

//ES6 method, checks if array includes the value you give it
//returns a boolean
console.log(friends.includes('Gui')); */


//DOT VS BRACKET NOTATION

/* const gui = {
    firstName: 'Gui',
    lastName: 'Escarduça',
    age: '28',
    job: 'Engineer',
    friends: ['Paulo','Jorge']
};

console.log(gui.lastName);
console.log(gui['lastName']);

//if you need to do some kind of operation to validate
//which variable you will access use bracket notation

const variable = prompt('Which variable are you interested in:'
+ 'firstname, lastname, age, job or friends?');

console.log(gui[variable]); */

//loops
/* for(let rep = 1; rep <= 10;rep++){
    console.log(`Lifting Weights repetition ${rep}`);
}
 */

//continue vs break
//continue skips to the next iteration, break stops the full loop
/* const Jonas = [
    'Jonas',
     28,
    ['Gui', 1, 2, 'Paulo']
];


console.log('-------Only Strings--------')

for(let i = 0; i < Jonas.length; i++){
    if(typeof Jonas[i] !== 'string') continue;
    console.log(Jonas[i], typeof[i]);
}

//decrease loop

for(let i = Jonas.length-1;i >=0; i--){
    console.log(Jonas[i], typeof[i], 'decreasing');
} */

