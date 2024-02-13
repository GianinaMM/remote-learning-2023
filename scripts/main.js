console.log("hello");

var name = "Paul";

let age = 12;

const contition = true;

//nu pot incepe cu numar,pot incepe cu $ _ sau pot contine


console.log(name);

function doSomething() {
    console.log("Do something!!");

}

doSomething();


function add(a, b) {
    return a + b
}

console.log(add(1, 2));




var x = 10;


function call () {
    var x = 20;
    return x += 2;
}


console.log(call());

console.log(x);

/*String
\n new line(escape caracteres)
\t TAB
*/

const myName = "Gianina \n \t Morosan ";
console.log(myName);

/* Template Literal*/
let num = 4;

const template = `Backticks are ${num + 7 }  are cool!`

console.log(template);

/*Tagged template literals */

function whatever (parts, val1) {
    console.log({parts, val1})
}

whatever`Paul is ${num} years old`;


const str = "unu doi trei";

function firstLettersToUpper(str) {
    const parts = str.split(" ");
    console.log(parts);
    return str[0].toUpperCase() + str.substring(1);
}

console.log(firstLettersToUpper(str));

/*Complex types


Object: Plain Objects(POJO){},Functions-function/class, Array[], Map-new map, Set-new set, WeakMap,WeakSet



*/


//map-versiune mai noua de objects
//set-versiune mai noua a array-urilor


//1.Array-liste de valori-pot contine orice tip de date

const arr = [1, true, "Gianina", [1, 2 ,3], function() {return "bla"}];
console.log(arr[4]());

console.log(arr[3][1]);


const numbers = [2, 5, 19, 23, 1, 0, -2];
// let i = 0
// while(i < numbers.length) {
// console.log(numbers[i]);
// i++;
// }


// for(let i = 0; i< numbers.length; i++) {
//     const num = numbers[i];
//     console.log(num);
// }


//de preferat
for(const num of numbers) {
    console.log(num);
}

//for in afiseaza proprietatile numerabile a unui array 


if(contition) {
    //block if condition is truthy
}else if(condition){
    //block if condition is falsy
}else {

}

const someVar = 42;

switch(someVar) {
    case 1:
        console.log("Este 1");
        break;

        case 2:
            console.log("este doi");
            break;

            case 42:
                console.log("este sensul vietii!");
                break;


                default:
                    console.log("A fost altceva");
                    break;
}

//daca nu punem break,fallthrough case actioneaza ca || daca in cazul respectiv nu avem cod


if(someVar ===1 ) {
    console.log("Este 1");
}else if (someVar === 2) {
    console.log("este doi");
}else if (someVar === 42) {
    console.log("este sensul vietii!");
}else  {
    console.log("A fost altceva");
}

const T = true;
const F = false;

console.log(F || F);

//nullish coallescing operator se declanseaza doar pe null si undefined
//vrem sa operam cu valori 0 sau "" si nu il ia ca valoare falsy


//operatorul ternar: 

console.log(someVar === 42 ? "Sensul vietii" : "Altceva");


/**SOLID
 * -Single responsability-fiecare chestie facuta trebuie sa faca un singur lucru
 * -open-closed-codul sa fie extensibil,fara a fi nevoie sa se intervina asupra originalului
 * -Liskov substitution-toate variantele unui obiect pot fi inlocuite una cu cealalta
 * -interface segregation-
 * -dependency inversion
 * **/


//Obiecte

const person = {
 fName : "Gianina",
 lName : "Morosan",
 age: 27,
 weight: 59,
 heigth: 1.74,
 calculateBmi: function () {
    return (person.weight / person.heigth ** 2).toFixed(2);
 }

};


console.clear();
console.log(person.fName);
