

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

//Get the current time or date from radio button
const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    if(entry[0]==="date"){
        date = new Date().toDateString();
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