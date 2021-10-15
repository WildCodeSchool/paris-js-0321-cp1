const userName = prompt("Enter your name: ")
const avatar = document.getElementById("avatar");
const btnChangeName = document.getElementById("btnChangeName")
const name = document.getElementById("name")


avatar.addEventListener("click", () => {
    avatar.src = "image/avatar-bis.svg";
})

btnChangeName.addEventListener("click", () => {
    name.innerHTML = userName
    name.style.color = "white"
} )