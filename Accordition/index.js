let section1 = document.getElementById("section1btn");
let text1 = document.getElementById("text1");
section1.addEventListener("click",()=>{
    section1.classList.toggle("active");
    if(text1.style.display=="block"){
        text1.style.display="none";
    }
    else{
        text1.style.display="block";
    }
});

let section2 = document.getElementById("section2btn");
let text2 = document.getElementById("text2");
section2.addEventListener("click",()=>{
    section2.classList.toggle("active");
    if(text2.style.display=="block"){
        text2.style.display="none";
    }
    else{
        text2.style.display="block";
    }
});
let section3 = document.getElementById("section3btn");
let text3 = document.getElementById("text3");
section3.addEventListener("click",()=>{
    section3.classList.toggle("active");
    if(text3.style.display=="block"){
        text3.style.display="none";
    }
    else{
        text3.style.display="block";
    }
});