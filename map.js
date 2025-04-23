// the map() method 
// create a map 
// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["orange",600]
// ]);
// console.log(fruits.size);


const fruits=new Map();
// set map values 
fruits.set("apples",400);
fruits.set("banana",500);
fruits.set("orange",700);

// console.log(fruits);

// // set method 
// console.log(fruits.get("apples"));
// // type of fruits using typeof operator 
// console.log(typeof fruits);

// maps are directly iterable , map have the size property ,key can be of ant datatyps, keys are inserted by orders

// javascript maps method

// to know the size of map 
// console.log(fruits.size);
// to delete the key value pair we need to pass the key 
// fruits.delete("apples");
// console.log(fruits.size);// now it will give size 2

// to clear all the key value pair 

// fruits.clear();
// console.log(fruits.size); // it will give the size as 0

//map.has() is used to check the membership of the element , return trtue if the key exists in the map else false 

console.log(fruits.has("banana"));// output is true as banana is present in our fruits object

// list all elements

let text = "";
fruits.forEach(function(value, key) {
  text += key + " = " + value + "\n";
}
);
console.log(text);

//list all enteries
let text1= "";
for (const x of fruits.entries()) {
  text1 += x + "\n";
}
console.log(text1);
//list all keys
let text2 = "";
for (const x of fruits.keys()) {
  text2 += x + "\n";
}
console.log(text2);

//list all values
let text3 = "";
for (const x of fruits.values()) {
  text3 += x + "\n";
}

console.log(text3);



// java script destructuring .......................................

// class Person{
//   constructor(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;

//   }
// }

// let {firstName,lastName}=person;

const person={
  firstName:"john",
  lastName:"doe",
  age:50

}
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
let {firstName:name}=person;
console.log(name);

