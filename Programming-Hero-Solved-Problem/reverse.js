const greetings='Hello, how are you?';
let reverse='';

function reverseString(text){
    for(const letter of text){
        //console.log(letter)
        reverse=letter+reverse;
    }
    return reverse;
}

const reversed=reverseString(greetings);
console.log(reversed);