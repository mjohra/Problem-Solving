function seerToMon(seer) {
  //checking user input is a number or not
  if (typeof seer != "number") {
    return "Please give a number";
  }
  var mon = seer / 40;
  return mon;
}
var inputSeer = 80;
var resultMon = seerToMon(inputSeer);
console.log(resultMon);
