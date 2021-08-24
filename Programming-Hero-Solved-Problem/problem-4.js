function perfectFriend(friendName) {
  //checking user input length is less than 5 or not
  for (let i = 0; i < friendName.length; i++) {
    let item = friendName[i];
    //checking if input is a string or not
    if (typeof item == "number") {
      return "Please give a string of array";
    }
    if (item.length >= 5) {
      return item;
    }
  }
}
const names = ["Riz", "Tom", "Hamim", "Tauhid", "Mehjabin", "Mou", "Johra"];
var myFriend = perfectFriend(names);
console.log(myFriend);
