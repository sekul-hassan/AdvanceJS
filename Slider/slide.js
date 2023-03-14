let slideIndex = 0;

let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let sildeLen = slides.length;
let dotLen = dots.length;

function currentSlide(n){
    slideIndex = n;
    slideIs(slideIndex-1)
}
function plus(n){
    slideIndex+=n;
    if(slideIndex<0){
        slideIndex = slides.length-1;
    }
    else if(slideIndex>=slides.length){
        slideIndex = 0;
    }
    slideIs(slideIndex);
}
slideIs(slideIndex);

slides[slideIndex].style.display = "block";

function slideIs(n){
   for(let i=0;i<sildeLen;i++){
    slides[i].style.display = "none";
   }
   for(let i=0;i<dotLen;i++){
    dots[i].className = dots[i].className.replace(" active","");
   }
   slides[n].style.display = "block";
   dots[n].className += " active";
}