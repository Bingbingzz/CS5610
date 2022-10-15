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

let shoppingItems = ["Banana", "Ice cream", "Oat milk", "Free Run Eggs"]

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