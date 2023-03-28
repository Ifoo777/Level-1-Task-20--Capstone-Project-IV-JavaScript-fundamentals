//Create a table
let table = document.getElementById("savetable");
let tableHeaderTr = document.createElement("tr");
let tableHeaderOne = document.createElement("th");
let tableHeaderTwo = document.createElement("th");
tableHeaderOne.innerHTML += "Name of Item Saved";
tableHeaderTwo.innerHTML += "Source Directory Of image";
table.append(tableHeaderTr);
tableHeaderTr.append(tableHeaderOne);
tableHeaderTr.append(tableHeaderTwo);
console.log(savedForLater);

//create a function to add list of items i.e text of recipe and image
function CreateList() {
  function addItemCells(tr, text, image) {
    var nameTd = tr.insertCell();
    var imageTd = tr.insertCell();
    nameTd.textContent = text;
    let imgElement = document.createElement("img");
    imgElement.src = image;
    imageTd.appendChild(imgElement);
  }

  //for each loop for saveForLater method add item name and item image to itemcell
  savedForLater.forEach((item) => {
    let row = table.insertRow();
    addItemCells(row, item.name, item.image);

    //delete button
    let deleteButton = row.insertCell(-1);
    deleteButton.innerHTML = "<button>Delete</button>";
    deleteButton.addEventListener("click", () => {
      let findItem = savedForLater.indexOf(item);
      if (findItem > -1) {
        savedForLater.splice(findItem, 1);
        localStorage.setItem("saved", JSON.stringify(savedForLater));
        alert("Item removed");
        window.location.reload();
      }
    });
  });
}

CreateList();
