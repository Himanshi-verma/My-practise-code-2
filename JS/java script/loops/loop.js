console.log("All types of loops")

//for loop
for(let i=0; i<10;i++){
    console.log(i)
}
//for in loop   //object
const obj={name:"mery", class:12, sub:"js"}
for (const key in obj) {
    console.log(key);//for the key 
    console.log(key, obj[key]);//for the key and value
}

//for of loop //string
for (const obj of "hello") {
    console.log(obj);
    
}

//foreach
var a=[1,2,3,4,5,6];
a.forEach(function(val){
    console.log(val+2);
});

//array
const letter=["A", "B", "C" ];
for (const element of letter) {
    console.log(element);
}
