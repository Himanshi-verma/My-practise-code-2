let arr=[1,2,5,7];
let arrcopy=[...arr];
a=arrcopy.pop();
console.log(a);
console.log(arr);
console.log(arr.length);

// arr[0]=10;
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[3]);
 
// console.log(arr);//[10,2,5,7] that shows arrays are mutable
// console.log(typeof(arr));
// console.log(arr.toString());//to convert array into string

// console.log(arr.pop());//last element remove krta h and return krta h 
// console.log(arr.push("shalu"));//push operation krke new length return krta h 
// console.log(arr.unshift(0));//begning me add krta h and new length return krta h 
// console.log(arr.shift());//first element remove krta h and ussi ko return krta h 
// console.log(arr.slice(3));//index 3 se end tkk return karega
//slice original array ko change nhi krta h 
//(3,5) start from  index 3 to index 5 but not included index 5
console.log(arr.splice(2,1));//index 2 se 1 count element hata kr return karega 
//ye original array ko change kr deta h 
console.log(arr.splice(1,2));//index 1 se count 2 tkk elemnt hata kar return karega 






