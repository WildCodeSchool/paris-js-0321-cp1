// We set the source of the image avatar to a new url
const avatarChanged = document.getElementsByClassName('.avatar');
    avatar.addEventListener("click", function() {
	avatarChanged.style.scr = "image/avatar-bis.svg";
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
