// JavaScript Array


const userName = "Tomas";
const userLastName = "Erdal";
const userAge = 34;
const userPresent = true;


// Basic Array = object 
const userArray = ["Tomas", "Erdal", 34, true];
console.log(userArray);
console.log(userArray[2]);

const body = document.querySelector("body");
body.textContent = userArray[0];

// Array object =  array med ulike object inne i seg
const objectArray =[{userFirstName: "Tomas"}, {userLastName: "Erdal"}, 
{userAge: 27}, {userPresent: true}];
console.log(objectArray[3]);

// Object Array = ulike object med array inne i seg
const bigArray = {fruits: ["orange", "apple", "banana"], berry:[ "strawberry", "blueberry"]};