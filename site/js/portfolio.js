// We set the source of the image avatar to a new url
const avatarChanged = document.getElementsByClassName('.avatar');
    avatarChanged.addEventListener("click", function() {
	avatarChanged.src = "image/avatar-bis.svg";
    });

const nameChanged = document.querySelector('.nameChanged');
nameChanged.addEventListener("click", function() {
    const name=prompt("What's your name?");
    const newName=document.querySelector("#name")
    newName.innerHTML = `${name}`;
    newName.style.color= "white";
};
const nameColor= document.querySelector('.nameColor');
nameColor.addEventListener("click", function() {
    const colorChanged=prompt("What color do you want?");
    const newColor=document.querySelector('.description pink-bg')
    newColor.style.background-color= `${colorChanged}`;
};
const anotherColor=document.getElementsByClassName(".pink-bg")
for (let i=0; i<anotherColor.length;i++){
anotherColor[i].style.backgroundColor = "#750ff7"
}