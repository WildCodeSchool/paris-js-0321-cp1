const avatarPicture = document.getElementById('avatar-picture')

avatarPicture.addEventListener("click", function() {
    avatarPicture.src = './image/avatar-bis.svg'
})

const nameText = document.getElementById('name')
const nameButton = document.getElementById('name-button')

nameButton.addEventListener("click", function() {
    let newName = prompt("What's your name ?")
    nameText.innerHTML = newName
    nameText.style.color = "white"
})