/* eslint-disable */
const avatar = document.querySelector('#avatar');
console.log(avatar);
    avatar.addEventListener('mouseover',function(){
    avatar.src=('/paris-js-0321-cp1/site/image/avatar-bis.svg');
    avatar.alt="picture of my avatar"
})
    avatar.addEventListener('mouseleave',function(){
    avatar.src=('/paris-js-0321-cp1/site/image/avatar.png');
    avatar.alt="picture of a second avatar"
})

const name = prompt("What's your name ?");
name.innerHTML(`${prompt.name}`);


