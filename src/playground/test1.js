const testExpense = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: 1,
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: 2,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allAmounts = testExpense.reduce(
  function (previousValue, currentValue) {
    return [...previousValue, ...currentValue.amount];
  },
  [0]
);

console.log(allAmounts);
