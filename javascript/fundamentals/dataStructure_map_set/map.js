/* unfinished */

const foods = new Map();

foods
  .set('fruits', [
    { name: 'apple', quality: 'good', stock: 20 },
    { name: 'mango', quality: 'excellent', stock: 15 },
    { name: 'orange', quality: 'below average', stock: 3 },
  ])
  .set('vegetables', [
    { name: 'Lettuce', quality: 'good', stock: 22 },
    { name: 'Cabbage', quality: 'excellent', stock: 11 },
    { name: 'Carrots', quality: 'below average', stock: 5 },
  ]);

console.log(foods);

const drinks = new Map([
  [
    'non-alcoholic',
    [
      { name: 'mango juice', stock: 49 },
      { name: 'pineapple juice', stock: 44 },
      { name: 'pepsi', stock: 34 },
    ],
  ],
  [
    'alcoholic',
    [
      { name: 'Whiskey', stock: 30 },
      { name: 'Rum', stock: 20 },
      { name: 'Vodka', stock: 53 },
    ],
  ],
]);

console.log(drinks);
