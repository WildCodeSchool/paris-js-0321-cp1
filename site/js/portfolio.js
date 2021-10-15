const avatarImage = document.querySelector('.avatarClass');
avatarImage.addEventListener('click', function (event){
    avatarImage.src="./image/avatar-bis.svg";
});


const buttonAvatar = document.getElementById('nameButton');
buttonAvatar.addEventListener('click', function (event){
    const name = document.getElementById('name');
    const devName =  window.prompt('Enter a name :');
    name.innerHTML = devName;
    name.style.color = 'white';

    const newColor = window.prompt('Enter a color code :');
    const colorChange = document.querySelectorAll('.pink-bg');
    console.log(colorChange)
    for(let i = 0; i < colorChange.length ; i ++){
    colorChange[i].style.backgroundColor = `${newColor}`;
    }
    const textColorChange = document.querySelectorAll('.pink-text');
    for(let y = 0; y < textColorChange.length; y ++){
        textColorChange[y].style.color = newColor;
    }    
});

const toolsButton = document.getElementById('toolsButton');
const toolsList = document.getElementById('front-dev-tools');
toolsButton.addEventListener('click', function (event) {
    toolsList.querySelectorAll('*')

})

