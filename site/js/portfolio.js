const avatarPicture = document.getElementById('avatar-picture')

avatarPicture.addEventListener("click", function() {
    avatarPicture.src = './image/avatar-bis.svg'
})

const nameText = document.getElementById('name')
const nameAndColorButton = document.getElementById('name-and-color-button')
const backGroundColor = document.getElementsByClassName('pink-bg')
const textColor = document.getElementsByClassName('pink-text')
const menuLinks = document.getElementsByClassName('menu-link')

nameAndColorButton.addEventListener("click", function() {
    let color = prompt("What color would you like ?")
    let newName = prompt("What's your name ?")
    for (let i = 0 ; i < backGroundColor.length ; i++) {
        backGroundColor[i].style.backgroundColor = color
    }
    for (let i = 0 ; i < textColor.length ; i++) {
        textColor[i].style.color = color
    }
    for (let i = 0 ; i < menuLinks.length ; i++) {
        menuLinks[i].style.color = color
    }
    nameText.innerHTML = newName
    nameText.style.color = "white"
})

