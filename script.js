// --- EXERCICI 1: Coneixement de colors i càlcul d’àrea ---

// --- Coneixement de colors ---
// Pedimos el dato y lo guardamos en una variable
// .toLowerCase() convierte lo que escriba a minúsculas para evitar errores
let colorUsuario = prompt("¿Cuál es tu color preferido?").toLowerCase();

// Comprobamos con lógica (IF / ELSE)
// || significa "O" (si es verde O es azul O es rojo...)
if (colorUsuario === "verd" || colorUsuario === "blau" || colorUsuario === "vermell") {
    alert("Color primari");
} else {
    alert("Altre color");
}

// --- Càlcul d’àrea ---
// El código sigue bajando y ejecutándose...

// Pide las variables. Prompt devuelve TEXTO.
// parseFloat convierte texto a números decimales (por si ponen 5.5)
let ancho = parseFloat(prompt("Introduce el ancho del rectángulo:"));
let alto = parseFloat(prompt("Introduce la altura del rectángulo:"));

if (isNaN(ancho) || isNaN(alto) || ancho <= 0 || alto <= 0) {
    alert("Por favor, introduce valores numéricos positivos para ancho y alto.");
} else {
    let area = ancho * alto;
    alert("El área del rectángulo es: " + area);
}