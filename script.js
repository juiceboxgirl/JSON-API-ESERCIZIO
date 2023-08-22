const nameInput = document.getElementById("insertName");
const saveButton = document.getElementById("saveButton");
const removeButton = document.getElementById("removeButton");
const savedValueDiv = document.getElementById("savedName");

// Carica il valore salvato in localStorage all'avvio
const savedDataJSON = localStorage.getItem("user_data");
if (savedDataJSON) {
  const savedData = JSON.parse(savedDataJSON);
  savedValueDiv.innerHTML = `Valore precedentemente salvato: ${savedData.name}`;
  nameInput.value = savedData.name;
}

// Salva il valore in localStorage
saveButton.addEventListener("click", () => {
  const newName = nameInput.value;
  const newData = { name: newName };
  localStorage.setItem("user_data", JSON.stringify(newData));
  savedValueDiv.innerHTML = `Valore precedentemente salvato: ${newName}`;
  alert("Valore salvato con successo!");
});

// Rimuovi il valore da localStorage
removeButton.addEventListener("click", () => {
  localStorage.removeItem("user_data");
  savedValueDiv.innerHTML = "Valore precedentemente salvato:";
  nameInput.value = "";
  alert("Valore rimosso con successo!");
});

// Avvia il contatore se non esiste già
if (!sessionStorage.getItem("counter")) {
  sessionStorage.setItem("counter", "0");
}

// Aggiorna il contatore ogni secondo
setInterval(function () {
  var counter = parseInt(sessionStorage.getItem("counter"));
  counter++;
  sessionStorage.setItem("counter", counter.toString());
  console.log("Counter:", counter);
}, 1000); // Aggiorna ogni secondo (1000 millisecondi)
