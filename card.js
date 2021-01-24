let sliderImg = document.getElementById('slider-img')
let images = ['img/a.jpg', 'img/b.jpg', 'img/c.jpg', 'img/d.jpg', 'img/e.jpg', 'img/g.jpg', 'img/h.jpg']
let i = 0;

function next () {
    i++; i%=images.length;
    sliderImg.src = images[i]
}
function prev () {
    if(i <= 0) i = images.length;
    i--; 
    sliderImg.src = images[i]
}


const signUp = () => {
    let regstration = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        textArea: document.getElementById('textArea').value
    }
    localStorage.setItem('regstration', JSON.stringify(regstration));

    fname.value = ''
    lname.value = ''
    email.value = ''
    textArea.value = ''
}