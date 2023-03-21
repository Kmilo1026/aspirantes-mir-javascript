function sum(n) {
    // Inicializar una variable para almacenar la suma
    let total = 0;
  
    // Iterar desde 1 hasta n y agregar cada número a la suma
    for (let i = 0; i < n.length; i++) {
      total += n[i];

      console.log(i)
    }
  
    // Retornar la suma total
    return total;
  }
  
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
  