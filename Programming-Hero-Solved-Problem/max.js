const business=450;
const minister=350;
const army=600;
/*if (business>minister){
    console.log('Business person');
}
else
{
    console.log('Minister')
}*/

/*if(business>minister && business>army){
    console.log('Business is bigger');
}
else if(minister>business && minister>army){
    console.log('minister is bigger');
}
else{
    console.log('army is bigger');
}*/

var max=Math.max(business,army,minister);
console.log('max is ',max);

function findMax(first,second){
    if(first>second){
        return first;
    }
    else{
        return second;
    }
}
const largest=findMax(154,254);
console.log('largest is',largest);
