// Day 11: Promises and Async/Await

// Tasks/Activities:

// Activity 1: Understanding Promises 

// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// const promise1 =new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("promise Resolved After 2 seconds");
//     },2000);

// });
// promise1.then((message)=>{
//     console.log(message);
// });
// // • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().

// const promise2c=new Promise((_,reject)=>{
//     setTimeout(()=>{
//         reject("promised rejected after 2 second");
//     },2000);
// });
// promise2c.catch((error)=>{
//     console.error(error);
// });

// Activity 2: Chaining Promises

// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// const fetchdata =(data)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`fetched data:${data} `);
//         },1000);
//     });
// };
// fetchdata("userdata")
//  .then((data) =>{
//     console.log(data);
//     return fetchdata("post");
//  })
//  .then((data)=>{
//     console.log(data);
//     return fetchdata("comments");
//  })
//  .then((data)=>{
//     console.log(data);
//  });

// // Activity 3: Using Async/Await

// // • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

// const ResolveAfter2Seconds =()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("resolved after 9 sconds");
//         },9000);
//     });
// };
// const AsyncFunction =async()=>{
//     const result= await ResolveAfter2Seconds();
//    console.log(result);
// };
// AsyncFunction();

// // • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

// const RejectAfter2Seconds =()=>{
//     return new Promise((_,reject)=>{
//         setTimeout(()=>{
//             reject("rejected after 2 seconds");
//         },2000);
//     });
// };
// const AsyncFunctionWithErrorHandling = async()=>{
//     try{
//         const result=await RejectAfter2Seconds();
//         console.log(result);
//     }
//     catch(error){
//         console.error(error);
//     }
// };
// AsyncFunctionWithErrorHandling();


// // Activity 4: Fetching Data from an API 

// - The fetch API is used to make HTTP requests and returns a promise.
// - We call fetch with a URL, then use .then() to convert the response to JSON.
// - Once the response is in JSON format, we log it to the console.
// - .catch() is used to handle any errors that occur during the fetch operation.




// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((Response)=>Response.json())
// .then((data)=>{
//     console.log(data);
// }) 
// .catch((error)=>{
//     console.log("eroor",error);
// });

// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

// const FetchDataAsync = async()=>{
//     try{
//         const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data= await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log('error etching data ',error);
//     }
// };
// FetchDataAsync();

// Activity 5: Concurrent Promises


// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

// - Promise.all takes an array of promises and returns a single promise that resolves when all of the promises have resolved.
// - If any of the promises reject, Promise.all rejects with the reason of the first promise that rejects.
// - We create three promises that resolve at different times and pass them to Promise.all.
// - When all promises resolve, we log their values.

// const promiseA= new Promise((resolve)=>{
//     setTimeout(()=>{resolve("Promise A resolved ");},1500);
// });
// const promiseB=new Promise((resolve)=>setTimeout(()=>resolve("promise B resolved"),2000));
// const promisec=new Promise((resolve)=>setTimeout(()=>resolve("promise c resolved"),2500));
// Promise.all([promiseA,promiseB,promisec]).then((values)=>{
//     console.log(values);
// })

// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const promiseX= new Promise((resolve)=>{
    setTimeout(()=>{resolve("Promise X resolved ");},2500);
});
const promiseY=new Promise((resolve)=>setTimeout(()=>resolve("promise Y resolved"),1000));
const promiseZ=new Promise((resolve)=>setTimeout(()=>resolve("promise Z resolved"),2000));
Promise.race([promiseX,promiseY,promiseZ]).then((values)=>{
    console.log(values);
})