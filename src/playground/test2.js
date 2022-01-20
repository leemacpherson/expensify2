const moment = require("moment");

let friends = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: moment(0).valueOf(),
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allbooks = friends.reduce(
  function (previousValue, currentValue) {
    return [...previousValue, ...currentValue.description];
  },
  ["Alphabet"]
);

console.log(allbooks);
