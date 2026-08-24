//"use strict";

//Part 1: Coding Questions
//EX(1)
// const str = "123";
// console.log(Number(str)+7);



//EX(2)
// let checkFalsy = (value)=>{
//     return !value ? "Invalid" : "Valid";
// }
// console.log(checkFalsy(0));


//EX(3)
// let arr = [1,2,3,4,5,6,7,8,,9,10]
// for(i=0 ;i<=10 ;i++ ){
//    if (i%2 === 0){
//     continue;}
//      console.log(i); 
// }


//EX(4)
// const arr=[1,2,3,4,5]
// const evenarr = arr.filter((num)=> num%2 === 0 )
// console.log(evenarr);


//EX(5)
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const mergeArray =  [...arr1,...arr2];
// console.log(mergeArray);


//EX(6)
// function getDay(day){
//    switch (day){
//     case 1 : return "Sunday";
//     case 2 : return "Monday";
//     case 3 : return "Tuesday";
//     case 4 : return "Wednesday";
//     case 5 : return "Friday";
//     case 6 : return "Saturday";
//     case 7 : return "Invalid day";

//    };
// };
// console.log(getDay(2));


//EX(7)
// const arr = ["a","ab","abc"];
// const arrLength = arr.map(word => word.length);
// console.log(arrLength);



//EX(8)
// function check(num){
//     if(num %3 ===0 && num %5 ===0 ){
//         return "Divisible by both";
//     }
//     return "Not Divisible by both";
// };
// console.log(check(15));




//EX(9)
// let sqr = (num)=>  num * num ;
// console.log(sqr(5));



//EX(10)
// function personInfo(person) {
//     const { name, age } = person;
//     return `${name} is ${age} years old`;
// }

// console.log(personInfo({ name: "John", age: 25 }));
 
//EX(11)
// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(1, 2, 3, 4, 5));



//EX(12)
// function getSuccess() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     });
// }

// getSuccess().then(console.log);



//EX(13)
// function findLargest(arr) {
//     return Math.max(...arr);
// }

// console.log(findLargest([1, 3, 7, 2, 4])); 


//EX(14)
// function getKeys(obj) {
//     return Object.keys(obj);
// }

// console.log(getKeys({ name: "John", age: 30 }));


//EX(15)
// function splitWords(str) {
//     return str.split(" ");
// }

// console.log(splitWords("The quick brown fox"));



//(B. Part 2: Essay Questions)
//          forEach
// Method available on arrays.
// Executes a callback function for each element.
// Cannot use break or continue.
//Use forEach when you simply want to perform an action on every element.
//EX.
// const arr = [1, 2, 3];

// arr.forEach(item => {
//     console.log(item);
// });



//    for of
// Loop used with iterable objects (arrays, strings, maps, etc.).
// Supports break and continue.
//Use for...of when you need more control (break, continue, async/await).
//EX.
// const arr = [1, 2, 3];

// for (const item of arr) {
//     if (item === 2) continue;
//     console.log(item);


//2.
// Hoisting

// JavaScript moves declarations to the top of their scope before execution.

// console.log(x);
// var x = 10;  


// Temporal Dead Zone (TDZ)
// Occurs with let and const.
// console.log(age);
// let age = 25;



//Difference between == and ===
//           ==
// Compares values after type conversion.
//console.log(5 == "5");

//           ===
// Compares value and type without conversion.
// console.log(5 === "5"); 


// try-catch
// Used to handle runtime errors.
// try {
//     console.log(x);
// } catch (error) {
//     console.log("Error:", error.message);
// }


// async function getData() {
//     try {
//         const response = await fetch("https://api.example.com");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Request failed:", error.message);
//     }
// }


// Importance of Asy
// Prevents application crashes.
// Handles API failures and network errors gracefully.
// Improves user experience.



//         Type Conversion (Explicit)
// Developer manually converts a type.
// const num = Number("123");
// console.log(num); // 123


//          Type Coercion (Implicit)
// JavaScript automatically converts types.
// console.log("5" + 1); // "51"
// console.log("5" - 1); // 4








