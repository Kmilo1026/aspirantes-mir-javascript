// Definir objeto literal con llaves y valores
const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
  };
  
  // Imprime en la consola el valor de la llave edad.
  console.log(pedro.edad);
  
  
  // Agregar propiedad 'estatura'
  pedro.estatura = 1.8;
  
  // Eliminar propiedad 'activo'
  delete pedro.activo;
  
  // Recorrer todas las propiedades e imprimirlas
  for (let propiedad in pedro) {
    console.log(propiedad + ": " + pedro[propiedad]);
  }
  
  // Agregar función 'saluda'
  pedro.saluda = function() {
    return "Hola, me llamo " + this.nombre;
  };
  
  // Llamar la función 'saluda'
  console.log(pedro.saluda());
  