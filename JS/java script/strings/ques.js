//reverse of string
// let a="himanshi";
// // reverse=a.split("").reverse().join("");
// // console.log(reverse);

// let step1=a.split("");
// let step2=step1.reverse();
// let step3=step2.join("");
// console.log(step3);

// //vowels count
// let str="hello world";
// let count=0;
// let vowels="aeiou";
// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         count++;
//     }
// }
// console.log(count);

//palindrome or not
let strr="racecar";
let step1= strr.split("");
let step2= step1.reverse();
let step3= step2.join("");
if( strr===step3){
    console.log(`${strr} is a palindrome`);
}
else{
    console.log("it is not a palindrome");
}

//first letter in uppercase
let letter="uttar pradesh";
let sp= letter.split(" ");
let value=sp.map(function(value){
    return value[0].toUpperCase() + value.slice(1);
})
let result=value.join(" ");
console.log(result);
  
//array of string alphabatically sort
let arr=["grapes","banana","eagle"];
let result1=arr.sort();
console.log(result1)

//find out most repeated letter in a string
let str="javascript";
let max_count=