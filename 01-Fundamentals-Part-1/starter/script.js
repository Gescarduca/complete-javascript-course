
    /*let js = 'amazing';
    if (js === 'amazing') alert('javascript if fun!');
    console.log(4+2-34+80);

    let MYCONSTANT = 15;

    */
/*   
let firstName = "Guilherme";
let lastName = "Escarduça";
const job = "Engineer";
const birthYear ="1994";
const year = '2022';
const jonas = "I'm " + firstName + ', a ' + (year - birthYear)
+ ' years old ' + job;
*/
/* type conversion is when we explicitly convert a value to another
type coercion is when the conversion is made behind the scenes by javascript*/
//type conversion
/*
const inputYear =`1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + inputYear);

console.log(Number(`Jonas`));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
// same thing because since you cant have operations between a 
//and a number so javascript converts automatically
console.log(`I'm ` + 23 + ` years old`);
console.log(`I'm ` + `23` + ` years old`);
//coercion can also do from string to number
//keep in mind this depends on the operator
//with the minus operator only numbers work so coercion to numbers 
//occurs, with plus operator it is string coercion
console.log(`23` - `10` - 3);

//falsy values: 0, Nan, undefined, '', null
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;

if(money){
    console.log(`Don't spend it all`);
}else{
    console.log(`You should get a job`);
}

let height;
if(height){
    console.log(`Yay! Height is defined`)
}else{
    console.log(`Height is undefined`)
}
*/

const age = 20;

const drink = age >=18 ? `Wine ` : `Water`;

console.log(drink);