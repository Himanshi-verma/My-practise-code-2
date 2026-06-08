let a ="hello";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);//undefined
 
console.log(a.length);
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(a.slice(0,3));
console.log(a.slice(1));
console.log(a.replace("ll","7"));
console.log(a.replace("ll", "ee"));
//strings are immutable 
let b="helloll"
console.log(b.replace("ll", "hh"));//always replace first occurance
//output = hehholl


console.log(b.concat(a));
console.log(a.concat(b,"boss"));
console.log(b.indexOf("el"));


let name="shalu";
let friend="meee";
console.log("Hello my name is" + name + "and my friend is" + friend);
console.log(`Hello my name is ${name} and my friend is ${friend}`);
