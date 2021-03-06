function findMinAndRemove(array) {
  let minValue = array[0];
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      minIndex = i;
    }
  }

  array.splice(minIndex, 1);
  return minValue;
}

function insertionSort(array) {
  let sortedArray = [];
  while (array.length !== 0) {
    sortedArray.push(findMinAndRemove(array));
  }

  return sortedArray;
}
