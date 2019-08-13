"use strict";

let credits = 23580;
let pricePerDroid = 300;
let totalPrice;
let creditsAmount;
let droidsCount = prompt("Укажите количество дроидов которые вы хотите купить");
let inputErrorMessage = "Отменено пользователем!";

if (!droidsCount) {
    console.warn(inputErrorMessage);
} else {
    totalPrice = (droidsCount * pricePerDroid);
    creditsAmount = (credits - totalPrice);

    let buySuccessMessage = `Вы купили ${droidsCount} дроидов, на счету осталось ${creditsAmount} кредитов.`;
    let buyErrorMessage = "Недостаточно средств на счету!";

    credits >= totalPrice ? console.info(buySuccessMessage) : console.error(buyErrorMessage);
}