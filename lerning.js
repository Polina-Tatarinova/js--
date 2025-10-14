"use strict";

const age = 23;
const income = 70_000;
const isExistingCustomer = true;
const creditScore = 700;

if (age > 21 && (creditScore >= 650 || creditScore <= 850) && income > 50000){
    сonsole.log ('Поздравляем, кредит одобрен, наш представитель свяжется с вами в течение 2 - х часов');
} else if (isExistingCustomer == true && age >= 18 && income > 50000){
    сonsole.log('Поздравляем, кредит одобрен, наш представитель свяжется с вами в течение 12- ти часов');
} else if (income <= 50000){
    сonsole.log('К сожалению, кредит не одобрен, попробуйте позже');
} else if (income > 100000 || creditScore === 850){
    сonsole.log('Поздравляем, вам одобрен кредит');
}