const prompt =require('prompt-sync')();
//var a =parseInt(prompt("enter age "));
//console.log(a);
//day3
//activity 1
//if else statements
//Task1 check positive ,negative or zero
// if(a>0){
//     console.log("+");

// }
// else if(a<0){
//     console.log("-");
// }else{
//     console.log("0");
// }
// //task2 eligiblle to vote
// if(a>=18){
//     console.log("eligible to vote");
// }
// else{
//     console.log("not eligible");
// }
//ACTIVITY 2 
//TASK3 largest of three numbers
// var  A=parseInt(prompt("enter a "));
// var  B=parseInt(prompt("enter b "));
// var  C=parseInt(prompt("enter c "));
// if(A>B ){
//      if(A>C){
//     console.log(A);
//     }   
// }
// else if(A<B){
//     if(B>C){
//         console.log(B);
//     }
// }
// else{
//     console.log(C);
// }
//ACTIVITY 3 SWITCH CASE
// var num=parseInt(prompt(" 1 - 7 "));
// console.log("    ");
// switch(num){
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY");
//         break; 
//     case 3:
//         console.log("WEDNESSDAY");
//         break;   
//     case 3:
//         console.log("THURSDAY");
//         break;
//     case 4:
//         console.log("FRIDAY");
//         break;
//     case 5:
//         console.log("SATURDAY");
//         break;   
//     case 6:
//         console.log("SUNDAY");
//         break;  
//     default :
//     console.log("IN VALID");
// }
//const prompt = require('prompt-sync')();

var num = parseInt(prompt("Enter a number (1-100):"));
console.log("    ");

if (num < 1 || num > 100) {
    console.log("INVALID");
} else {
    switch (true) {
        case (num >= 90):
            console.log("A");
            break;
        case (num >= 80):
            console.log("B");
            break; 
        case (num >= 70):
            console.log("C");
            break;   
        case (num >= 60):
            console.log("D");
            break;
        case (num < 60):
            console.log("F");
            break;
        default:
            console.log("INVALID");
    }
}
//ACTIVITY 4 CONDITIONAL TERNARY OPERATOR
//TASK6 ODD OR EVEN
n1=num%2==0?"even":"odd"
console.log(n1);
//ACTIVITY 5 COMBINING CONDITIONS
//TASK7
let year =parseInt(prompt("Enter a year"));
if(((year%4==0)&&(year%100!=0))||(year%400==0)){
    console.log("leap ")
}
else("not leap");