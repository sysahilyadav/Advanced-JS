// function sayHello(){
//     let you=prompt("What,s your Name?");
//     console.log("Hello", you + "!");
// }
// sayHello();
//prompt ke liye live server ke through chalana hoga



//**********************************************************************************************
// let varContainingFunction= function(){
//     let varInsideFunction= "I'm in a function.";
//     console.log("hi there!", varInsideFunction);
// }
// varContainingFunction();



//**********************************************************************************************
// function tester(para1,para2){
//     return para1 + " "+ para2;
// }
// const arg1="argument 1";
// const arg2="argument 2";
// console.log(tester(arg1,arg2));



//**********************************************************************************************
// let add= function(num1=50,num2=50){
//     console.log(num1+num2);
// }
// add(22);
// num1=parseInt(prompt("Enter first number:"))
// num2=parseInt(prompt("Enter second number:"))
// add(num1,num2);//default arguments are not working in prompt
// add(24,44,55,22)//will leave the extra arguments



//**********************************************************************************************
//Arrow functions are great for sending functions around as the parameters and for shorter notations
// x=> console.log(x); We have to store it in a variable for calling
// let arrowfunc=(x,y="World!")=> {
//     console.log(x + " "+ y);
// }
// arrowfunc("hello!");



//**********************************************************************************************
// const arr=["182","183","184"];
// arr.forEach(e=>console.log(e));



//**********************************************************************************************
//Spread(....) (in function calling)
// let spread =[4,5,6,7];
// // let mess=[1,2,3,spread,8,9,10];//nested array
// let mess=[1,2,3,...spread,8,9,10];
// console.log(mess);

// function add(x,y){
//     console.log(x+y);
// }
// let arr =[5,9]
// add(...arr)


// Rest operator(...) (inside function parameter) (when we don,t know the number of parameters)
// function somef(x,z,...y){//will create an array after taking x and z
//     console.log(x,z,y);
// }
// somef(1,2,3,4,4,45);





// // variable scope in function 

// /*function testAvailability(x){
//     console.log("available here",x);
    
// }
// testAvailability("Hi!");
// console.log("not avilable here",x);

// //********************************************** */

// /*function testAvailability(){
//     let y="local variable";
//     console.log("available here",y);  
// }
// testAvailability();
// console.log("not avilable here",y);*/

// //*****************************************************************

// /*function testAvailability(){
//     let y="I'll return ";
//     console.log("available here",y);  
//     return y;
// }
// z=testAvailability();
// console.log("outside the function ",z);
// console.log("not available here",y);
// */

// //********************************************************************************

// // var
// /*function doingstuff(){
//     if(true){
//         var x="local";

//     }
//     console.log(x);  
// }
// doingstuff();
// */

// //************************
 

// /*function doingstuff(){
//     if(true){
//         console.log(x);
//         let x="local";
//     }    
// }
// doingstuff();
// */

// /*function doingstuff(){
//     if(true){
//         console.log(x);
//         var x="local";
//     }    
// }
// doingstuff();
// */

// /*
// function doingstuff(){
//     if(true){
       
//         const x="local";
//     }    
//     console.log(x);
// }
// doingstuff();
// */

// //global variable  ********************************
// /*
// let globalvar="accessible averywhere";
// console.log("outside function ", globalvar);
// function creatingNewScope(x){
//     console.log("accessible in function",globalvar);
    
// }
// creatingNewScope();
// console.log("ousidde functon",globalvar);
// */

// //*************************** */
// /*
// let x="global";
// function doingstuff(){
//     let x="local";
//     console.log(x);
    

// }
// doingstuff();
// console.log(x);
// */

// //********************** */
// /*let x="global";
// function doingstuff(){
//     x="local";
//     console.log(x);
    

// }
// doingstuff();
// console.log(x);

// */
// //********************************* */
// /*
// let x="global";
// function doingstuff(x){
//     console.log(x);
    
// }
// doingstuff("parameter");
// */
// //******************** */
// /*
// function confusereader(){
//     x="guess my scope.......";
//     console.log("inside function: ",x);
// }

// confusereader();
// console.log("outside the function:",x);
// */

// //*************************** **********************************/
// //IIFE ===   Immediately invoked function  expression without name

// /*
// (function(){
//     console.log("IIFE!");
    
// })();
// */

// // arrow function as an anonymous function 

// /*
// (()=>{
//     console.log("run right away");
// })();
// */

// //**********************************************************Recursion functions*******************************************************************************

// /*
// function getRecursion(nr){
//     console.log(nr);
//     if(nr>0)
//     getRecursion(--nr);
// }

// getRecursion(3);
// */

// /*
// function logRecursion(nr){
//     console.log("startred function :",nr);
//     if(nr>0){
//         logRecursion(nr-1);

//     }
//     else{
//         console.log("done with recursion ");
        
//     }
//     console.log("ended function :",nr);
    
// }
// logRecursion(3);
// */
// //*****************************************************************************************/

// function getRecursion(nr){
//     if(nr>0){
//         getRecursion(--nr);

//     }
//     console.log(nr);
    

// }
// getRecursion(3);

// /*************************** */
// function logRecursive(nr){
//     console.log("started function",nr);
//     if(nr>0){
//         logRecursive(nr-1);
//         }
//     else{
//         console.log("donee with recursion");
        
//     }
//     console.log("ended function ",nr);
    
    
// }
// logRecursive(3);

// //performance of recursion is slightly worse than performance of iteration
// /*********************************************************************   Nested function ************************************** */

// function doOuterFunctionStuff(nr){
//     console.log("outer function");
//      doinnerFunctionStuff(nr);
//      function doinnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("i can acces outer variables ",nr);
        
//     }
    
// }
// doOuterFunctionStuff(2);


/******************************Anonymous Function *********** */

// function doingstuffAnonymously(){
//     console.log("not so secret though");
    
// // }

// //***************function callbacks = passing function as a arguments    */

// let functionVariable=function(){
//     console.log("not so secret ");
    
// };

// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("inside doFlexibleStuff function ");
    
// }
// doFlexibleStuff(functionVariable);

// // in js there are many in built function like setTimeout( ) function

// // let youGotThis=function(){
// //     console.log("you are doing really well , keep going");
    
// // };

// //setTimeout(youGotThis,5000); // 5000 ms is the time after which it will give the output of the called function 

// setInterval(youGotThis,1000);  // keep calling the function after the given interval

// // quiz question 
// let youGotThis=function(){
//     console.log("you are doing really well , keep going");
    
// }();

// (function (){
//     console.log("welcome");
    
// })();

// (function(){
//     let firstName="laurence";
// })();

// let result =(function(){
//     let firstName="laurence";
//     return firstName;
// })();
// console.log(result);

// (function(firstName){
//     console.log("my name is "+ firstName);
    
// })("laurence");


// let test2=(num)=>num+5;
// console.log(test2(14));
