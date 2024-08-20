// Activity 1: Sorting Algorithms

// • Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function Bubblesort(arr){
    let n=arr.length;
    for(let i =0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(Bubblesort([5, 2, 9, 1, 5, 6]));
console.log(Bubblesort([1,3,4,2,7,5,6]));
// • Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let min=i;
        for(let j=1+i;j<n;){
            if(arr[j]<arr[j+1]){
                min=j;
            }
        }
        if(min!==i){
            [arr[i],arr[min]]=[arr[min],arr[i]];
        }
    }
    return arr;
}
console.log(selectionSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]

// • Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.


// Activity 2: Searching Algorithms

// • Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

// • Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr,start,end,target){
    let start=0;
    let end=arr.length;
    let mid=Math.floor(start+(end-start)/2);
    if(start>end) return ;
    if(arr[mid]==target){
        return mid;
    }
    if(arr[mid]>target){
        binarySearch(arr,start,mid-1,target);
    }
    if(arr[mid]<target){
        binary(arr,mid+1,end,target);
    }
}
    console.log(binarySearch([5, 2, 9, 1, 5, 6]));

// Activity 3: String Algorithms

// • Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

// • Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

// Activity 4: Array Algorithms

// • Task 8: Write a function to rotate an array by k positions. Log the rotated array.

// • Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

// Activity 5: Dynamic Programming (Optional)

// • Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

// • Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
