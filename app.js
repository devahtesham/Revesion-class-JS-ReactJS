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
// let arr=[10,20,30,40,50,60,70];
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
// let arr = [10, 20, 30, 40, 50, 60, 70];
// let arr = ["canada", "bashir", "denim", "ear", "asif", "monday", "tuesday"];
// =========== map ===========
// let ans = arr.map(function (num) {
//   //   console.log(num);
//   return num;
// });
// console.log(ans);
// =========== filter ===========
// let ans = arr.filter(function (num) {});
// console.log(ans);
// ============== join =============
// console.log(arr);
// let ans = arr.join("*");
// console.log(ans);

// let newArray = [];
// arr.forEach(function (num) {
//   //   console.log(num);
//   newArray.push(num);
// });
// console.log(newArray);

// ================== OBJECTS ===========
// 1st method
let user1 = {
  user_name: "anus",
  age: 17,
  course: "js",
  fees: 5000,
};
// // console.log(user1.age);
// user1.fees = 5000;
// user1["fees"] = 5000;
// console.log(user1);
// delete user1.user_name;
// // console.log(user1);
// user1.user_name = "ahtesham";
// console.log(user1);
for (let keys in user1) {
  console.log(user1[keys]);
}
