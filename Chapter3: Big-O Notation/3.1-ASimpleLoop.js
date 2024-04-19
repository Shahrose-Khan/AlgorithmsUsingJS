function findMax(array) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

const numbers = [5, 2, 9, 1, 7];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 9
