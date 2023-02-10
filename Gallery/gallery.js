//Dropdown menu
const menuTab = document.querySelector('.menuTab');
menuTab.addEventListener('click',dropdown)

function dropdown(){
    const dropItems = document.querySelectorAll('.dropdownOption');
    dropItems.forEach(option => option.classList.toggle('optionStyle'));
}

window.onclick = function(event){
    if (!event.target.matches('.menuTab')){
        let options = document.querySelectorAll('.dropdownOption');
        for (let i = 0; i < options.length; i++){
            if (options[i].classList.contains('optionStyle')){
                options[i].classList.remove('optionStyle');
            }
        }
    }
}


//Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(n){
    let slides = document.querySelectorAll(".slide");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}