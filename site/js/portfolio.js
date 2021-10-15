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
const background = document.querySelector('.pink-bg');
const nameButton = document.createElement('button');
nameButton.classList.add('nameButton');
nameButton.innerHTML = 'Change Name';
description.appendChild(nameButton);
nameButton.onclick = () => changeName();
    

function changeName() {
    const newName = prompt('Enter a new name:')
    defaultName.innerHTML = `${newName}`;
    defaultName.style.color = 'white';
    background.style.backgroundColor = '#750ff7';


}

