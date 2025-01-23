// const shareButton = document.querySelector('.share-button');
// const popup = document.querySelector('.share-popup');
// const icon = document.getElementsByClassName('icon-button')

// shareButton.addEventListener('click', e => {
//     e.preventDefault();
//     shareButton.classList.toggle('visible');
//     if(popup.style.display === "block"){
//         popup.style.display = "none";
//     } else{
//         popup.style.display = "block";
//     }
// });


const shareOption = document.querySelector('.share-option');
const shareButton = document.querySelector('.share-arrow');

shareButton.addEventListener('click', function(){
    shareButton.classList.toggle('active');
    shareOption.classList.toggle('active');
})