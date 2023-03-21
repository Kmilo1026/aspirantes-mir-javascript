








function max(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    let maxNum = arr[0];
    for(let posicion=1; posicion<arr.length;posicion++){
      console.log(posicion)
      if ( maxNum < arr[posicion]) {
        maxNum = arr[posicion]
      }
    }
    return maxNum;

    
  }
  
//console.log(max([1, 3, 2])) // 3
//console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined