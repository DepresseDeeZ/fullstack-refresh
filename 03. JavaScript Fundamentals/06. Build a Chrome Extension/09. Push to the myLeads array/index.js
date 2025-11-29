let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// Push the value "www.awesomelead.com" to myArray when the input button is clicked
let site = "www.awesomelead.com";
inputBtn.addEventListener("click", function () {
  myLeads.push(site);
  console.log("Button clicked!");
  console.log(myLeads);
});

