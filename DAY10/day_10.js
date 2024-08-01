// <!-- Day 10: Event Handling

// Tasks/Activities:

// Activity 1: Basic Event Handling

// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.
            const paragraph=document.getElementById("para");
            const button =document.getElementById("btn");
            button.addEventListener('click',()=>{
                para.textContent="text changed";
            });

// • Task 2: Add a double-click event listener to an image that toggles its visibility.
           const image=document.getElementById("img");
           image.addEventListener('dblclick',()=>{
            image.style.display=image.style.display=="none"?"block":"none";
           });
        

// Activity 2: Mouse Events

// • Task 3: Add a mouseover event listener to an element that changes its background color.
const element=document.getElementById("task3");
element.addEventListener('mouseover',()=>{
    element.style.backgroundColor='green';
});

// • Task 4: Add a mouseout event listener to an element that resets its background color.
element.addEventListener('mouseout',()=>{
    element.style.backgroundColor='blue';
});

// Activity 3: Keyboard Events

// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const input=document.getElementById("inp");
input.addEventListener('keydown',(event)=>{
    console.log(`key pressed :${event.key}`);
});

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const paraf=document.getElementById("p");
input.addEventListener('keyup',()=>{
    paraf.textContent=input.value;

});
// Activity 4: Form Events

// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById('myForm');
  
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new formData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});


// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.      
const select =document.getElementById("Myselect");
const parag=document.getElementById("selectedvalue");
select.addEventListener('change',()=>{
    parag.textContent=`selected value:${select.value}`
});


// Activity 5: Event Delegation

// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list=document.getElementById("lists");
list.addEventListener('click',(event)=>{
    if(event.target.tagName==='LI'){
        console.log(`clicked:${event.target.textContent}`);}
});

// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements. --> 
const parentElement=document.getElementById("parentElement");
const addChildButton=document.getElementById("addChildButton");

addChildButton.addEventListener('click',()=>{
    const newChild=document.createElement('div');
    newChild.textContent="selected";
    parentElement.appendChild(newChild);
});
parentElement.addEventListener('click',(event)=>{
    if(event.target!==addChildButton){
        console.log(`clcked:${event.target.textContent}`);
    }
});
