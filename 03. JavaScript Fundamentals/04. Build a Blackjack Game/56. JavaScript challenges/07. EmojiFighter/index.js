let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

  stageEl.textContent =
    fighters[randomPick()] + " vs " + fighters[randomPick()];
});
function randomPick() {
  let lng = fighters.length;
  let n = Math.floor(Math.random() * lng);
  return n;
}
