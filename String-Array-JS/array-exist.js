function megaFriend(friends){
    if(Array.isArray(friends)==false){
        return 'provide array';
    }
    let mega=friends[0];
    for(const friend of friends){
        if(friend.length>mega.length){
            mega=friend;
        }
    }
    return mega;
}
const friends=['mim','hamim','mouri'];
const myBiBuddy=megaFriend(1234);
//console.log(myBiBuddy);
if(friends.indexOf('mim')!=-1){
    //console.log('mim exists');
}

if(friends.includes('mim')){
    //console.log('mim includes');
}
//concat
const first=[1,2,3];
const second=[4,5,6];
const combined=first.concat(second);
//console.log(combined);
const task = "Practice Makes a person perfect";

const index = task.toLowerCase().indexOf("M");
console.log(index);