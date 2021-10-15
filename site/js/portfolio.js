const newAvatar = () => {
    document.getElementById("avatar1").addEventListener("click", function(){
        if(newAvatar.src != "image/avatar-bis.svg"){
            newAvatar.src = "image/avatar-bis.svg";}
          else{
            newAvatar.src = "image/avatar.png";}});
};