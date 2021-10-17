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

const modifyButton = document.getElementById('modify-button');
modifyButton.onclick = function(){
  const devTools = document.getElementById('front-dev-tools');
  devTools.style.display = 'none';
  const modifiedDevTools = document.getElementById('modified-front-dev-tools');
  modifiedDevTools.style.display = "block";
}

const devtoolsButton = document.getElementById('devtools-button');
devtoolsButton.onclick = function(){
  const inputValue = document.getElementById('devtools-input').value;
  const devtoolsList = document.getElementById('dev-tools-back-list')
  if (inputValue !== '') {
    const newDevtool = document.createElement("li");
    newDevtool.innerHTML = inputValue;
    devtoolsList.appendChild(newDevtool);
  }
}
