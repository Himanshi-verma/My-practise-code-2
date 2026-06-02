//faulty calculator 
function cul(a,b) {
    let choice=prompt("Enter the choice:");
    if(choice == "+"){
        return a+b;
    }
    else if(choice=="-"){
        return a-b;
    }  
    else if(choice=="*"){
        return a*b;
    }  
    else if(choice=="/"){
        return a/b;
    }
    else{
        return invalid;
    }
console.log(`The output is:${cul(3,5)}`);

}








    

       
