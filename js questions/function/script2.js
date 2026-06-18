//arrow function
// let multiply= (a,b)=>{
//     return a*b;
// }
// let value=multiply(4,7);
// console.log(value);

// //rest operator(...)
// function fresh(...val){
//     console.log(val);
// }
// fresh(1,3,4,5,6,8,9);

// //function that returns sum of two num
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(4,6));

// //make function which tell given number is even or odd
// function num(a){
//     if(a%2===0){ return "even number";}
//     else{
//         return "odd number";
//     }
// }
// console.log(num(41));

// //function banao jo string ko upper case me return kare
// function str(val){
//     return val.toUpperCase();
// }
// console.log(str("hello"))

// //function that return the length of the string
// function strr(len){
//     return len.length;
// }
// console.log(strr("hhhrrrrtttt"));

// //return 1 big num
// function num(a,b){
//     if(a>b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// console.log(num(4,9)); 

// //arrow function 
// //create a arrow function that return a square
// let square= (a)=>a*a;
// console.log( square(5));

// // return last element of an array in function 
// let lastt= val=>val[val.length-1];
// console.log(lastt([1,2,3,4,5]));

//sum array
// let sum= val=>{
//     let sum1=0;
//     for(let i=0; i<val.length;i++){
//         sum1+=val[i];
//     }
//     return sum1;
// }
// console.log(sum([2,3,4,5,7]));

//count the elements in array
let arr=[1,2,3,4,5,6,];
let newarr=arr.filter((val)=>val%2===0);

console.log(newarr.length);


       

    
