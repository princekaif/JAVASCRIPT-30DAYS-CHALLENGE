// Day 15: Closures

// Tasks/Activities:

// Activity 1: Understanding Closures

// • Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerfunction(){
    let outervarable="sunamath chocolate";
    function innerfunction(){
        return outervarable;
    }
    return innerfunction();
}
const obj =outerfunction();
console.log(obj);

// • Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createcounter(){
    let counter =0;
    return{
        increment(){
            counter++;
            return counter;
        },
        getvalue(){
            return counter;
        }
    };
}
const obj1 =createcounter();
console.log(obj1.increment());
console.log(obj1.increment());
console.log(obj1.getvalue());

// Activity 2: Practical Closures

// • Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function generateUniqueId(){
    let lastid=0;
    return function(){
       lastid+=2;
       return lastid;
    }
}
const id=new generateUniqueId();
console.log(id());
console.log(id());
// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greet(name){
    let message="hello Mr";
    return function(){
        return message+name;
    }
}
const great=greet('kaif');
console.log(great());

// Activity 3: Closures in Loops

// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionArray(){
    let FunctionArray=[];
    for(let i =1;i<20;i++){
        FunctionArray.push((function(index){
            return function(){
                console.log(index);
            };
        })(i)
    );
    }
    return FunctionArray;
}
const c=new createFunctionArray();

c[4]();
// Activity 4: Module Pattern

// • Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function ItemManager(){
    const items=[];
    return{
        additems(item){
            items.push(item);
        },
        removeitems(item){
          const index=  items.indexOf(item);
          if(index!==-1){
            items.splice(index,1);
          }
        },
        list(){
            return items.slice();
        }
    };
}

const manage=new ItemManager();
manage.additems("apple");
manage.additems('banana');
manage.additems("graoes");
manage.removeitems("banana");
console.log(manage.list());
// Activity 5: Memoization

// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn){
    const cache={};
    return function(... args){
        const key =JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }
        const result =fn(args);
        cache[key]=result;
        return result;
    };
}
const add=(a,b)=>a+b;
const memoizeAdd= memoize(add);
console.log(memoizeAdd(5+8));
console.log(memoizeAdd(9+8));
// • Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memoizefact(){
    const cache={};
    function factorial(n){
        if(n<=1)return 1;
        if(cache[n])return cache[n];
        cache[n]=n*factorial(n-1);
        return cache[n];

    }
    return factorial;
}
const fact=new memoizefact();
console.log(fact(5 ));