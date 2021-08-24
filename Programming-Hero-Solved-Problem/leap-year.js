function isLeapYear(year){
    if(year % 4 ==0){
        return true;
    }
    else{
        return false;
    }
}
const myYear =2087;
const isMyYear=isLeapYear(myYear);
console.log('is my year leap year',isMyYear);