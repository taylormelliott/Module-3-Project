let dinnerBtn = document.querySelector("#random-btn");
let yumYum = ["KFC", "Mickey D's", "Wendys"];
let randomDin = array[Math.floor(Math.random() * yumYum.length)];

function randoGen() {
  return randomDin.value;
}

dinnerBtn.addEventListener("click", randoGen);
