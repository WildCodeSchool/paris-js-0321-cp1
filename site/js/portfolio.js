const avatar = document.getElementById('avatar');
avatar.addEventListener('click', function() {
    const src = avatar.getAttribute('src')
    if (src == 'image/avatar.png') {
        avatar.setAttribute('src', 'image/avatar-bis.svg') 
    } else {
        avatar.setAttribute('src', 'image/avatar.png')
    }
})

