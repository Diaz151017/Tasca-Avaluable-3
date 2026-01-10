// --- EXERCICI 1: Conocimiento de colores y càlculo de área ---

// --- Conocimiento de colores ---
// Pedimos el dato y lo guardamos en una variable
// .toLowerCase() convierte lo que escriba a minúsculas para evitar errores
let colorUsuario = prompt("Quin es el teu color preferit?").toLowerCase();

// Comprobamos con lógica (IF / ELSE)
// || significa "O" (si es verde O es azul O es rojo...)
if (colorUsuario === "verd" || colorUsuario === "blau" || colorUsuario === "vermell") {
    alert("Color primari");
} else {
    alert("Un altre color");
}
// --- Cálculo de área ---
// El código sigue bajando y ejecutándose...
// Pide las variables. Prompt devuelve TEXTO.
// parseFloat convierte texto a números decimales (por si ponen 5.5)
let ancho = parseFloat(prompt("Introdueix l'ample del rectàngul:"));
let alto = parseFloat(prompt("Introdueix l'alçada del rectàngulo:"));
// Validamos que sean números y positivos
if (isNaN(ancho) || isNaN(alto) || ancho <= 0 || alto <= 0) {
    alert("Si us plau, introdueix valors numèrics positius per a ample i alçada.");
} else {
    let area = ancho * alto;
    alert("L'àrea del rectàngul ès: " + area);
}
// --- Ordenación numérica ---
// Pedimos tres números. El prompt devuelve texto, así que usamos Number()
let num1 = Number(prompt("Digues el numero 1:"));
let num2 = Number(prompt("Digues el numero 2:"));
let num3 = Number(prompt("Digues el numero 3:"));

let lista = [num1, num2, num3];

// Ordenamos de menor a mayor.
// Si a-b es negativo, a va primero.
lista.sort((a, b) => a - b);

alert("Nombres ordenats: " + lista);
// --- Meses/Estaciones ---
let numeroEstacion = parseInt(prompt("Introdueix un numero de l'1 al 4:"));
let estacions = ["Primavera", "Estiu", "Tardor", "Hivern"];

// Validamos que esté entre 1 y 4
//tamos 1 porque el array empieza en la posición 0
if (numeroEstacion >= 1 && numeroEstacion <= 4) {
    let nombreEstacion = estacions[numeroEstacion - 1];
    alert("L'estació ès: " + nombreEstacion);
} else {
    alert("Numero inválid. Ha de ser entre 1 i 4.");
}
// --- Fecha y saludo ---
// Sacamos la hora actual del sistema
let horaActual = new Date().getHours(); 
let mensaje = "";

// Lógica de tramos horarios
if (horaActual < 12) {
    mensaje = "Bon dia";
} else if (horaActual >= 12 && horaActual <= 20) {
    mensaje = "Bones tardes";
} else {
    // Si es mayor de las 20
    mensaje = "Bona nit";
}

// Mostramos por consola (F12 para verlo) como pide el enunciado
console.log(mensaje);
// Opcional: un alert para que lo veas tú ahora fácil
alert("Son les " + horaActual + "h. " + mensaje);