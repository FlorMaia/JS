


let nota = prompt("Por favor, ingresa la nota del examen (0-100):");


nota = parseInt(nota);


if (nota >= 90 && nota <= 100) {
  console.log("La calificación es: A");
} else if (nota >= 80 && nota < 90) {
  console.log("La calificación es: B");
} else if (nota >= 70 && nota < 80) {
  console.log("La calificación es: C");
} else if (nota >= 60 && nota < 70) {
  console.log("La calificación es: D");
} else if (nota < 60 && nota >= 0) {
  console.log("La calificación es: F");
} else {
  console.log("Nota inválida, por favor ingresa un valor entre 0 y 100.");
}
