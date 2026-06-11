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
// let strr="racecar";
// let step1= strr.split("");
// let step2= step1.reverse();
// let step3= step2.join("");
// if( strr===step3){
//     console.log(`${strr} is a palindrome`);
// }
// else{
//     console.log("it is not a palindrome");
// }

// //first letter in uppercase
// let letter="uttar pradesh";
// let sp= letter.split(" ");
// let value=sp.map(function(value){
//     return value[0].toUpperCase() + value.slice(1);
// })
// let result=value.join(" ");
// console.log(result);
  
//array of string alphabatically sort
// let arr=["grapes","banana","eagle"];
// let result1=arr.sort();
// console.log(result1)

//even and odd find
let arr = [1,5,8,7,6,3,4]
let even=arr.filter(function(even){
    return even%2==0; 
})    
let odd=arr.filter(function(odd){
    return odd%2!=0;
})   
console.log("even:",even);
console.log("odd:", odd);


//pig latin 
let str="hello hillo";
let result=str.split(" ")
.map(function(pig){
    return pig.slice(1)+pig[0]+"ay"
})
.join(" ")
console.log(result);

//how many words in a string
let a="hell my name is himanshi";
console.log(a.split(" ").length);

//how many letters in a string 
let b="himanshi";
console.log(b.split("").length);

//reverse the words 
let ab="shalu aalu";
let rev=ab.split(" ")
.reverse()
.join(" ");
console.log(rev);

