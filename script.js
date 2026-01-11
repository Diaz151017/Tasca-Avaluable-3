// --- EXERCICI 1: Coneixement de colors i càlcul d’àrea ---

// --- Coneixement de colors ---
// Demanem la dada i la guardem en una variable
// .toLowerCase() converteix el que s'escrigui a minúscules per evitar errors
let colorUsuario = prompt("Quin és el teu color preferit?").toLowerCase();

// Comprovem amb lògica (IF / ELSE)
// || significa "O" (si és verd O és blau O és vermell...)
// NOTA: Hem canviat els strings a català perquè coincideixin amb el prompt
if (colorUsuario === "verd" || colorUsuario === "blau" || colorUsuario === "vermell") {
    alert("Color primari");
} else {
    alert("Altre color");
}

// --- Càlcul d’àrea ---
// El codi continua baixant i executant-se...
// Demana les variables. Prompt retorna TEXT.
// parseFloat converteix text a nombres decimals (per si posen 5.5)
let ancho = parseFloat(prompt("Introdueix l'amplada del rectangle:"));
let alto = parseFloat(prompt("Introdueix l'altura del rectangle:"));

if (isNaN(ancho) || isNaN(alto) || ancho <= 0 || alto <= 0) {
    alert("Si us plau, introdueix valors numèrics positius per a l'amplada i l'altura.");
} else {
    let area = ancho * alto;
    alert("L'àrea del rectangle és: " + area);
}

// --- Ordenació numèrica ---
// Demanem tres nombres. El prompt retorna text, així que usem Number()
let num1 = Number(prompt("Digues-me el número 1:"));
let num2 = Number(prompt("Digues-me el número 2:"));
let num3 = Number(prompt("Digues-me el número 3:"));

let lista = [num1, num2, num3];

// Ordenem de menor a major.
// Si a-b és negatiu, 'a' va primer.
lista.sort((a, b) => a - b);

alert("Nombres ordenats: " + lista);

// --- Mesos/Estacions ---
let numeroEstacion = parseInt(prompt("Introdueix un número de l'1 al 4:"));
// Traduïm l'array perquè coincideixi amb l'idioma de sortida
let estacions = ["Primavera", "Estiu", "Tardor", "Hivern"];

// Validem que estigui entre 1 i 4
// Restem 1 perquè l'array comença a la posició 0
if (numeroEstacion >= 1 && numeroEstacion <= 4) {
    let nombreEstacion = estacions[numeroEstacion - 1];
    alert("L'estació és: " + nombreEstacion);
} else {
    alert("Número invàlid. Ha de ser entre 1 i 4.");
}

// --- Data i salutació ---
// Traiem l'hora actual del sistema
let horaActual = new Date().getHours(); 
let mensaje = "";

// Lògica de trams horaris
if (horaActual < 12) {
    mensaje = "Bon dia";
} else if (horaActual >= 12 && horaActual <= 20) {
    mensaje = "Bona tarda";
} else {
    // Si és més tard de les 20
    mensaje = "Bona nit";
}

// Mostrem per consola (F12 per veure-ho) com demana l'enunciat
console.log(mensaje);
// Opcional: un alert perquè ho vegis tu ara fàcil
alert("Són les " + horaActual + "h. " + mensaje);