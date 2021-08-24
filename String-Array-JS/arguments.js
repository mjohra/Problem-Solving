function addNumbers(num1, num2) {
  //console.log(arguments[3]);
  //arguments.push(33); not work
  let result=0;
  for (const num of arguments) {
    //console.log(num);
    result+=num;
  }
  //const result = num1 + num2;
  return result;
}
const sum = addNumbers(23, 13, 44, 55);
//console.log(sum);

function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket');
console.log(name);
