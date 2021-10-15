const avatarPicture = document.getElementById('avatar-picture')
let defaultPicture = true

avatarPicture.addEventListener("click", function() {
    if (defaultPicture){
        avatarPicture.src = './image/avatar-bis.svg'
        defaultPicture = false
    }
    else {
        avatarPicture.src = './image/avatar.png'
        defaultPicture = true
    }
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

const frontDevToolsList = document.getElementById('front-dev-tools')
const frontDevToolsButton = document.getElementById('front-dev-tools-button')
const listToClear = document.querySelectorAll('.front-dev-tool')

frontDevToolsButton.addEventListener('click', function() {
    for (let item of listToClear) {
        item.remove()
    }

    const newDevList = ['VSCode', 'Github', 'Google']
    for (let i = 0 ; i < newDevList.length ; i++) {
        let item = document.createElement('li')
        item.innerHTML = newDevList[i]
        frontDevToolsList.appendChild(item)
    }
})

const backDevToolsList = document.getElementById('dev-tools-back-list')
const backDevInput = document.getElementById('newItem')
const form = document.getElementById('form')

form.onsubmit = function(event) {
    event.preventDefault()
    const newItem = document.createElement("li")
    newItem.innerHTML = backDevInput.value
    backDevToolsList.appendChild(newItem);
    backDevInput.value = "";
}