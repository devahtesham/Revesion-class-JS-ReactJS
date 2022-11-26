/*
ES5 >> var
ES6 >> let const 
*/
/*
 STEPS TO CREATE VARIABLES
 1) declaration
 2) initialization
*/ 
//================= var 
// var myName; // variable declaration
// myName = "ahtesham"  // initialization
// var myName = "ahtesham"
// myName = "anus"
//================= let
// let myName = "ahtesham"
//  myName = "anus"
//================= const
// console.log("name",myName);
// var myName = "ahtesham"









/*
Primitive type:
    string
    number
    boolean
    null
    undefined
Refrence type
    array
    object
    functions
*/

// string
// let course = "java script";
// let newWord = course.trim()
// console.log(newWord.length);
// let ans = newWord.length/5;
// console.log(ans);

// let arr=[22,15,13,26,8,7,1];
// let arr1=[9,6,1,3,2,0];
let arr=[10,20,30,40,50,60,70];
// let arr=["canada","bashir","denim","ear","asif","monday","tuesday"];
// console.log(arr);
// arr.sort();
// arr.reverse();

// let ans = arr.indexOf("bashir");
// let ans = arr.lastIndexOf("bashir");
// let ans = arr.includes("Asif")
// let ans = arr.findIndex(function(num){
//     return num==="js"
// })
// let ans = arr.concat(arr1)
// let ans = arr1.concat(arr)
// let ans = arr.slice(1,9)
// console.log(arr);
// let newArr = []
// console.log(arr);
let ans = arr.map(function(num){
console.log(num*10); 
})
// console.log(ans);

