
let personName = prompt("Welcome to Green Earth! Please enter your personName:");

if (personName == null || personName.trim() == "") {
    personName = "Friend";
}

document.getElementById("welcome").textContent =
    "Hello, " + personName + "! Let's make our Earth greener 🌿";