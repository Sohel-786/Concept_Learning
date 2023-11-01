// Given and Integer k, sort the values in array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

// if a % k = b%k, then the integer which comes first in the given array remains first in the sorted array.

function Bubblesort(arr, k, n) {
  let temp;
  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] % k > arr[j + 1] % k) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
  return arr;
}

function Selectionsort(arr, k, n) {
  let minI;

  for (let i = 0; i < n; i++) {
    minI = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] % k > arr[j] % k) {
        minI = j;
      }
    }

    if (!(minI === i)) {
      let temp = arr[minI];
      arr[minI] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

const array = [12, 18, 17, 65, 46];
const arr2 = [...array];
const k = 6;

const result = Bubblesort(array, k, array.length);
const result2 = Selectionsort(arr2, k, arr2.length);
console.log("Result - 1 ", result, "Result - 2", result2);
