function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

console.log(findSolution(13));

/*
  find(1, "1")
    find(6, "(1 + 5)")
      find(11, "((1 + 5) + 5)")
        find(16, "(((1 + 5) + 5) + 5)")
          null
        find(33, "(((1 + 5) +  5) * 3)")
          null
      find(18, "((1 +5) * 3)")
        null
    find(3, "(1 * 3)")
      find(8 , "((1 * 3) + 5)")
        find(13, "((1 * 3) + 5) + 5")
          return history. // means it's found!
*/

// find(1, "1")
//   find(6, "(1 + 5)")
//     find(11, "((1 + 5) + 5)")
//       find(16, "(((1 + 5) + 5) + 5)")
//         too big
//       find(33, "(((1 + 5) + 5) * 3)")
//         too big
//     find(18, "((1 + 5) * 3)")
//       too big
//   find(3, "(1 * 3)")
//     find(8, "((1 * 3) + 5)")
//       find(13, "(((1 * 3) + 5) + 5)")
//         found!
