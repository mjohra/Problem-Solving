function add(num1,num2=0){
    //option-1
    /* console.log(num1,num2);
    if(num2==undefined){
        num2=0;
    } */

    //option-2
    //num2=num2||0;

    //option-3(ES6)
    //SET DEFAULT VALUE
    const total=num1+num2;
    return total;
}
const result = add(2);
console.log(result);