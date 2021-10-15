const newAvatarImage = document.getElementById("avatar")

newAvatarImage.addEventListener('click', function(){

    newAvatarImage.src = "./image/avatar-bis.svg";
  
  
  
  })

  const button = document.getElementById("buttonName")
  button.addEventListener('click', function() {
    let answer = window.prompt("Enter your name");
    let answerColor = window.prompt("Enter your color");
    document.getElementById("name").innerHTML = answer 
    document.getElementById("name").style.color = 'white'
    document.getElementsByClassName("pink-bg").style.backgroundColor = answerColor;
    

})

    
    


