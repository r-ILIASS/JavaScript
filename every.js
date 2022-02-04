function every(array, testFn) {
  for (let e of array) {
    if (!testFn(e)) return false;
  }

  return true;
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true

function every2(array, testFn) {
  return !array.some((e) => !testFn(e));
}

console.log(every2([1, 3, 5], (n) => n < 10));
// → true
console.log(every2([2, 4, 16], (n) => n < 10));
// → false
console.log(every2([], (n) => n < 10));
// → true
