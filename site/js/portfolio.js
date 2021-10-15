const imgAvatar = document.querySelector('.avatar');
imgAvatar.addEventListener('click', function(){
    imgAvatar.src = "image/avatar-bis.svg";
})


const btn = document.querySelector('#btn');
btn.innerHTML = "Modify text and color";
btn.addEventListener('click', function(){
   const answer = prompt("Enter your name");
   document.getElementById('name').innerText = answer;
   
})