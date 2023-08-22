const nameInput = document.getElementById("insertName");
const saveButton = document.getElementById("saveButton");
const removeButton = document.getElementById("removeButton");
const savedValueDiv = document.getElementById("savedName");

const savedDataJSON = localStorage.getItem("user_data");
if (savedDataJSON) {
  const savedData = JSON.parse(savedDataJSON);
  savedValueDiv.innerHTML = `You already saved: ${savedData.name}`;
  nameInput.value = savedData.name;
}

saveButton.addEventListener("click", () => {
  const newName = nameInput.value;
  const newData = { name: newName };
  localStorage.setItem("user_data", JSON.stringify(newData));
  savedValueDiv.innerHTML = `You already saved: ${newName}`;
  alert("Success! You saved this value, mate!");
});

removeButton.addEventListener("click", () => {
  localStorage.removeItem("user_data");
  savedValueDiv.innerHTML = "You already saved:";
  nameInput.value = "";
  alert("Aaand it's gone! Poof, no more value!");
});

function updateCounter() {
  if (!sessionStorage.getItem("counter")) {
    sessionStorage.setItem("counter", "0");
  }

  setInterval(function () {
    var counter = parseInt(sessionStorage.getItem("counter"));
    counter++;
    sessionStorage.setItem("counter", counter.toString());
    document.getElementById("counterValue").textContent = counter;
  }, 1000);
}

window.onload = updateCounter;
