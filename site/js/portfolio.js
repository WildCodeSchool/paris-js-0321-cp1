
const avatars = document.getElementById('banner-avatar');
avatars.addEventListener('click', function() {
avatars.src=('./image/avatar-bis.svg');
avatars.alt='Avatar bis';
})


const modifyDesc = document.getElementById('modify-desc');
modifyDesc.addEventListener('click', function(){
    const userName = prompt("What's your name ?");
    const userColor = prompt("Enter a color");
    const name = document.getElementById('name');
    const pinkElements = document.querySelectorAll('.description');
    const links =document.querySelectorAll('a');
    const pinkText = document.querySelectorAll('.pink-text');
    name.innerHTML = userName;
    name.style.color = 'white';
    for (let i=0 ; i <pinkElements.length; i++) {
        pinkElements[i].style.backgroundColor = userColor;
    }
    for (let i=0; i<pinkText.length;i++) {
        pinkText[i].classList.add('purple-text');
    }
    for (let i=0; i < links.length ; i++){
        links[i].style.color = userColor;
    }
})

