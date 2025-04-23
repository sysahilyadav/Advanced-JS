// // // classes 
// // //class is blueprint or template for object creation
// // // this development reduces the complxexity and increase the maintainability of the object 

// // class ClassNAme{
// //     constructor(prop1,prop2){
// //         this.prop1=prop1;
// //         this.prop2=prop2;

// //     }
// // }
// // let obj=new ClassNAme("args1","arg2");
// // console.log(obj.prop1," ",obj.prop2);

// // // this keyword refers to the object it belongs to

// // class Dog{
// //     constructor(dogName,weight,color,breed){
// //         this.dogName=dogName;
// //         this.weight=weight;
// //         this.color=color;
// //         this.breed=breed;

// //     }
// // }
// // let dog=new Dog("javascript",2.4,"brown","chicici");
// // console.log(dog.dogName," ",);

// // // classes creation 
// // class Person{
// //     constructor(firstName,lastName){
// //         this.firstName=firstName;
// //         this.lastName=lastName;

// //     }
// // }
// // let p=new Person("sahil","yadav");


// // // to create the lastname default 

// class Person{
//     constructor(firstName,"chauhan"){
//         this.firstName=firstName;
//         this.lastName=lastName;

//     }
// }
// let p=new Person("jitendra");
// console.log(p.firstName," ",p.lastName);



// functions on a class is called methods  ., in case of methods wwe need not to use the function key word 

// class Person{
//         constructor(firstName,lastName="sahil"){
//             this.firstName=firstName;
//             this.lastName=lastName;
    
//         }
//         greet(){
//             console.log("good morning ");
            
//         }
//     }
   
    // let p=new Person("jitendra","chauhan");
    // p.greet();
    // console.log("firstname: ",p.firstName ," ","lastname: ",p.lastName);
    

    // let p=new Person("jitendra");
    // p.greet();
    // console.log("firstname: ",p.firstName ," ","lastname: ",p.lastName);
    
    
// default arguments should be the trailing argument 

// let p=new Person1("jitendra");
// p.greet();
// console.log("firstname: ",p.firstName ," ","lastname: ",p.lastName);


// methods***********************
// class Person{
//     constructor(firstName,lastName="singh"){
//         this.firstName=firstName;
//         this.lastName=lastName;

//     }
//     greet(){
//         console.log("good morning ",this.firstName);
        
//     }
//     complement(name,object){
//         return "this is a wonderfull " +object +" "+ name;

//     }
// }

// let p=new Person("jitendra","chauhan");

// let complement =p.complement("harry","potter");
// console.log(complement);

// // holding the greet function in a variable 
// let greetResult=p.greet(); // greetResult will hold undefined as greet method is not returning anything from the method
// console.log(greetResult);


// setting the attribute value to private ******************


//   class Person{
//     #firstName;
//     #lastName;
//     constructor(firstName,lastName="singh"){
//         this.#firstName=firstName;
//         this.#lastName=lastName;

//     }
   
// }

// let p=new Person("jitendra","chauhan");
// console.log(p.firstName); // output is undefinned 



//validation  ///************************

// class Person{

//     #firstName;
//     #lastName;
//         constructor(firstName,lastName="singh"){
//             if(this.#firstName.startswith("M")){
//             this.#firstName=firstName;
//             this.#lastName=lastName;
    
//         }
// }}


// attribute is set to private and methods is set to public 
// class Person{

//     #firstName;
//     #lastName;
//         constructor(firstName,lastName="singh"){
//             this.#firstName=firstName;
//             this.#lastName=lastName;
    
//         }
//     get firstName(){
//         return this.#firstName;

//     }
//     set firstName(firstName){
//         this.#firstName=firstName;

//     }
//     get lastName(){
//         return this.#lastName;
//     }
//     set lastName(lastName){
//         this.#lastName=lastName;

//     }



// }

// let p=new Person("jitendra","chauhan");
// p.firstName="sahil";
// p.lastName="yadav";
// console.log(p.firstName()," ",p.lastName());


//Inheritence
///It is a concept that  classes can have child classes that inherits the properties and methods from the parent class.

class vehicle{
    constructor(color,currentspeed,maxspeed){
        this.color=color;
        this.currentspeed=currentspeed;
        this.maxspeed=maxspeed;
    }
    move(){
        console.log("Moving at",this.currentspeed);
    }
    accelerate(amount){
        this.currentspeed+=amount;
    }
}

class motorcycle extends vehicle{
    constructor(color,currentspeed,maxspeed,fuel){
        super(color,currentspeed,maxspeed);//parent class constructor called
        this.fuel=fuel;
    }
    doWheelie(){
        console.log("Driving on one wheel");
    }
}

let motor = new motorcycle("Black",0,250,"gasoline");
console.log(motor.color);
console.log(motor.move(50));

/*****************prototypes ************************** */
// Prototypes
// A prototyope is the mechanism in js that makes it possible to have object
class person{
    constructor(firstname,lastname="Maurya"){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet(){
        console.log("Hi there! I'm",this.firstname,this.lastname);
        
    }
    // compliment(name,object){
    //     return "That's a wonderful "+object+","+ name;
    // }
}

person.prototype.introduce=()=>{
    console.log("Hi! I am ",this.firstname);
}
person.prototype.favoritecolor="green";
let p=new person("Priyanshu");
console.log(p.favoritecolor);
p.introduce();