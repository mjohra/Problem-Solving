const number=[2,4,5,23,22,43,23,17,55,34,77];
//slice
const numberSliced=number.slice(4,8);
//console.log(numberSliced);

//spliced(remove from original array)
//const numberSpliced=number.splice(4,2);
/* console.log(numberSpliced);
console.log(number); */

//const numberSpliced2=number.splice(4,2,888,888,900,999);
const numberSpliced2=number.splice(4,0,888);
console.log(numberSpliced2);
console.log(number);