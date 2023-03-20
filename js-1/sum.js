function sum(n) {
  // Inicializar una variable para almacenar la suma
  let total = 0;

  // Iterar desde 1 hasta n y agregar cada número a la suma
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  // Retornar la suma total
  return total;
}


console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120