const firstAvatar = document.getElementById('first-avatar');
firstAvatar.onclick = function(){
  firstAvatar.src = "image/avatar.png";
  console.log("Hello");
};

const changeButton = document.getElementById('change-button');
changeButton.onclick = function(){
  const getColor = prompt('Enter a color');
  const getName = prompt('Enter your name');
  const descriptionName = document.getElementById('name');
  const pinkBG = document.getElementsByClassName('pink-bg');
  const pinkText = document.querySelectorAll ('.pink-text')
  descriptionName.innerHTML = getName;
  descriptionName.style.color = 'white';
  for (let i=0; i< pinkBG.length; i++) {
    pinkBG[i].style.backgroundColor = getColor;
  }
  for (let i=0; i< pinkText.length; i++) {
    pinkText[i].style.color = getColor;
  }
}
