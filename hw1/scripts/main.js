

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


const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    if(entry[0]==="date"){
        date = new Date().toLocaleDateString();
        entry[1] = date;
    }
    if(entry[0] ==="time"){
        time = new Date().toLocaleTimeString();
        entry[1] = time;
    }
    output = `\n${output}${entry[0]}: ${entry[1]}\n`; 
  };
  log.innerText = output;
  event.preventDefault();
}, false);