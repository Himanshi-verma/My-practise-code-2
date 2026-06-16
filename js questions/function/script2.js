//arrow function
let multiply= (a,b)=>{
    return a*b;
}
let value=multiply(4,7);
console.log(value);

//rest operator(...)
function fresh(...val){
    console.log(val);
}
fresh(1,3,4,5,6,8,9);

//use rest parameter to accept any nym of score and return the total
let sum=0;
function values(...num){
    for(let i=0 ;i<=num;i++){ 
      return sum+=num;
    }  
}
    
let result=values(1,2,3,4,5,6);
console.log(result);
