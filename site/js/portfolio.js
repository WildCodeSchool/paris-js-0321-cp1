const avatarPicture = document.getElementById('avatar-picture')

avatarPicture.addEventListener("click", function() {
    avatarPicture.src = './image/avatar-bis.svg'
})

const nameText = document.getElementById('name')
const nameAndColorButton = document.getElementById('name-and-color-button')
const backGround = document.getElementsByClassName('pink-bg')

nameAndColorButton.addEventListener("click", function() {
    let color = prompt("What color would you like ?")
    let newName = prompt("What's your name ?")
    backGround[0].style.backgroundColor = color
    backGround[1].style.backgroundColor = color
    nameText.innerHTML = newName
    nameText.style.color = "white"
})

