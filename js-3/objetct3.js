// Creamos una variable llamada receta y la inicializamos con un objeto literal vacío
let receta = {};

// Agregamos una propiedad nombre con valor "Sandwich"
receta.nombre = "Sandwich";

// Agregamos una propiedad ingredientes con un arreglo vacío
receta.ingredientes = [];

// Agregamos un objeto al arreglo ingredientes con las siguientes propiedades
receta.ingredientes.push({
  nombre: "Pan",
  cantidad: 2
});

// Agregamos otro objeto al arreglo ingredientes con las siguientes propiedades
receta.ingredientes.push({
  nombre: "Queso",
  cantidad: 1
});

// Imprimimos en la consola el nombre del primer ingrediente
console.log(receta.ingredientes[0].nombre); // debería imprimir "Pan"

// Sumamos todas las cantidades de los ingredientes
let total = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
  total += receta.ingredientes[i].cantidad;
}

// Mostramos el resultado en consola
console.log(total); // debería imprimir 3
