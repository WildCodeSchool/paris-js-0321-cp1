let myImage = document.querySelector(".banner-img img");
myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "./image/avatar.png") {
    myImage.setAttribute("src", "./image/avatar-bis.svg");
  } else {
    myImage.setAttribute("src", "./image/avatar.png");
  }
});

let myNameName = document.querySelector("#name");
let selectName = document.querySelector(".descrition-btn");
selectName.addEventListener("click", function () {
  let myColor = prompt("Enter Color");
  let myName = prompt("Enter your name ");
  myNameName.textContent = `${myName}`;

  let myOtherColorDiv = document.querySelector(".description pink-bg");
   myOtherColorDiv.style.backgroundColor = `${myColor}`;
});
