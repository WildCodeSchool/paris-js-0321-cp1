function changeAv() {
    document.querySelector('.avatar01').src = "../image/avatar-bis.svg";
  }

function changeMatt() {
    newColor = prompt("new Color : ");
    newName = prompt("new Name : ");
    
    document.querySelector('#name').innerHTML = newName;
    document.querySelector('#name').style.color = 'white';
    
    // document.querySelectorAll(".pink-bg").style.backgroundColor = newColor;
    document.querySelector('.avatar01').src = "../image/avatar-bis.svg";

    fond = document.querySelector(".description");
    fond.style.backgroundColor = newColor;


}

