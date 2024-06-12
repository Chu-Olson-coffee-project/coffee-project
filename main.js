"use strict";

function renderCoffee(coffee) {
  return `
        <div class="coffee">
            <h1>${coffee.name}</h1>
            <p>${coffee.roast}</p>
        </div>
    `;
}

function renderCoffees(coffees) {
  return coffees.map(renderCoffee).join("");
}

function updateCoffees(e) {
  e.preventDefault();
  const selectedRoast = roastSelection.value;
  const filteredCoffees = coffees.filter(
    (coffee) => coffee.roast === selectedRoast
  );
  tbody.innerHTML = renderCoffees(filteredCoffees);
}

const coffees = [
  { id: 1, name: "Light City", roast: "light" },
  { id: 2, name: "Half City", roast: "light" },
  { id: 3, name: "Cinnamon", roast: "light" },
  { id: 4, name: "City", roast: "medium" },
  { id: 5, name: "American", roast: "medium" },
  { id: 6, name: "Breakfast", roast: "medium" },
  { id: 7, name: "High", roast: "dark" },
  { id: 8, name: "Continental", roast: "dark" },
  { id: 9, name: "New Orleans", roast: "dark" },
  { id: 10, name: "European", roast: "dark" },
  { id: 11, name: "Espresso", roast: "dark" },
  { id: 12, name: "Viennese", roast: "dark" },
  { id: 13, name: "Italian", roast: "dark" },
  { id: 14, name: "French", roast: "dark" },
];

const inputBox = document.getElementById("inputbox");
inputBox.addEventListener("keyup", () => {
  const inputValue = inputBox.value.toUpperCase();
  const filteredCoffees = coffees.filter((coffee) =>
    coffee.name.toUpperCase().includes(inputValue)
  );
  tbody.innerHTML = renderCoffees(filteredCoffees);
});

const newCoffeeInput = document.getElementById("new-coffee-name");
const roastSelect = document.getElementById("roast");
const addButton = document.getElementById("submit");
addButton.addEventListener("click", () => {
  const newCoffee = {
    id: coffees.length + 1,
    name: newCoffeeInput.value,
    roast: roastSelect.value,
  };
  coffees.push(newCoffee);
  tbody.innerHTML = renderCoffees(coffees);
});

const tbody = document.querySelector("#coffees");
const submitButton = document.querySelector("#searchbtn");
const roastSelection = document.querySelector("#roast-selection");

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener("click", updateCoffees);
