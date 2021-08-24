const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLength=friends.map(friend=>friend.length);
console.log(fLength);
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
//MAP:
/* 1. loop through each element
   2. for each element call the provided function
   3. result for each element will be stored in an array */
const productNames=products.map(product=>product.name);
const productPrices=products.map(product=>product.price);
// products.map(product => console.log(product)); //MAP WILL RETURN ARRAY
console.log(productPrices);
products.forEach(product =>console.log(product)); //ELEMENT RETURN KORBE