/*
Challenge:
1. The following expression should calculate total expenses 
   for a trip, but it has a problem. It is giving me 548 but 
   I think that is too cheap. Have a look, and see if you can 
   figure out what problem we have with operator precedence and 
   change the code so we log out the correct cost of the trip.
*/
let homeScore = 0;
let guestScore = 0;
document.getElementById("homeScore").innerText = homeScore;
document.getElementById("guestScore").innerText = guestScore;

let homeCard = document.getElementById("homeScore");
let guestCard = document.getElementById("guestScore");

function addOneGuest() {
  guestScore += 1;
  guestCard.innerText = guestScore;
  console.log("button clickd");
}

function addTwoGuest() {
  guestScore += 2;
  guestCard.innerText = guestScore;
  console.log("button clickd");
}

function addThreeGuest() {
  guestScore += 3;
  guestCard.innerText = guestScore;
  console.log("button clickd");
}
function addOneHome() {
  homeScore += 1;
  homeCard.innerText = homeScore;
  console.log("button clickd");
}
function addTwoHome() {
  homeScore += 2;
  homeCard.innerText = homeScore;
  console.log("button clickd");
}
function addThreeHome() {
  homeScore += 3;
  homeCard.innerText = homeScore;
  console.log("button clickd");
}
function clearBtn() {
  guestScore = 0;
  homeScore = 0;
  homeCard.innerText = homeScore;
  guestCard.innerText = guestScore;
}
console.log("hii");
