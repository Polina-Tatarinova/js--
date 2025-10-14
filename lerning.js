"use strict";

const age = prompt('Сколько вам лет?', '');
const income = prompt('Какой ваш ежемесячный доход?', '');
const isExistingCustomer = prompt('Являетесь ли вы текущем клиентом банка?', '');
const creditScore = prompt('Какой ваш банковский рейтинг?', '');;

if (age > 21 && (creditScore >= 650 || creditScore <= 850) && income > 50000) {
    Console.log ('Поздравляем, кредит одобрен, наш представитель свяжется с вами в течение 2 - х часов');
} else if (isExistingCustomer == true && age >= 18 && income > 50000) {
    Console.log('Поздравляем, кредит одобрен, наш представитель свяжется с вами в течение 12- ти часов');
} else if (income <= 50000) {
    Console.log('К сожалению, кредит не одобрен, попробуйте позже');
} else if (income > 100000 || creditScore == 850) {
    Console.log('Поздравляем, вам одобрен кредит');
}