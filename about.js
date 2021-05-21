console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("form submited succefully!");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

let cat = document.querySelector("img");

cat.addEventListener("mouseover", compliment);

function compliment() {
  alert("You are sexy");
}
