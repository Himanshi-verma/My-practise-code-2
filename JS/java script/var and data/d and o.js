let a=19;
let b="18";
let c="Harry";
let d=undefined;
const e=true;
let f=null;
console.log(a,b,c,d,e,f);
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f);

let obj={
         name:"harris",
         "sub code": 4567
}
// console.log(obj);
obj.salary="200cr";
// console.log(obj);
obj.review_seen=true;
console.log(obj);
//for access them seperately
console.log(obj.name)
console.log(obj["sub code"])
//for add the data
obj.name="harry potter"
console.log(obj)

// let human={
//      "a Name":"Chiku vashisht",
//      "b Human code": 420,
//      "c Identity":"Monster",
//      "d Salary":"500 crores",
//      "e Current status": "Single ready to mingle",
//      "f For more Info":"call 91xxxxxxxx"

// }
// console.log(human);


console.log(ab);//undefined not gives any erroe because we can print any variable before declaration.
 var ab=12;

 var bc=[1,2,3,4];
 var ca=bc;
 console.log(ca.pop());
 console.log(ca);
 console.log(bc);//it will not same as we declared bcz duee to pop operation on ca that also change the value of bc also

 //without bracket all are primitive and with bracket all are refrence..