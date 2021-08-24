// declare variable based on the name of an object property
const myObject = { x: 2, y: 3, z: 90, a: 80, b: 77 };
const { x, b } = myObject;
console.log(x);
// console.log('myObject.p', myObject?.p?.q);

//destructuring array

const [a, b] = [34, 44, 88, 99];
//console.log(a, b);

const [best, faltu] = ["hamim", "haimma"];
//console.log(best,faltu);
const { sky, color, money } = {
  sky: "blue",
  soil: "matti",
  color: "red",
  money: 500,
};

//chaining
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);