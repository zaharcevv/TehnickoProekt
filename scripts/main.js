import { addObjectToFirestore, fetchDataFromFirestore } from './firebase-config.js';

const form = document.getElementById("data-form");
form.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const city = document.getElementById("city").value;

    await addObjectToFirestore({ name, age, city });

    form.reset();

    displayData();
});


async function displayData() {
    const container = document.getElementById("data-container");
    container.innerHTML = "";
    const data = await fetchDataFromFirestore();

    data.forEach((item) => {
        const div = document.createElement("div");
        div.textContent = `Name: ${item.name}, Age: ${item.age}, City: ${item.city}`;
        container.appendChild(div);
    });
}

displayData();





