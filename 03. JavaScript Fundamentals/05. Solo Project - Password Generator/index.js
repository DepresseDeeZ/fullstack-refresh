const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "\\",
  "|",
  ";",
  ":",
  "<",
  ">",
  "?",
  "/",
];
let main = [];
// when user click on gerrneate pass create 2 differnt 15 character lomg password and add them in differnt p tags
// strech goals
//1.add dynaimc password length coudl be 15 to any number
//2. add copy-on click feature
//3. add toggle symbols and number on or off

// taking toggle value
let numberToggle = document.getElementById("numbers");
let symbolToggle = document.getElementById("symbols");
// is toggle check or not
// let isNumberToggle = numberToggle.checked;
// let isSymbolToggle = symbolToggle.checked;
// password generated
let pass1 = "";
let pass2 = "";
// get the inpit field id
let passText1 = document.getElementById("pass1");
let passText2 = document.getElementById("pass2");

// input field pass lenght
let passLengthElement = document.querySelector(".pass-length");
function generatePass() {
  passText1.value = generateRandomCombination();
  passText2.value = generateRandomCombination();
}
function generateRandomCombination() {
  // get the leght of password form here
  let pass = "";
  let passLength = Number(passLengthElement.value);
  if (numberToggle.checked && symbolToggle.checked) {
    main = characters.concat(symbols).concat(numbers);
  } else if (numberToggle.checked) {
    main = characters.concat(numbers);
  } else if (symbolToggle.checked) {
    main = characters.concat(symbols);
  } else {
    main = characters;
  }
  for (let i = 0; i < passLength; i++) {
    pass += main[Math.floor(Math.random() * main.length)];
  }
  return pass;
}

function copyTooltip(id, el) {
  const text = document.getElementById(id).value;

  navigator.clipboard.writeText(text).then(() => {
    el.classList.add("show");

    setTimeout(() => {
      el.classList.remove("show");
    }, 1000);
  });
}
