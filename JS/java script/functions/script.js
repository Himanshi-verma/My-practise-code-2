// functionss
function value(name) {
      console.log(`hey ${name} how's your day`);
      console.log(`hey ${name} how's your mood today`);
      console.log(`hey ${name} you r looking goood`);
      console.log(`hey ${name} nice meeting with you`);
}
value("rohan");
value("sam");

function sum(a,b){
    console.log(a,b);
    console.log(`sum is: ${a+b}`);
}
sum(3,5);
sum(1,1);

function sum(a,b,c=1){
    console.log(a,b,c);
    return a+b+c
}
return1=sum(3,4);
return2=sum(3,5,2);
return3=sum(3,3);
console.log(`sum of these numbers are:${return1}`);
console.log(`sum of these numbers are:${return2}`);
console.log(`sum of these numbers are:${return3}`);

const func1=(x)=>{
    console.log(`I'm an arrow function :${x}`);
}
func1(64);
func1(4);
func1(54);

// write a function to find mean of 5 numbers
function mean(m1, m2 , m3 , m4 , m5) {
    let sum = m1+m2+m3+m4+m5;
    return sum/5;
}
return1 = mean(1,2,2,10,4);
console.log(`mean is:${return1}`);

//area of rectangle
function area(l,b){
    return l*b;
}
result=area(3,5);
console.log(`area 0f rectangle:${result}`);

//function to find largest of 3 numbers 
function largest(a, b, c){
    if(a>b&&a>c){
        return a;
    }
    else if(b>c){
        return b;
    }
    else{
        return c;
    }
}
result =largest(2,4,5);
console.log(`largest number is:${result}`);

//function to check even or odd
function check(a){
    if(a%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
// result=check(12);
console.log("given number is :", check(4));
console.log("given number is :", check(14));
console.log("given number is :", check(7));

//print multiplication
function multiply(num){
    for(let i=1;i<=10;i++){
    console.log(`${num}*${i}=${num*i}`);  
    }  
}
multiply(4);

//perimeter of rectangle
function perimeter(l,b){
    let peri=2*(l+b);
    return peri;
}
console.log("perimeter of rectangle:", perimeter(3,2));

//function to check passing or failing
function finalresult(marks){
    if(marks>=40){
        return "pass";
    }
    else{
        return "fail";
    }
}
console.log(`rohan : ${finalresult(45)}`);
console.log(`sam : ${finalresult(18)}`);
console.log(`ronak : ${finalresult(50)}`);