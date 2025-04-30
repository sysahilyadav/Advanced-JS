// asynchronous code and some optioins for multitasking with code . this concept is called concurrency 
//synchronous code is also called as blocking code 
//asynchronous code is also called as unblocking code 

// concurrency means multiple operation executed at same time

// for asynchronous we use callbacks asyn await promises

//*****************************callbacks **********************/
// function thattakes another function  as an argument  which is then called when the rest of the initial function has finisheed 

// function doSomething(callback){
//     callback();
    
    
// }
// function sayHi(){
//     console.log("hi");
    
// }

// doSomething(sayHi); // sayHi function is passed without using parenthesis

// function judge(grade){
//     switch (true){
//         case grade =="A":
//             console.log("yyou got an ", grade,"amazing ");
//             break;
        
//         case grade =="B":
//             console.log("you got an ", grade,"well done  ");
//             break;    
       
//         case grade =="C":
//                 console.log("yyou got an ", grade,"alright ");
//                 break;

//         case grade =="D":
//                     console.log("yyou got an ", grade,"hmm");
//                     break;
        
//         default:
//             console.log("an", grade,"!what");
            
//     }
// }

// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;

//          case  score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
        
//         case score>=60:
//                 grade="D";
//                 break;
//         default: 
//         grade="F";
    

//     }
//     callback(grade);


// }

// getGrade(85,judge);


//*****************************callback become really valuabble in an asynchronous context ************* */

// setInterval(encourage,500);

// function encourage(){
//     console.log("you are doing great ,keep going!");
    
// }


//*****************PROMISES******************************USED TO HANDLE EITHER SUCCESS OR FAILURE OF A OPERATION **** */

/*******PROMISES function needs two parameter  and these parameters are callbacks .. we have called them resolve and reject here */

//working of the promises --------------------
// when resolve is called 

// let promise= new Promise(function (resolve,reject){
//     // do something that might take a while
//     // lets just set x instead for ths example 

//     let x=20;
//     if(x>10){
//         resolve(x); // on success

//     }
//     else{
//         reject("too low")// an erroe
//     }
// });


// promise.then(
//     function (value){
//         console.log("succes", value);
        
//     },
//     function(error){
//         console.log("error:", error);
        
//     }
// )


// with the help of the arrow function 
// const promise =new Promise((resolve,reject)=>{
//     resolve("success!");

// }).then(value=>{
//     console.log(value);
//     return "we";

    
// })
// .then(value=>{
//     console.log(value);
//     return "can";

    
// })
// .then(value=>{
//     console.log(value);
//     return "chain";

    
// })
// .then(value=>{
//     console.log(value);
//     return "promises";

    
// })
// .then(value=>{
//     console.log(value);

// })
// .catch(value=>{
//     console.log(value);
    
// })

// const promise =new Promise((resolve,reject)=>{
//     reject("handling reject explicitally");


// }).then(value=>{
//     console.log(value);
//     return "we";

    
// })
// .then(value=>{
//     console.log(value);
//     return "can";

    
// })
// .then(value=>{
//     console.log(value);
//     return "chain";

    
// })
// .then(value=>{
//     console.log(value);
//     return "promises";

    
// })
// .then(value=>{
//     console.log(value);

// })
// .catch(value=>{
//     console.log(value);
    
// })

/*******************************************************ASYNC AND AWAIT*************************************** */

// async keyword is used to return the promise 

// function saySomething(x){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("something"+x);
//         },2000);
//     });
// }

// async function talk(x){
//     const word = await saySomething(x);
//     console.log(word);
    
// }

// talk(2);
// talk(4);
// talk(8);

/******************************event loop  **************************** */

//js is a single threaded language . thread means singl path of execution 
// callstack and callback queue 

// console.log("Hi there");
// setTimeout(()=>console.log("sorry i aam late"),0); // setTimeiut is an call back
// console.log(add(4,5));



function add(x,y){
    return x+y;

}

//*****setTimeout() get outsourced to the browsers web api . 
// when it is done , this is appear in a special place the callback queue  .  when the call stack is empty (and only then ) /, the event loop will check the callback queue for work to do . 
// console.log("hi there ");
// setTimeout(()=>console.log("sorry i am late "),0);

// console.log(add(4,5));
