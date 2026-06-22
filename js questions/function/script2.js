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
// let arr=[1,2,3,4,5,6,];
// let newarr=arr.filter((val)=>val%2===0).length;

// console.log(newarr);

//return first element of arr
// let arr=[1,2,3,3,4,5];
// let newarr=val=>arr[0];
// console.log(newarr(arr));

//return last element of arr
// let arr=[1,1,2,3,5,6,7];
// let newarr=val=>val[arr.length-1];
// console.log(newarr(arr));

//return length of a array
// let arr=val=>val.length;
// console.log(arr([1,2,3,4,5]));

//function that add kiwi in a arr
// let arr=val=>{
//     val.push("kiwi") ;
//     return val;
// }
// console.log(arr(["apple","banana"]));

//remove last element of array
// let arr=function(val){
//     val.pop();
//     return val;
// } 
// console.log(arr([1,3,4,5,6]));

//check whether banana exist in a array or not
// let arr=["mango","banana"];
// let newarr=arr.some(val=>{
//     return val==="banana";
// })
// console.log(newarr);

//return first and last element in a array
// let arr=val=>{
//     return [val[0],val[val.length-1]];
    
// }
// console.log(arr([2,3,5,67,7,8]));

//return last element of array in uppercase
// let arr=val=>{
//     return val[val.length-1].toUpperCase()
// }
// console.log(arr(["hello","baby","masi"]));

//function banao jo array ka second last elemnt return kare
// let arr= val=>val[val.length-2];
// console.log(arr([2,3,4,67,7,8]));

//function+object
//access age and city
let user={
    name:"himanshi",
    age:20,
    city:"buland",
}
// let newuser=num=>num.age;
// console.log(newuser(user));
// let newuser=num=>num.city;
// console.log(newuser(user));

//access name 
// // let obj=num=>num.name;
// console.log(obj({
//     name:"himanshi",
//     age:20,
//     city:"buland",
// }));

//add college in above user 
// let newuser=num=>{
//     num.college="kcc";
//     return num;
// }

// console.log(newuser(user));

//age increase by 1
// let newuser=num=>{
//     num.age=num.age+1;
//     return num;
// }
// console.log(newuser(user));

// let newuser=num=>num
// console.log(newuser(user));

//return name in upper case
// let newuser=num=>{
//     num.name=num.name.toUpperCase();
//     return num;
// }
// console.log(newuser(user));

// change city to noida
// let newuser=function(num){
//     num.city="noida";
//     return num;
// }
// console.log(newuser(user));

//check whether the age is gretaer than 18 or not
// let newuser=function(num){
//        if(num.age>18) {return true;}
//     else{return false;}
// }
// console.log(newuser(user));

//"name:himanshi" string me answer chahiye
// let newuser=num=>`Name : ${num.name}`; 
// console.log(newuser(user));



//array of object
let user1=[
    {name:"Aman", age:20,},
    {name:"Riya",age:18},
    {name:"neha", age:22}
];
//return first user name
// let use=num=>num[0].name;
// console.log(use(user1));

//return second user age
// let use=num=>num[1].age;
// console.log(use(user1))

//last user ka name return kro
// let use=num=>num[num.length-1].name;
// console.log(use(user1));

//return all users name
// let use=user1.map(num=>num.name);
// console.log(use);

// //age 20+ user return kro 
// let use=user1.filter(num=>{
//     return num.age>20;
// })
// console.log(use);

//riya wale user find kro 
// let use =user1.find(num=>{
//     return num.name==="Riya";
// })
// console.log(use);

//check whether someone age is 18+ or not
// let use=user1.some(num=>{
//     return num.age>18;
// })
// console.log(use);

//check all user 18+ or not
// let use=user1.every(num=>{
//     return num.age>18;

// })
// console.log(use);


//return age of  array of all 
// let use=user1.map(num=>{
//     return [num.age];
// })
// console.log(use);


//return all names in uppercase
// let use=user1.map(num=>{
//     return num.name.toUpperCase()
// })
// console.log(use);

//sum of all ages
// let use=num=>{
//     sum=0;
//     for(let i=0; i<num.length;i++){
//         sum+=num[i].age;
//     }
//     return sum;
// }
// console.log(use(user1));

//in first user add city:"noida"
// let use=num=>{
//      num[0].city="noida";
//      return num;

// }
// console.log(use(user1));



let user2=[
    {name:"aman", marks:45},
    {name:"neha", marks:78},
    {name:"ravi", marks:32},
    {name:"simran", marks:90},
];

// print name of students who score more than 50
// let val=user2.filter(coef=>{
//     coef.marks>50
// }).map(coef=>coef.name);
// console.log(val);

let use=user2.map(val=>{
    return val.marks*2;
})
console.log(use);

