// Solicitar la calificación del estudiante
let calificacion = prompt("Por favor, ingresa la calificación del estudiante (0-100):");

// Convertir la entrada a un número
calificacion = parseInt(calificacion);

// Evaluar la calificación
if (calificacion >= 90 && calificacion <= 100) {
  console.log("Excelente, tu calificación es A");
} else if (calificacion >= 80 && calificacion < 90) {
  console.log("Muy bien, tu calificación es B");
} else if (calificacion >= 70 && calificacion < 80) {
  console.log("Bien, tu calificación es C");
} else if (calificacion >= 60 && calificacion < 70) {
  console.log("Suficiente, tu calificación es D");
} else if (calificacion >= 0 && calificacion < 60) {
  console.log("Insuficiente, tu calificación es F");
} else {
  console.log("Calificación inválida, por favor ingresa un valor entre 0 y 100");
}
