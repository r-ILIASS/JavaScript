function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
console.log(getDate("5-12-2013"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
