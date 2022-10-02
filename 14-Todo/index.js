const container = document.querySelector(".container");
const inputValue = document.querySelector(".input");
const addButton = document.querySelector(".addButton");

class Item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");
    container.appendChild(itemBox);
    itemBox.appendChild(input);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("editButton");
    itemBox.appendChild(editButton);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.classList.add("removeButton");
    itemBox.appendChild(removeButton);

    function edit(input) {
      input.disabled = !input.disabled;
    }
    function remove(itemBox) {
      container.removeChild(itemBox);
    }
    editButton.addEventListener("click", () => {
      edit(input);
    });
    removeButton.addEventListener("click", () => {
      remove(itemBox);
    });
  }
}

addButton.addEventListener("click", () => {
  if (inputValue.value != "") {
    new Item(inputValue.value);
    inputValue.value = "";
  }
});
