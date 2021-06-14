// const a = 10;
// const b = 2;
// let myName = "nico";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello "+myName);

// myName = "nicolas";

// console.log("your new name is "+ myName);

// const amIFat = false;
// let something;
// console.log(something, amIFat);

// // Array
// const daysOfWeek =["mon", "tue", "wed", "thu", " fri", "sat"];

// console.log(daysOfWeek);

// daysOfWeek.push("sun");

// console.log(daysOfWeek);
// console.log(daysOfWeek[0]);

// // Objects
// const player = {
//     name:"nico",
//     points: 10,
//     fat : true
// };
// console.log(player);
// console.log(player.name);
// player.fat = false;
// player.lastName = "potato";
// player.points = player.points + 15;
// console.log(player);

// //Functions part One
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is "+nameOfPerson+" and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(a,b){
//     console.log(a+b);
// }
// function divide(a,b){
//     console.log(a/b);
// }
// plus(1,2);
// divide(20,10);

// const player1 = {
//     name : "gun",
//     sayHello : function(otherPersonsName){
//         console.log("hello!"+otherPersonsName+" nice to meet you")
//     },
// };

// console.log(player1.name);
// player1.sayHello("lynn"); 

const title = document.querySelector(".hello h1");

function handleTitleclick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleclick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);