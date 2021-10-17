const imgAvatar = document.querySelector('.avatar');
imgAvatar.addEventListener('click', function(){
    imgAvatar.src = "image/avatar-bis.svg";
})


const btn = document.querySelector('#btn');
btn.innerHTML = "Modify text and color";
btn.addEventListener('click', function(){
   const answer = prompt("Enter your name");
   const allColor = prompt("Enter your color");
   document.getElementById('name').innerText = answer;
   document.getElementById('name').style.color= "white";

   /*const answerColor = prompt("Enter your color");
   document.querySelector('.pink-bg').style.backgroundColor = answerColor;  */

   const bg = document.querySelectorAll('.pink-bg');
   bg.forEach((event) => {
       event.style.backgroundColor = allColor;

   })
   const text = document.querySelectorAll('.pink-text');
   text.forEach((e) => {
       e.style.color = allColor;
   });
})
