const avatar = document.getElementById("avatar");
// const avatarBis =  document.getElementById.src= "image/avatar-bis.svg"
console.log(avatar);

avatar.addEventListener("click", () => changeAvatar());

function changeAvatar() {
    avatar.src = "image/avatar-bis.svg";
//   if (avatar.src == "image/avatar.png") {
//     console.log("if");
    
// } else {
//       console.log("else");
//     avatar.src = "image/avatar.png";
//   }
}