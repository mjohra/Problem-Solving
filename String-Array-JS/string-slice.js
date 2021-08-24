const anthem = "Amar sonar bangla ami tomay valobashi";
const words=anthem.split(' ');
const withoutA=anthem.split('a');
console.log(withoutA);
//slice
const smallSlice=anthem.slice(5,13);
console.log(smallSlice);

//substr
const anotherPart=anthem.substr(11,7);
console.log(anotherPart);

//substring
const anotherAnotherPart=anthem.substring(11,15);
console.log(anotherAnotherPart);

//concat
const first='My';
const second='City';
//const fullString=first+second;
const fullString=first.concat(second).concat('Dhaka');
console.log(fullString);

//join
const word=['a','b','c'];
const allJoin=word.join(',,');
console.log(allJoin);
