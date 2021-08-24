const names=['abul', 'babul','cabul','dabul','ebul','fabul','babul','ebul','babul','gabul','abul','habul','dabul'];

function removeDuplicate(names){
    const unique=[];
    for(const element of names){
        if(unique.indexOf(element)==-1)
        unique.push(element);
    }
    return unique;
}
const uniqueNames=removeDuplicate(names);
console.log(uniqueNames);