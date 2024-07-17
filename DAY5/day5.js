// Day 5. Functions

// Tasks/Activities:

// Activity 1: Function Declaration

// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
                   function evenorodd(num){
                       if(num%2==0){
                        console.log(" Even");
                       }else{
                        console.log(" odd");
                       }
                   }
                   evenorodd(5);


// • Task 2: Write a function to calculate the square of a number and return the result.
                     function square(num){
                        s= num*num;
                        return s;
                     }   
                     console.log(square(5));                   

// Activity 2: Function Expression

// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
           function max(num1,num2){
            if(num1>num2){
                console.log('The greatest num is'+ num1);
            }
            else if(num1<num2){
                console.log('The greatest num is'+ num2);
            }
            else{
                console.log('The greatest num is equal');
            }
           }
           max(10,10);

// • Task 4: Write a function expression to concatenate two strings and return the result.
          function conacte(str1 ,str2){
            console.log(str1+str2);
          }
          conacte("hello" , "world");

// Activity 3: Arrow Functions

// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
          const sum=(a,b)=>{
             return a+b;
          }
          console.log(sum(10,20));

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
           const check=(a,b)=>{
            for(let i=0;i<a.length;i++){
                if(a[i]==b){
                    return true;
                }
                else{
                    return false;
                }
            }
           }
           console.log(check("kaif","p"));
// Activity 4: Function Parameters and Default Values

// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
                   function multi( a, b=5){
                    console.log( a*b);
                   }
                   multi(10,6);
                   multi(10);
// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
          function greeting(name,age =24){
            console.log('good morning"', name,"age",age);
          }
          greeting("kaif",20);
          greeting("don");

// Activity 5: Higher-Order Functions

// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
                        function greet(num){
                            console.log("kaif",num);
                        }
                        function jim(fnc,num){
                            for(let i=0;i<num;i++){
                               fnc(i);
                            }
                        }
                        
                        jim(greet,5);

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
                      function highorder(f1,f2,num){
                        const fn1=f1(num);
                        const fn2=f2(fn1);
                        return fn2;
                      }
                      function f1(value){
                        return value*5;
                      }
                      function f2(result){
                        return result+5;
                      }
                      console.log(highorder(f1,f2,5));

                      //completed day5