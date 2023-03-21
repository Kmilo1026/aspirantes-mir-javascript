function maxIndex(arr) {
    if (arr.length === 0) { // Si el arreglo está vacío
      return -1;
    } else {
      let max = arr[0];
      let maxIndex = 0;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
          maxIndex = i;
        }
      }
      return maxIndex;
    }
  }


  console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1