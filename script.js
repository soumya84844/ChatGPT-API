const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", function () {
  message = input.value;
  fetch("http://localhost:3001/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  })
    .then((res) => res.json())
    .then((data) => (result.innerHTML = data.message));
});
