// Array sulod sa names
let names = [];

// Function para dugang names
function addName() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();

    if (name !== "") {
        names.push(name);
        nameInput.value = ""; 
        displayNames();
    }
}

// Function pakita tanan names
function displayNames() {
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = ""; 

    names.forEach((name, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${name}</span>
            <button onclick="editName(${index})">Edit</button>
            <button onclick="deleteName(${index})">Delete</button>
        `;
        nameList.appendChild(listItem);
    });
}

// Function edit sa names
function editName(index) {
    const updatedName = prompt("Edit the name:", names[index]);
    if (updatedName !== null) {
        names[index] = updatedName.trim();
        displayNames();
    }
}

// Function para delete sa names
function deleteName(index) {
    if (confirm("Are you sure you want to delete this name?")) {
        names.splice(index, 1);
        displayNames();
    }
}

// tanan display
displayNames();