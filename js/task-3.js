"use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt("Please enter your password");

if (!message) {
    message = "Cancelled by user";
} else if (message === ADMIN_PASSWORD) {
    message = "Welcome aboard";
} else {
    message = "Acces denied. Incorrect password!"
}

alert(message);