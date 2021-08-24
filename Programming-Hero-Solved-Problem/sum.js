const numbers = [22, 23, 43, 65, 87, 98, 76, 56];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  sum = sum + element;
}
console.log(sum);

function arraySum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
const total=arraySum([32,32,32,32]);
console.log(total);
