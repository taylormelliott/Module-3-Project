let dinnerBtn = document.querySelector("#random-btn");
let yumYum = ["KFC", "Mickey D's", "Wendys"];

function randoGen() {
  let randomDin = yumYum[Math.floor(Math.random() * yumYum.length)];
  alert(randomDin);
}

dinnerBtn.addEventListener("click", randoGen);
