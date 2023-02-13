const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", function () {
  message = input.value;
  fetch("https://chartreuse-green-chimpanzee-toga.cyclic.app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  })
    .then((res) => res.json())
    .then((data) => (result.innerHTML = data.message));
});
