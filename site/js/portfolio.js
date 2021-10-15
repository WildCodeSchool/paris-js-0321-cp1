const avatar = document.getElementById("avatar");
const btnChangeName = document.getElementById("btnChangeName")
const name = document.getElementById("name")
const description = document.getElementsByClassName("description")[0]


avatar.addEventListener("click", () => {
    avatar.src = "image/avatar-bis.svg";
})

btnChangeName.addEventListener("click", () => {
    const newBgColor = prompt("Enter the new color")
    const userName = prompt("Enter your name: ")
    name.innerHTML = userName
    name.style.color = "white"
    description.classList.remove("pink-bg")
    description.style.backgroundColor = newBgColor
    btnChangeName.style.backgroundColor = newBgColor
} )