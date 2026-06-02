console.log("hello guys!!!")

// var a = 10;
// var b = 1;

// console.log( a+b );
// console.log(a+b+1);

// {
//     var a = 1;
//     console.log(a);
// }
// console.log(a);

let a = 2;
let b = 3;
// let b = 0; // it gives error bcz re- declaration not allowed
b=5;//re-assign allowed
console.log(a+b);
{
    let b=1;
    console.log(b);
}
console.log(b);
{  let A="Harris";
   let B=7;
   console.log(typeof A, typeof B);
}

const x=3;
// x=2;//re-assign is not allowed bcz x is constant
console.log(x);
{
    const x=2;
    console.log(x);
}
console.log(x);
//note : both const and let are block scoped;