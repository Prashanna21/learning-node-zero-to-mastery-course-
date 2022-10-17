const loadImgBtn = document.getElementById('load-image-btn') 
const image = document.getElementById("image")

loadImgBtn.addEventListener('click', () => {
    image.src = "coolpic.JPG"
    console.log('button clicks')
})