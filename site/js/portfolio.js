// We set the source of the image avatar to a new url
const imgAvatar = document.querySelector('.avatar');
    imgAvatar.addEventListener('click', function() {

    imgAvatar.src = "image/avatar-bis.svg";
    })

const nameChanged = document.querySelector('#btm');
nameChanged.innerHTML="Modify text and color";
nameChanged.addEventListener("click", function() {
    const name=prompt("What's your name?");
    
    document.getElementById('name').innerHTML=name;
    document.getElementById('name').style.color="white";
    const btmColor=prompt("What's color do you want?");
    const anotherColor=document.querySelectorAll(".pink-bg");
    anotherColor.forEach((event)=>{
        event.style.backgroundColor=btmColor;
    })
    /*
    for (let i=0; i<anotherColor.length;i++){
        anotherColor[i].style.backgroundColor*/
});

/*
anotherColor.addEventListener("click", function() {
    
    const newName=document.querySelector("#name")
    newName.innerHTML = `${name}`;
    newName.style.color= "white";

}*/
