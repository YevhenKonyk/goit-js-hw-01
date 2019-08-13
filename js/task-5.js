"use strict";

let errorMesage = "The delivery for your country is not available";
let userCountry = prompt("Please provide your country :");
let deliveryCost;

if (!userCountry) {
    console.error("Aborted by user");
} else {
    userCountry = userCountry.toLowerCase();
    userCountry = userCountry.charAt(0).toUpperCase() + userCountry.slice(1);

    switch (userCountry) {
        case "Китай":
            deliveryCost = 100;
            break;
        case "Чили":
            deliveryCost = 250;
            break;
        case "Австралия":
            deliveryCost = 170;
            break;
        case "Индия":
            deliveryCost = 80;
            break;
        case "Ямайка":
            deliveryCost = 120;
            break;

        default:
            console.error(errorMesage);
    }

    let confirmationMessage = `Delivery to your country ${userCountry} will be cost ${deliveryCost} credits`;

    console.info(confirmationMessage);
}