// --- EXERCICI 1: Conocimiento de colores y càlculo de área ---

// --- Conocimiento de colores ---
// Pedimos el dato y lo guardamos en una variable
// .toLowerCase() convierte lo que escriba a minúsculas para evitar errores
let colorUsuario = prompt("¿Cual es tu color preferido?").toLowerCase();

// Comprobamos con lógica (IF / ELSE)
// || significa "O" (si es verde O es azul O es rojo...)
if (colorUsuario === "verde" || colorUsuario === "azul" || colorUsuario === "rojo") {
    alert("Color primario");
} else {
    alert("Otro color");
}
// --- Cálculo de área ---
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
// --- Ordenación numérica ---
// Pedimos tres números. El prompt devuelve texto, así que usamos Number()
let num1 = Number(prompt("Dime el número 1:"));
let num2 = Number(prompt("Dime el número 2:"));
let num3 = Number(prompt("Dime el número 3:"));

let lista = [num1, num2, num3];

// Ordenamos de menor a mayor.
// Si a-b es negativo, a va primero.
lista.sort((a, b) => a - b);

alert("Numeros ordenados: " + lista);
// --- Meses/Estaciones ---
let numeroEstacion = parseInt(prompt("Introduce un número del 1 al 4:"));
let estacions = ["Primavera", "Verano", "Otoño", "Invierno"];

// Validamos que esté entre 1 y 4
//tamos 1 porque el array empieza en la posición 0
if (numeroEstacion >= 1 && numeroEstacion <= 4) {
    let nombreEstacion = estacions[numeroEstacion - 1];
    alert("La estación es: " + nombreEstacion);
} else {
    alert("Número inválido. Ha de ser entre 1 y 4.");
}
// --- Fecha y saludo ---
// Sacamos la hora actual del sistema
let horaActual = new Date().getHours(); 
let mensaje = "";

// Lógica de tramos horarios
if (horaActual < 12) {
    mensaje = "Buenos días";
} else if (horaActual >= 12 && horaActual <= 20) {
    mensaje = "Buenas tardes";
} else {
    // Si es mayor de las 20
    mensaje = "Buenas noches";
}

// Mostramos por consola (F12 para verlo) como pide el enunciado
console.log(mensaje);
// Opcional: un alert para que lo veas tú ahora fácil
alert("Son las " + horaActual + "h. " + mensaje);