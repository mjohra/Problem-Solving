function largestElement(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const ages = [12, 13, 100, 14, 24, 33, 55, 66, 88, 96, 99];
const age=[-2,-3,-5];
const oldest = largestElement(ages);
console.log("Largest ", oldest);
const old = largestElement(age);
console.log("Largest ", old);
