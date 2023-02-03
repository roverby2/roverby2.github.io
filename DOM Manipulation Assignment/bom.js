const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

button.addEventListener("click", function() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  span.textContent = input.value;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");

  li.appendChild(span);
  li.appendChild(deleteButton);
  list.appendChild(li);
});

list.addEventListener("click", function(event) {
  if (event.target.className === "delete") {
    event.target.parentElement.remove();
  }
});