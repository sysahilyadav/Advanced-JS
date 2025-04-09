// variable scope in function 

/*function testAvailability(x){
    console.log("available here",x);
    
}
testAvailability("Hi!");
console.log("not avilable here",x);

//********************************************** */

/*function testAvailability(){
    let y="local variable";
    console.log("available here",y);  
}
testAvailability();
console.log("not avilable here",y);*/

//*****************************************************************

/*function testAvailability(){
    let y="I'll return ";
    console.log("available here",y);  
    return y;
}
z=testAvailability();
console.log("outside the function ",z);
console.log("not available here",y);
*/

//********************************************************************************

// var
/*function doingstuff(){
    if(true){
        var x="local";

    }
    console.log(x);  
}
doingstuff();
*/

//************************
 

/*function doingstuff(){
    if(true){
        console.log(x);
        let x="local";
    }    
}
doingstuff();
*/

/*function doingstuff(){
    if(true){
        console.log(x);
        var x="local";
    }    
}
doingstuff();
*/

/*
function doingstuff(){
    if(true){
       
        const x="local";
    }    
    console.log(x);
}
doingstuff();
*/

//global variable  ********************************
/*
let globalvar="accessible averywhere";
console.log("outside function ", globalvar);
function creatingNewScope(x){
    console.log("accessible in function",globalvar);
    
}
creatingNewScope();
console.log("ousidde functon",globalvar);
*/

//*************************** */
/*
let x="global";
function doingstuff(){
    let x="local";
    console.log(x);
    

}
doingstuff();
console.log(x);
*/

//********************** */
/*let x="global";
function doingstuff(){
    x="local";
    console.log(x);
    

}
doingstuff();
console.log(x);

*/
//********************************* */
/*
let x="global";
function doingstuff(x){
    console.log(x);
    
}
doingstuff("parameter");
*/
//******************** */
/*
function confusereader(){
    x="guess my scope.......";
    console.log("inside function: ",x);
}

confusereader();
console.log("outside the function:",x);
*/

//*************************** **********************************/
//IIFE ===   Immediately invoked function  expression without name

/*
(function(){
    console.log("IIFE!");
    
})();
*/

// arrow function as an anonymous function 

/*
(()=>{
    console.log("run right away");
})();
*/

//**********************************************************Recursion functions*******************************************************************************

/*
function getRecursion(nr){
    console.log(nr);
    if(nr>0)
    getRecursion(--nr);
}

getRecursion(3);
*/

function logRecursion(nr){
    console.log("startred function :",nr);
    if(nr>0){
        logRecursion(nr-1);

    }
    else{
        console.log("done with recursion ");
        
    }
    console.log("ended function :",nr);
    
}
logRecursion(3);