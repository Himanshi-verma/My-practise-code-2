// sum of the given array
// let arr=[2,3,4,5];
// let sum=0;
// for(let i=0; i<arr.length ; i++){
//     sum=sum+arr[i]
// }
// console.log(sum);

//find out largest number in array
// let arr=[6,8,9,17];
// // let max=arr[0];
// // for(let i=0;i<arr.length;i++){
// //     if(arr[i]>max){
// //         max=arr[i];
// //     }
// } 
// console.log(max);

//array reverse
// let arr=[1,2,3,4];
// console.log(arr.reverse());

//remove duplicate
let arr=[1,1,2,2,3,4,5];
console.log(...new Set(arr));

//find out even numbers in array
let num =[2,3,4,5,6,7];
let even=num.filter(function(num){
    return num%2==0;
})
console.log(even);

//double each and every element of array
let number=[1,4,7,9];
let doubled= number.map(function(value){
    return value*2;
})
console.log(doubled);

//how many times 5 appears in a array
let digit=[1,3,5,5,6,5,8,5];
let count=0;
for(let i=0; i<8 ;i++){
    if(digit[i]===5){
         count++;
    }
}
console.log(count);

//attach two arrays
let arr1=[1,3,5];
let arr2=[2,4,6];
console.log(arr1.concat(arr2));