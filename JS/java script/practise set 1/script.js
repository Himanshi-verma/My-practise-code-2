//variables and objects

//1. create a variable of type string and try to add a number to it
let a ="string";
let b =5;
console.log(a+b);

//2. use typeof operator to find the data type of the string in the last question
let A = "string";
console.log(typeof A);

//3. create a const object in js can u change it to hold a number later 
const obj={
    name:"peri",
    age:18
}
console.log(obj);
obj.age=19
console.log(obj);

//4. try to addd a new key in the const obj in the last question were you able to do it 
const objj ={
    name:"peri", 
    age:20
}
objj.gender="female";
console.log(objj);

//5. write a js program to create a word meaning dictionary of 5 words
const dict={
    Big:"Larege in size",
    Hot:"Having high temperature",
    Cold :"Having low temperature",
    Fast:"Moving quickly",
    Happy:"Feeling good for joyful"   
}
// console.log(dict);
for(const key in dict){
     console.log(key+":"+dict[key]);
}