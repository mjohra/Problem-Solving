const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(numbers);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);

/* 

*/

const numbers2 = [...numbers, 88];
numbers.push(55);
//console.log(numbers);
console.log(numbers2);