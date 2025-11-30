/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEL = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const para1 = document.getElementById("p-1");
const para2 = document.getElementById("p-2");
const para3 = document.getElementById("p-3");

convertBtn.addEventListener("click", function () {
  para1.textContent = `${inputEL.value} meters = ${Number(
    inputEL.value * 3.281
  ).toFixed(3)} feet | ${inputEL.value} feet = ${Number(
    inputEL.value / 3.281
  ).toFixed(3)} meters`;
  para2.textContent = `${inputEL.value} liter = ${Number(
    inputEL.value * 0.264
  ).toFixed(3)} gallon | ${inputEL.value} gallon = ${Number(
    inputEL.value / 0.264
  ).toFixed(3)} liter`;
  para3.textContent = `${inputEL.value} kilogram = ${Number(
    inputEL.value * 3.281
  ).toFixed(3)} pound | ${inputEL.value} pound = ${Number(
    inputEL.value / 3.281
  ).toFixed(3)} kilogram`;
});
