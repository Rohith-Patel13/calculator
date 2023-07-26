let resultEL = document.getElementById("result");
let deleteLeftIconEL = document.getElementById("delete-left-icon");
let clearEL = document.getElementById("clear");
let bracketEL = document.getElementById("bracket");
let percentEL = document.getElementById("%");
let divideEL = document.getElementById("/");
let sevenEL = document.getElementById("7");
let eightEL = document.getElementById("8");
let nineEL = document.getElementById("9");
let xEL = document.getElementById("x");
let fourEL = document.getElementById("4");
let fiveEL = document.getElementById("5");
let sixEL = document.getElementById("6");
let minusEL = document.getElementById("-");
let oneEL = document.getElementById("1");
let twoEL = document.getElementById("2");
let threeEL = document.getElementById("3");
let plusEL = document.getElementById("+");
let totalEL = document.getElementById("total");
let zeroEL = document.getElementById("0");
let dotEL = document.getElementById(".");
let equalsEL = document.getElementById("=");

let arrayEL = [
  zeroEL,
  dotEL,
  plusEL,
  minusEL,
  divideEL,
  percentEL,
  sevenEL,
  eightEL,
  nineEL,
  xEL,
  fourEL,
  fiveEL,
  sixEL,
  oneEL,
  twoEL,
  threeEL,
];

arrayEL.forEach(function (i) {
  i.addEventListener("click", function () {
    resultEL.value += i.id;
  });
});

clearEL.addEventListener("click", function () {
  resultEL.value = "";
});
