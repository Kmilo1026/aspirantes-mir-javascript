// Definir objeto literal con llaves y valores
const persona = {
    nombre: "Cristian",
    edad: 38,
    ciudad: "Medellin",
    profesion: "Desarrollador"
  };
  
  // Imprime en la consola el objeto "persona" completo.
 console.log(persona);
  
  // Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.
  function presentacion(persona) {
    return "Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
  }
  
  // Llamar función presentacion y almacenar resultado en variable mensaje
  
  const mensaje = presentacion(persona);
  
  // Imprimir mensaje en consola
  console.log(mensaje);
  
  // Agregar propiedad 'hobbies'
  persona.hobbies = ["fútbol", "Basket", "jardineria"];
  
  // Imprime en la consola la propiedad "hobbies" del objeto "persona".
  console.log(persona.hobbies);
  
  // Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
  for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }
  