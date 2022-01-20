const moment = require("moment");
const expensesObject = require("./expenses");

let expenses = { ...expensesObject }.expenses;

let total = expenses.reduce(
  (previousValue, currentValue) => previousValue + currentValue.amount,
  0
);
console.log("the sum with 3 objects is ", total); // logs 6

let arrayLength = 0;
expenses.forEach((element) => arrayLength++);

console.log(`the array has ${arrayLength} objects`);
