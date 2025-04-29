// the map() method 
// create a map 
// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["orange",600]
// ]);
// console.log(fruits.size);


// const fruits=new Map();
// // set map values 
// fruits.set("apples",400);
// fruits.set("banana",500);
// fruits.set("orange",700);

// // console.log(fruits);

// // // set method 
// // console.log(fruits.get("apples"));
// // // type of fruits using typeof operator 
// // console.log(typeof fruits);

// // maps are directly iterable , map have the size property ,key can be of ant datatyps, keys are inserted by orders

// // javascript maps method

// // to know the size of map 
// // console.log(fruits.size);
// // to delete the key value pair we need to pass the key 
// // fruits.delete("apples");
// // console.log(fruits.size);// now it will give size 2

// // to clear all the key value pair 

// // fruits.clear();
// // console.log(fruits.size); // it will give the size as 0

// //map.has() is used to check the membership of the element , return trtue if the key exists in the map else false 

// console.log(fruits.has("banana"));// output is true as banana is present in our fruits object

// // list all elements

// let text = "";
// fruits.forEach(function(value, key) {
//   text += key + " = " + value + "\n";
// }
// );
// console.log(text);

// //list all enteries
// let text1= "";
// for (const x of fruits.entries()) {
//   text1 += x + "\n";
// }
// console.log(text1);
// //list all keys
// let text2 = "";
// for (const x of fruits.keys()) {
//   text2 += x + "\n";
// }
// console.log(text2);

// //list all values
// let text3 = "";
// for (const x of fruits.values()) {
//   text3 += x + "\n";
// }

// console.log(text3);



// java script destructuring .......................................

// class Person{
//   constructor(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;

//   }
// }

// let {firstName,lastName}=person;

// const person={
//   firstName:"john",
//   lastName:"doe",
//   age:50

// }
// let {firstName,lastName,age}=person;

// console.log(firstName," ",lastName);
// order does not matter, key must be present in the object 
// number of variable also doesnot matter if we want to extract one variable we can do so by same name of the key 

// destructuring does change the original object
// asssiging the default value to the variable while destructuring '


// let {firstName,lastName,age,country="Us"}=person;
// console.log(country);
// console.log(firstName," ",lastName);

// using alias while destructuring means giving another name to the variable while destructuring 
// let {firstName:name}=person;
// console.log(name);


// // create string
// let name="grukulTheSchool";
// // Destructuring
// let [a1,a2,a3,a4,a5]=name;
// console.log(a1,a2,a3,a4,a5);

// // create an array
// const fruit=["banana","orange","grape"];
// // Destructuring
// let [fruit1,fruit2]=fruit;
// console.log(fruit1,fruit2); 

// // Create an array
// const fruit = ["banana", "orange", "grape", "mangoes"];
// // Destructuring
// let [fruit1, fruit2, fruit3] = fruit;

// console.log(fruit1, fruit2, fruit3);

// //create an array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Destructuring
// const [a, b, c, ...rest] = numbers;
// console.log(a, b, c); 

// const fruit = new Map([
//     ['banana', 20],
//     ['orange', 30],
//     ['grape', 40]
// ]);
// //destructuring


// let firstName = "john";
// let lastName = "doe";
// //destructuring
// [firstName, lastName] = [lastName, firstName];
// console.log(firstName, lastName);


// exponential operator 

// let x=5;
// let z=x**2;
// console.log(z);


// let x=5;
// let z=Math.pow(x,2);
// console.log(z);



//array includes return type is boolean and it is case sensitive 

const fruit = ["banana", "orange", "grape", "mangoes"];
// z=fruit.includes("mangoes");
// console.log(z);
// we can change the default indexing that is 0 

// z=fruit.includes("mangoes",4); // here the starting index is 4 and hence it gives false as mango is present at 3rd index 
// console.log(z);

////////////trailinng commaas//////////
// const arr =[
//   "one",
//   "two",
//   "three", // this , is trailing comma here which can be only one in number , more thann one trailing comma shows undefined entity
// ];
// console.log(arr.length);

// const arr1 =[
//   "one",
//   "two",
//   "three",, 
// ];
// console.log(arr1.length);

// sparse array

const sparseArray=[1,,,4,5,,];
console.log(sparseArray.length);

// using trailinng comma in object 

// const person={
//   firstName:"sahil",
//   lastName:"yadav",
//   age:"22",
// }

// const person=
// {
//   firstName="sahil",
//   ,
//   age=30,

// }