const number=145;
//even function
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}
const myNumber=1641;
const isMyNumberEven=isEven(myNumber);
console.log('Is my number even', isMyNumberEven);
//odd function

function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}
const isMyNumberOdd=isOdd(myNumber);
console.log('Is my number Odd', isMyNumberOdd);
