// function getNumber(){
//     let num;
//     do{
//         num = prompt("Enter a number");
//     }while(isNaN(num));
//     return num;
// }

// let number = getNumber();
// let radius = document.querySelector("#radius")
// radius.innerText += ` ${number}`;

// function calculateArea(rad){
//     let area = Math.PI * Math.pow(rad,2);
//     return area;
// }

// let area = calculateArea(number);
// let result = document.querySelector("#result");
// result.innerText += ` ${area}`;


let shoppingListElement = document.querySelector(".shopping");

let shoppingItems = ["Banana", "Ice cream", "Oat milk", "Free Run Eggs", "Green Tea"]

shoppingListElement.addEventListener("click", strikeThrough);

function strikeThrough(event){
    event.target.innerHTML = `<del>${event.target.innerText}</del>`


}


function populateList(arr){
    for(let item of arr){
        let listItem = document.createElement("li");
        listItem.innerText = item;
        shoppingListElement.appendChild(listItem);

    }
}
populateList(shoppingItems);

function squareListItems(){
    // shoppingListElement.setAttribute("class", "squareList");
    shoppingListElement.classList.add("squareList");

}

squareListItems();

function greenItems() {
    let listItems = document.querySelectorAll(".shopping li");
//     listItems.forEach((item) => {
//       if (item.innerText.includes("green")) {
//         item.classList.add("greenText");
//       }
//     });
    for (let item of listItems) {
    // if (item.innerText.indexOf("green") != -1)
    if (item.innerText.includes("Green")) {
        // console.log(item);
        item.classList.add("greenText");
        }
    }
}
  
greenItems();

let clickButton = document.querySelector("#updateImage");
clickButton.addEventListener("click", changeButtonText);

function changeButtonText(){
if (clickButton.innerText === "Click me!"){
    clickButton.innerText = "Clicked!";

}else{
    clickButton.innerText = "Click me!";
    }
}

let shoppingCartImage = document.querySelector("#shoppingCart");
clickButton.addEventListener("click", updateImage, {once: true});

function updateImage(){
// console.log("image update once");
shoppingCartImage.src = "images/shoppingCart.png";
shoppingCartImage.alt = "shopping cart";
shoppingCartImage.width = 50;
shoppingCartImage.height = 50;
// clickButton.removeEventListener("click", updateImage);
}

let buttonContainer = document.querySelector("#buttonContainer");
// let buttons = document.querySelectorAll("img ~ button");
// console.log(buttons);
buttonContainer.addEventListener("mouseover", changeButtonBGColor);
// for (let button of buttons){
//     button.addEventListener("mouseover", changeButtonBGColor);
// }

function changeButtonBGColor(event){
    // console.log(event.target);
    event.target.style.backgroundColor = event.target.innerText;
}

