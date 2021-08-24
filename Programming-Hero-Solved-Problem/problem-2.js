function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
     //checking user input is a number or not
  if (typeof shirtQuantity != "number") {
    return "Please correct shirt Quantity";
  }
  if (typeof pantQuantity != "number") {
    return "Please give correct pant Quantity";
  }
  if (typeof shoeQuantity != "number") {
    return "Please give correct shoe Quantity";
  }
  const perShirtPrice = 100;
  const perPantPrice = 200;
  const perShoePrice = 500;
  // items sell calculation
  const totalShirtSell = shirtQuantity * perShirtPrice;
  const totalPantSell = pantQuantity * perPantPrice;
  const totalShoeSell = shoeQuantity * perShoePrice;
  // adding all Selling price
  const totalSell = totalShirtSell + totalPantSell + totalShoeSell;
  return totalSell;
}

const perDaySell = totalSales(1, 2, 3);
console.log(perDaySell);
