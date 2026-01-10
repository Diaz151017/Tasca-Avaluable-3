// Sistema de Vengadores

let avengers = [];

function displayAvengers() {
    const list = document.getElementById('avengers-list');
    list.innerHTML = '';
    avengers.forEach((avenger, index) => {
        const div = document.createElement('div');
        div.textContent = avenger;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.onclick = () => removeAvenger(index);
        div.appendChild(removeBtn);
        list.appendChild(div);
    });
}

function addAvenger() {
    const name = prompt('Introduce el nombre del Vengador:');
    if (name) {
        avengers.push(name);
        displayAvengers();
    }
}

function removeAvenger(index) {
    avengers.splice(index, 1);
    displayAvengers();
}

document.getElementById('add-avenger').addEventListener('click', addAvenger);

// Inicializar
displayAvengers();