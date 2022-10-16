

window.onscroll = function() {stickNavBar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let buttonBG = document.querySelector("#buttonBG");
buttonBG.innerText = localStorage.getItem("buttonText")?localStorage.getItem("buttonText"):`dark mode`;
buttonBG.addEventListener("click", changeButtonText);
function changeButtonText(){
    if(buttonBG.innerText ==="dark mode"){
        buttonBG.innerText = "light mode";
        localStorage.setItem("buttonText", "light mode");
    }else{
         buttonBG.innerText = "dark mode";
         localStorage.setItem("buttonText", "dark mode");
    }
}

//Change to the theme last time user chose.
mode = localStorage.getItem("buttonText");
if (mode === "dark mode"){
    changeBGStyle();
}

function changeBGStyle(){
    var element = document.getElementById("myDiv");
    element.classList.toggle("myStyle");   
}



