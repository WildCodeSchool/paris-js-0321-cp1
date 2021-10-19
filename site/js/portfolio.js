
 const toggleImage = () => {
    let Image_Id = document.getElementById('toggleImage');
    if (Image_Id.src = 'image/avatar.png' ) {
        Image_Id.src = 'image/avatar-bis.svg'
    }
    else {
        Image_Id.src = 'image/avatar.png'
    }
}  

const nameModify = () => {
    let colorModified = prompt("your favorite color");
    let nameModified = prompt("Enter Your Name");
     if (nameModified != null)
       document.getElementById('name').innerText=nameModified ;
      // document.querySelector('.pink-bg').style.backgroundColor = "purple"; 
      //const textC = () => {
          //document.querySelector('.pink-text').style.color = "purple"
      let elements = document.querySelectorAll(".pink-bg");       
          for (let i=0; i<elements.length;i++){
                 elements[i].style.backgroundColor=`${colorModified}`
             }
          elements = document.querySelectorAll(".pink-text");       
            for (let i=0; i<elements.length;i++){
                  elements[i].style.color=`${colorModified}`
          }
          elements = document.querySelectorAll(".menu a");       
            for (let i=0; i<elements.length;i++){
                  elements[i].style.color=`${colorModified}`
          }

}

const listModify = () =>{
    let  html = "VScode<br/>";
        html += "Github<br/>";
       html += "Terminal<br/>";
  
    document.getElementById("front-dev-tools").innerHTML = html;
    //document.getElementById("front-dev-tools").textContent = html;	

}


const valid = () => {
    let textW = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = textW;
  }
