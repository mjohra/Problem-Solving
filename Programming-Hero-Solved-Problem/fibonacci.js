// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34....

/*
3rd=2nd+1st
4th=3rd+2nd
5th=4th+3rd
nth=(n-1)th+(n-2)th
ith=(i-1)th+(i-2)th
*/

/* const fibo=[0,1];
for(let i=2;i<=10;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo); */

/* function fibonacciSeries(num){
    const fibo=[0,1];
    for(let i=2;i<=num;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
const fiboSeries=fibonacciSeries(13);
console.log(fiboSeries); */

function fibonacciSeries(num){
    if(typeof num != 'number')
    {
        return 'please give a number';
    }
    const fibo=[0,1];
    for(let i=2;i<=num;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
const fiboSeries=fibonacciSeries('hjgjjh');
console.log(fiboSeries);
