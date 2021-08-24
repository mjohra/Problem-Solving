document.getElementById('add-border').addEventListener('click',function(){
    const container=document.getElementById('friend-container');
    container.style.border='4px solid red';
})

function addBackgroundColor(){
// more than single element will call by its class name
const friends=document.getElementsByClassName('friend');

//if its more than 1 element then we have to use loop 
for(const friend of friends){
    friend.style.backgroundColor='lightblue';
} 
}

document.getElementById('add-friend').addEventListener('click',function(){
    const container=document.getElementById('friend-container');
    const friendDiv=document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML=`<h3 class="friend-name">Friend-4</h3>
    <p>Similique, sed!</p>`;
    container.appendChild(friendDiv);
})