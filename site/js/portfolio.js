const avatar = document.getElementById('avatar');
avatar.addEventListener('click', function() {
    const src = avatar.getAttribute('src');
    if (src == 'image/avatar.png') {
        avatar.setAttribute('src', 'image/avatar-bis.svg') ;
    } else {
        avatar.setAttribute('src', 'image/avatar.png');
    }
})


const description = document.querySelector('.description');
const defaultName = document.getElementById('name');
const background = document.getElementsByClassName('pink-bg');
const nameButton = document.createElement('button');
const pinkText = document.getElementsByClassName('pink-text');
const link = document.getElementsByTagName('a');
nameButton.classList.add('nameButton');
nameButton.innerHTML = 'Change Name';
description.appendChild(nameButton);
nameButton.onclick = () => changeName();
    

function changeName() {
    const newName = prompt('Enter a new name:')
    const newColor = prompt('Enter a new color:')
    defaultName.innerHTML = `${newName}`;
    defaultName.style.color = 'white';
    for (i = 0; i < background.length; i++) {
        background[i].style.backgroundColor = `${newColor}`;
    }
    for (i = 0; i < pinkText.length; i++) {
        pinkText[i].style.color = `${newColor}`;
    }
    for (i = 0; i < link.length; i++) {
        link[i].style.color = `${newColor}`;
    }



  
    

    
 


}

