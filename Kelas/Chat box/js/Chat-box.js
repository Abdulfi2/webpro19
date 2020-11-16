const button = document.getElementById("add");
const chatRoom = document.getElementById("textroom");

button.addEventListener("click", () => {
  const chatText = document.getElementById("text");
  const list = document.createElement("li");
  list.classList.add("message");
  list.innerHTML = chatText.value;
  chatRoom.appendChild(list);
  chatText.value = "";
});