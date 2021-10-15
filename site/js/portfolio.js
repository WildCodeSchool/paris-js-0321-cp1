const avatar = document.getElementById("avatar");
const btnChangeName = document.getElementById("btnChangeName")
const name = document.getElementById("name")

const elementsPinkBg = document.querySelectorAll(".pink-bg")
const elementsPinkText = document.querySelectorAll(".pink-text")
const linkNavBar = document.querySelectorAll(".menu a")
const btnModifyFrontList = document.querySelector("#btnModifyFrontList")

const toolList = document.querySelector("#dev-tools-back-list")
const addTool = document.querySelector("#addBtn")

avatar.addEventListener("click", () => {
    avatar.src = "image/avatar-bis.svg";
})

btnChangeName.addEventListener("click", () => {
    const newBgColor = prompt("Enter the new color")
    const userName = prompt("Enter your name: ")
    name.innerHTML = userName
    name.style.color = "white"

    for(let elem of linkNavBar) {
        elem.classList.add("purple-text")
    }
    
    for(let i = 0; i < elementsPinkBg.length; i++) {
        elementsPinkBg[i].classList.remove("pink-bg")
        elementsPinkBg[i].classList.add("purple-bg")
    }

    for(let i = 0; i < elementsPinkText.length; i++) {
        elementsPinkText[i].classList.remove("pink-text")
        elementsPinkText[i].classList.add("purple-text")
    }
} )

btnModifyFrontList.addEventListener("click", () => {
    const lis = document.querySelectorAll("#front-dev-tools li")
    const ul = document.querySelector("#front-dev-tools")
    const tools = ["VS Code", "GitHub", "Terminal"]
    for(let i = 0; i < lis.length; i++) {
        li = lis[i]
        li.remove()
    }

    for(let i = 0; i < tools.length; i++) {
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(tools[i]))
        ul.appendChild(li)
    }   
    
})

addTool.addEventListener("click", () => {
    const newTool = document.querySelector("#tool").value
    const liTool = document.createElement("li")
    liTool.appendChild(document.createTextNode(newTool))
    toolList.appendChild(liTool)
})