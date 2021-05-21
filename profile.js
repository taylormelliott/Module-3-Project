let favColor = document.querySelector("#color");
let favPlace = document.querySelector("#place");
let favRitual = document.querySelector("#ritual");

function showColor() {
  alert("Purple is the best. Don't test me");
}
favColor.addEventListener("click", showColor);

function showPlace() {
  alert("Obviously with women");
}

favPlace.addEventListener("click", showPlace);

function showRitual() {
  alert("Coffee, coffee, followed by coffee");
}
favRitual.addEventListener("click", showRitual);
