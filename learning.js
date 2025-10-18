"use strict";
/**
 * Условия для получения кредита:
 * Пользователь должен быть старше 21 года и иметь кредитный рейтинг не ниже 650.
 * Если пользователь уже является клиентом банка, минимальный допустимый возраст снижается до 18 лет.
 * Кредит не выдается, если доход пользователя ниже 50 000 рублей, независимо от других условий.
 * Если доход пользователя превышает 100 000 рублей или кредитный рейтинг равен 850, условия возраста и статуса клиента могут быть проигнорированы.
 */
function testCreditApproval(age, income, creditScore, isExistingCustomer) {
  if (income < 50000) {
    return false;
  }else if (income >= 100000 && creditScore >=650 || creditScore === 850) {
    return true;
  }else if (isExistingCustomer && creditScore >= 650 && age >= 18 && income >= 50000) {
    return true;
  }else if  (age > 21 && creditScore >= 650) {
    return true;
  } else {
    return false;
  }
}

console.assert(
  testCreditApproval(18, 50000, 500, true) === false,
  "Плохая кредитная история"
);
console.assert(
  testCreditApproval(25, 49000, 700, false) === false,
  "Низкий доход"
);
console.assert(
  testCreditApproval(18, 50000, 650, true) === true,
  "Клиент банка с возрастом от 18"
);
console.assert(
  testCreditApproval(20, 50000, 650, false) === false,
  "Не клиент банка младше 21"
);
console.assert(
  testCreditApproval(17, 50000, 650, true) === false,
  "Слишком молодой даже для клиента банка"
);
console.assert(
  testCreditApproval(20, 100000, 600, false) === false,
  "Высокий доход условия возраста и статуса игнорируются, но кредитный рейтинг помешал"
);
console.assert(
  testCreditApproval(20, 100000, 650, false) === true,
  "Высокий доход условия возраста и статуса игнорируются"
);
console.assert(
  testCreditApproval(20, 50000, 850, false) === true,
  "Хороший кредитный рейтинг, условия возраста и статуса игнорируются"
);



// const age = 18;
// const income = 50_000;
// const isExistingCustomer = true;
// const creditScore = 650;

  
