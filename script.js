//Task 1
let pip = document.getElementById("pip");
let group = document.getElementById("group");
let variant = document.getElementById("variant");
let telephone = document.getElementById("telephone");
let IDcard = document.getElementById("IDcard");


let phonePattern = /^[0-9]{3}\d{3}\d{4}/;

function validation() {
    if(!phonePattern.test(telephone.value)) {
        telephone.setCustomValidity("Invalid field.")
    } else {
        telephone.setCustomValidity("")
        alert(`Name and surname: ${pip.value} 
            \nVariant: ${variant.value}
            \nGroup: ${group.value}
            \nTelephone: ${telephone.value}
            \nIDcard: ${IDcard.value}`)
    }
}

//Task 2

let row = document.getElementById("row");
let cell = document.getElementById("cell");
let colorPicker = document.getElementById("colorPicker");

function randomColor() {
    cell.style.background = getRandomColor();
}

function setColor() {
    row.style.background = colorPicker.value;
    cell.style.background = colorPicker.value;
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  