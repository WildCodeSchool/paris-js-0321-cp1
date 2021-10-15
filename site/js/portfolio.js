const avatar = document.getElementById("avatar");
const btnChangeName = document.getElementById("btnChangeName")
const name = document.getElementById("name")

const elementsPinkBg = document.querySelectorAll(".pink-bg")
const elementsPinkText = document.querySelectorAll(".pink-text")


avatar.addEventListener("click", () => {
    avatar.src = "image/avatar-bis.svg";
})

btnChangeName.addEventListener("click", () => {
    const newBgColor = prompt("Enter the new color")
    const userName = prompt("Enter your name: ")
    name.innerHTML = userName
    name.style.color = "white"
    
    for(let i = 0; i < elementsPinkBg.length; i++) {
        elementsPinkBg[i].classList.remove("pink-bg")
        elementsPinkBg[i].classList.add("purple-bg")
    }

    for(let i = 0; i < elementsPinkText.length; i++) {
        elementsPinkText[i].classList.remove("pink-text")
        elementsPinkText[i].classList.add("purple-text")
    }
} )