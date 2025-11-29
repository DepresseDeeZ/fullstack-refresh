// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

// function saveLead() {
//     console.log("Button clicked!")
// }

let saveEl = document.getElementById("input-btn");
saveEl.addEventListener("click", function () {
  console.log("Button clicked!");
});
