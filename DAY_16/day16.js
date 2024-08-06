// Activity 1: Basic Recursion

// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n){
    if(n<=1)return 1;
    return n*factorial(n-1);

}
console.log(factorial(5));
// console.log(factorial(0)); // 1
// console.log(factorial(7)); // 5040


// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function Fibonacci(n){
    if(n<=1)return n;
    const fib=Fibonacci(n-1)+Fibonacci(n-2);
    return fib;
}                                  
console.log(Fibonacci(2)); // 5    

// console.log(Fibonacci(10)); // 55
 
function fibo(n){
    if(n<=1)return n;
    let prev=0,cur=1,next;
    //console.log(ans);
    for(let i =2; i<=n;i++){
     next=prev+cur;
     prev=cur;
     cur=next;
    
    }
    console.log(cur);
}
fibo(2);

// Activity 2: Recursion with Arrays

// • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumOfArray(arr,index=0){
    if(index >=arr.length)return 0;
    let value=arr[index];
  
    return value+sumOfArray(arr,  index+1);
    
}
console.log(sumOfArray([1,2,3,4,5]));

// • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function findMax(arr,index=0,max=-Infinity){
    if(index>=arr.length)return max;
    return  findMax(arr,index+1,Math.max(max,arr[index]));
}

console.log(findMax([-1, -5, -3])); // -1
console.log(findMax([100])); // 100


// Activity 3: String Manipulation with Recursion

// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str.length === 0) return str; // Base case
    return reverseString(str.slice(1)) + str[0]; // Recursive case let see the woeking (h---(e---(l---(l---(o(--))
  }
  
  // Test cases
  console.log(reverseString("hellol")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  console.log(reverseString("")); // ""
  

// • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function palindrome(value){
    if(value.length<=1)return true;
    if(value[0]!==value[value.length-1])return false;
    return palindrome(value.slice(1,-1));
}
console.log(palindrome("racecar")); // true
console.log(palindrome("hello")); // false
console.log(palindrome("1001")); // true


// Activity 4: Recursive Search

// • Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
 function binarysearch(arr,target,left=0,right=arr.length-1){
    if(left>right)return -1;
    const mid=Math.floor(left+(right-left)/2);
    if(arr[mid]==target) return mid;
    if(arr[mid]>target) return binarysearch(arr,target,left,mid-1);
    return binarysearch(arr,target,mid+1,right);

 }
console.log(binarysearch([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(binarysearch([1, 2, 3, 4, 5, 6], 7)); // -1
console.log(binarysearch([1, 2, 3, 4, 5, 6], 1)); // 0

// • Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOcc(arr, target,index=0){
    if(index>=arr.length)return 0;
    return (arr[index]==target ?1:0)+countOcc(arr,target,index+1);
}
console.log(countOcc([1, 2, 3, 2, 6], 6)); // 0
console.log(countOcc([1, 2, 3, 4, 2, 2, 5], 2)); // 3
console.log(countOcc([], 0)); // 0

// Activity 5: Tree Traversal (Optional)











// • Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

// • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.