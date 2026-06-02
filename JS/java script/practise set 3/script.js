//loops 

//print numbers from 1 to 10
for(let i=1; i<=10;i++){
    console.log(i);
}

//print numbers from 10 to 1
for(let i=10; i>=1;i--){
    console.log(i);
}

//print all even numbers from 1 to 20
for(let i=1; i<=20; i++){
    if(i%2==0){
          console.log(i);
    }
}   

//odd number from 1 to 20
for(let i=1; i<=20; i++){
    if(i%2!=0){
        console.log(i);
    }
}

//write multiplication table for any num
let num=5;
for(let i=1;i<=10; i++){
    console.log(`${num}*${i}=${num*i}`);

}

//sum of 1 to 100
let number=0;
for(let i=1; i<=100; i++){
    number=number+i;
}    
console.log(`sum=${number}`);

//squares of 1 to 10
for(let i=1; i<=10; i++){
    console.log(`${i}*${i}=${i*i}`);
}

//factorial of a number
let digit=4;
let fact=1;
for(let i=1; i<=digit;i++){
    fact=fact*i;
}
console.log(`${digit}!=${fact}`);

//print age hwose students age greater than 18;
let students={
    ravi:18, rahul:12, vicky:20, arjun:22, vvv:10,
}
for (const key in students) {
    if (students[key]>18){
        console.log(key);
    }    
}

//


