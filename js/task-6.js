"use strict";

let total = 0;
let input;

do {
    input = prompt("Please enter the number");
    let inputToNumber = +input;

    if (!isNaN(inputToNumber)) {
        total += inputToNumber;
    } else {
        alert("Please input correct value");
    }

} while (input !== null);

alert(total);