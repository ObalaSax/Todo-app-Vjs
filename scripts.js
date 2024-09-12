const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("my-list");

function addMe() {
  if (inputBox.value === "") {
    alert("Please Add A Task");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listContainer.appendChild(listItem);
  }
}
