//operators and conditions

//1. use logical opertaor to find whether the age of a person lie between 10 and 20
let age =12;
if(age>10&&age<20){
    console.log(age + "is age between 10 and 20 ");
}
else{
    console.log(age + "is not lie between 10 and 20");
}

//demonstrate the use of switch case statement in js
let day="wednesday"; //typing a num use Number(prompt())
                                  // typing a word use prompt()// but both are browser features
switch(day){
    case "monday":
     console.log("starting of the week");
     break;
    case"friday":
      console.log("last day of the week");
      break;
    case"saturday":
     console.log("weekend!!");
     break;
    case"sunday":
     console.log("weekend!!!!");
     break;
    default:
        console.log("just a normal day");   


}

//write a js program to find the number is divisible by 2 and 3
let num=12;
if(num%2==0&&num%3==0){
    console.log(num +"is divisible by 2 and 3");
}
else{
    console.log(num+" not divisible by 2 and 3");
}

//write the js program to find the number is divisible by 2 or 3 
number =16;
if(number%2==0||number%3==0){
    console.log("number is divisible by 2 or 3");
}
else{
    console.log("number is not divisible by 2 or 3");
}


//print"you can drive" or "you cannot drive" based on the being greater than 18 using ternary operator
let agee=12;
message=agee>18?"you can drive":"you cannot drive";
console.log(message);