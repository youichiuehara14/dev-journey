const numbers = [11, 14, 96, 6, 23, 99];

const total = numbers.reduce((acc, num) => {
  console.log(`acc: ${acc}, num: ${num}`);
  return acc + num;
}, 0);

console.log(total);

/*
.reduce() goes through each number and keeps a running total.

- It starts with acc = 0 (initial value)

Each step:
1. Take current number (num)
2. Add it to acc
3. Store the result back into acc

Flow:

acc = 0
0 + 11 = 11
11 + 14 = 25
25 + 96 = 121
121 + 6 = 127
127 + 23 = 150
150 + 99 = 249

Final result: 249
*/
