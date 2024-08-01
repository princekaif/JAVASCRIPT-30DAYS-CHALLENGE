// Day 12: Error Handling

// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

// *Try-Catch Block:*

// - *Try Block:* Code that might throw an error is placed inside a try block. If an error occurs, control is passed to the corresponding catch block.

// - *Catch Block:* This block executes if an error is thrown in the try block. It receives the error as a parameter, which can be used to log details about the error or to handle it appropriately.

// function throwError(){
//     throw new Error("this Is An Error");
// }
// try{
//     throwError();
// }
// catch(error){
//     console.log("error caught:",error.message);
// }

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

// function divide(a,b){
//     if(b==0){
//         throw new Error(" cannot be divided by zero");

//     }
//     else{
//         return a/b;
//     }
// }
// try{
//     console.log(divide(10,0));

// }catch(error){
//     console.log("error is :",error.message);
// }

// Activity 2: Finally Block

// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
// function divide(a,b){
//     if(b==0){
//         throw new Error(" cannot be divided by zero");

//     }
//     else{
//         return a/b;
//     }
// }
// try{
//     console.log(divide(10,5));

// }catch(error){
//     console.log("error is :",error.message);
// }finally{
//     console.log(" performed the division");
// }

// // Activity 3: Custom Error Objects

// // • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
// class CustomError extends Error{
//     constructor(message,errorcode){
//         super(message);
//         this.name=this.constructor.name;
//         this.errorcode=errorcode;
//     }
// }
// function riskyoperation(){
//     let value=false;
//     if(!value){
//         throw new CustomError("error Ocuured in Risky operation",1001);
//     }
//     return "operation sucessfull";
// }

// try{
//     riskyoperation();
// }
// catch(error){
//     if (error instanceof CustomError){
//         console.log(`Caught an error :${error.message} and errorcode: ${error.errorcode}`);
//     }
//     else{
//         console.log(`caught an error${error.message}`);
//     }
// }

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name="validation Error";
    }
}

function ValidateUserInput(input){
    if(typeof input !=='string'){
        throw new ValidationError("input Must Be in Letters No numbers");
    }
    if(input.trim()==''){
        throw new ValidationError("input cannot B empty");

    }
    if(input.length<5){
        throw new ValidationError("input Must have atleast 5 characters ");
    }
    return true;
}
document.getElementById("userform").addEventListener('submit',function(event){
    event.preventDefault();
    const input =document.getElementById("username").value;
    const errormessage=document.getElementById("errorMessage");
    try{
        ValidateUserInput(input);
        errormessage.textContent="";
        alert("Input is valid");
    }
    catch(error){
        if(error instanceof ValidationError){
            errormessage.textContent=`${error.message}`;
        }
        else{
            errormessage.textContent=`${error.message}`;
        }
    }
});
// Activity 4: Error Handling in Promises

// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
// function randomPromise(){
//    return new Promise((resolve,reject)=>{
//     const sucess=Math.random()>0.5;
//     setTimeout(()=>{
//         if(sucess){
//             resolve("Promise Resolved Sucessfully");
//         }
//         else{
//             reject("promise Rejected Sucessfully");
//         }
//     },1000);
//    });
// }
// const button=document.getElementById("start");
// const result=document.getElementById("result");

// button.addEventListener('click',()=>{
//     randomPromise()
//     .then((message)=>{
//         result.textContent=message;
//         result.style.color="green";
//     })
//     .catch((error)=>{
//         result.textContent=error;
//         result.style.color="red";
//     });

// });
// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
function randomPromise(){
   return new Promise((resolve,reject)=>{
    const sucess=Math.random()>0.5;
    setTimeout(()=>{
        if(sucess){
            resolve("Promise Resolved Sucessfully");
        }
        else{
            reject("promise Rejected Sucessfully");
        }
    },1000);
   });
}
async function handlePromise(){
    const result=document.getElementById("result");
    try{
        const message = await randomPromise();
        result.textContent=message;
        result.style.color="green";
    }
    catch(error){
        result.textContent=error;
        result.style.color="red";
    }
}
const button = document.getElementById("start");
button.addEventListener('click',handlePromise);

// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

// function fetchdata(){
//     const url=document.getElementById("url").value;
//     const final=document.getElementById("final");
//     fetch(url)
//         .then(response=>{
//            if(!response.ok){
//             throw new Error(`HTTP error! status ${response.status}`);
//            }
//            return response.json();
//         })
//         .then(data=>{
//             final.textContent=JSON.stringify(data);
//             final.style.color='green';
//         })
//         .catch(error=>{
//             final.textContent=`error${error.message}`;
//         });
    
// }
// document.getElementById("fetchdata").addEventListener('click',fetchdata);

// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
// async function fetchdata(){
//      const url=document.getElementById("url").value;
//      const final=document.getElementById("final");
//      try{
//      const response =await fetch(url);
//      const data = await response.json();
//      final.textContent=data;
//      }
//      catch(error){
//         final.textContent=`error${error}`;
//      }
// }
// document.getElementById("fetchdata").addEventListener('click',fetchdata);