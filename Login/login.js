
let modal = document.getElementById("id01");

let login = document.getElementById("btn1");

login.addEventListener("click",()=>{
    modal.style.display = "inline-block";
    setTimeout(func,1000);
    function func(){
        modal.classList.remove("animate");
        modal.classList.add("down");
    }
});

let cancelbtn1 = document.getElementById("cancelbtn1");
cancelbtn1.addEventListener("click",()=>{
    modal.style.display = "none";
});

let closebtn1 = document.getElementById("close");
closebtn1.addEventListener("click",()=>{
    modal.style.display = "none";
});
window.onclick = function(event){
    if(event.target==modal){
        modal.style.display = "none";
    }
}

