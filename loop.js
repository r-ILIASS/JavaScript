function loop(start, testFn, updateFn, bodyFn) {
  for (let i = start; testFn(i); i = updateFn(i)) {
    bodyFn(i);
  }
}

loop(
  12,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
