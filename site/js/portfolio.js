
const profile2 = document.getElementById("avatar1");

profile2.addEventListener("click", function() {
    profile2.src = "image/avatar.png";
  });

  const button = document.getElementById("changename");
  const nameChange = document.getElementById("name");
//   const pinkChange = document.getElementById("pink");
//   const textChange = document.getElementById("pinktext");
  
  // const pinkChange = document.getElementsById("presentate");


 button.addEventListener("click", function() {
   const person = prompt("Please enter your name", "Harry Potter");
   const colour = prompt("Please enter a color");
   nameChange.innerHTML = person;
   nameChange.style.color = "white";
 });

//  button.addEventListener("click", function() {
//  const colour = prompt("Please enter a color");
//     pinkChange.style.backgroundColor = colour;
//   });