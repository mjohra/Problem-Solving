function deliveryCost(tShirt) {
  //delivery cost according to shirt's number
  const maxDeliveryCost = 100;
  const mediumDeliveryCost = 80;
  const lowestDeliveryCost = 50;
  //checking user input is a number or not
  if (typeof tShirt != "number") {
    return "Please give a number";
  }
  //cost count for 100 or less than 100 shirt
  if (tShirt <= 100) {
    const count = tShirt * maxDeliveryCost;
    return count;
  }
  //cost count for 100 and less than or equal 200 shirt
  else if (tShirt <= 200) {
    const firstDeliveryCost = 100 * maxDeliveryCost;
    const restShirt = tShirt - 100;
    const secondDeliveryCost = restShirt * mediumDeliveryCost;
    const totalCost = firstDeliveryCost + secondDeliveryCost;
    return totalCost;
  }
  //cost count for more than 200 shirt
  else {
    const firstDeliveryCost = 100 * maxDeliveryCost;
    const secondDeliveryCost = 100 * mediumDeliveryCost;
    const restShirt = tShirt - 200;
    const thirdDeliveryCost = restShirt * lowestDeliveryCost;
    const totalCost =
      firstDeliveryCost + secondDeliveryCost + thirdDeliveryCost;
    return totalCost;
  }
}

const cost = deliveryCost(250);
console.log(cost);
