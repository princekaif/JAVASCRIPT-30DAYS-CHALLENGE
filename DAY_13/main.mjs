//task1
import { add,subtract } from './add.mjs';
import {person} from'./add.mjs';
import  greet  from './add.mjs';
import * as utlis from './utlis.mjs';
import _ from 'lodash';
import axios from 'axios';
 const sum =add(5,6);

 console.log(sum);
 //task2
console.log(person.name);
person.display();
//task 3
console.log(subtract(5,8),add(5,8));
//task 4
console.log(greet("kinhg"));
//task5
console.log(`the value of PI is ${utlis.pi}`);
console.log(utlis.dis("ijbbidbvibdibvib"));
console.log(utlis.king);
//task6
const shuffled=_.shuffle([1,2,3,4,5]);
console.log(shuffled);
//task7
async function fetchdata(){
    try {
        const response =await axios.get('https://api.example.com/data');
        console.log(response.data);
    }
    catch(error){
        console.log('errorkfe kj ',error);
    }
}
fetchdata();