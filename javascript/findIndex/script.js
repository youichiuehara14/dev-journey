/* 
  findIndex returns the index (the position number) of the first element 
  that passes your test. Once it finds that first match, it stops looking at the rest of the array. 
*/

const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});

console.log(lessThanTen); // returns 3 (the position number)
