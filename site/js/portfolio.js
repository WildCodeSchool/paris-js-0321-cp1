const newAvatarImage = document.getElementById("avatar")

newAvatarImage.addEventListener('click', function(){

    newAvatarImage.src = "./image/avatar-bis.svg";
  
  
  
  })

  const button = document.getElementById("buttonName")
  button.addEventListener('click', function() {
    let answer = window.prompt("Enter your name");
    document.getElementById("name").innerHTML = answer
})