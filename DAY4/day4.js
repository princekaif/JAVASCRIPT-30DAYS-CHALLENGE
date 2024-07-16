// //DAY4
// //ACTIVITY4
// TASK1 FOR LOOP 1 to 10
for(let i=0;i<=10;i++){
console.log(i);
}
// // TASK2 5 TABLE
console.log(" MULTIPLICATION");
let n=5;
for(let i=1;i<=10;i++){
    k=(n+" x "+i+" = "+n* i);
    console.log(k);
}
// // ACTIVITY 2 WHILE LOOP
// // TASK 3 sum using while loop
console.log("sum of 1 to 10");
var sum =0;
var i=1;
while(i<=10){
    sum+=i;
    i++;
}
// console.log(sum);
// // TASK 4
console.log("print 10 to 1");
var i=10;
while(i>0){
    console.log(i);
    i--;
}
// // ACTIVITY3
// // TASK 5
console.log("print 1 to 5");
var i=1;
do{
    console.log(i);
    i++;
}
while(i<=5)

// //TASK 6 FActorial of a number
let num =2;
let i =1;
let fact =1;
do{
    fact =fact*i;
    i++;
}
while(i<=num)
    console.log(fact);

// //ACTIVITY 4
// //NESTED LOOPS
for(let row =1;row<5;row++){
    let str ="* ";
  console.log(str.repeat(row));
   
}
//ACTIVITY 5
for(let i=0;i<=10;i++){
    if(i==5){
        continue;
    }
console.log(i);
}
//task
for(let i=0;i<=10;i++){
    if(i==7){
        break;
    }
console.log(i);
}

// DAY4 COMPLETED;