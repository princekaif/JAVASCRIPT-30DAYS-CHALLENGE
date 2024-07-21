//DAY 9 DOM MANIPUALTION
//ACTIVITY 1 SELECTING  AND MANIPULATING ELEMENTS
//TASK1: SELECT AN HTML ELEMENT BY ITS ID AND CHANGE BY ITS ID AND CHANGE ITS TEXT CONTENT

let newtext= document.getElementById("fdiv");
newtext.textContent="changed the para";
//TAsk 2 Change the color of the html element by its class name
document.querySelector(".first1").style.backgroundColor="red";

//ACTICITY2
//TASKE3:Create a New Div element and Text and Append it to The Body
let newdiv=document.createElement("div");
newdiv.textContent="new div";
document.body.appendChild(newdiv).style.backgroundColor="blue";
//Task4:create an li element and add in existing ul element
let newlist=document.createElement("li");
newlist.textContent=" list 3";
document.getElementById("list").appendChild(newlist);

//ACTIVITY 3  
//task5: Select an html element and remove it from the dom
let element =document.getElementById("remove");
element.parentNode.removeChild(element);
//task6: remove the last child of a secific html element
const childe=document.getElementById("list");
childe.removeChild(childe.lastElementChild);

//ACTIVITY4 
//TASK 7 Select An Html Element and change one of its Attribute
document.getElementById("img").src="c1.jpg";
//task 8 add and remove css from an element
const para =document.getElementById("para");
para.ClassList.add("add");
 const add=document.getElementById("list");
 add.classList.add("list"); 

//ACTIVITY 5

//task 9 
document.getElementById("button").addEventListener("click",function(){
    document.getElementById("text").textContent="text is sucessfully cahnged";
});