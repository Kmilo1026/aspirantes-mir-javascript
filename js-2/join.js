function join(arr) {
    if (arr.length === 0) { // Si el arreglo está vacío
      return '';
    } else {
      let result = arr[0];
      for (let i = 1; i < arr.length; i++) {
        result += ' ' + arr[i];
      }
      return result;
    }
  }

  console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""