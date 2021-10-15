
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
 let nameModified = prompt("Enter Your Name");
     if (nameModified != null)
       document.getElementById('name').innerText=nameModified 
        document.pink-bg.style.backgroundColor('red'); 

}

