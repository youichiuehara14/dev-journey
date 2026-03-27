/* 
.forEach(): executes a callback for every element in an array (does not return a new array)
forEach goes through each item in an array and runs a function on each one
Common use cases:
Rendering data to the UI
Performing side effects (logging, updates)
Iterating over API response data 
*/

const fruits = ['Mango', 'Orange', 'Banana', 'Blueberry'];

fruits.forEach((fruit) => {
  console.log(fruit);
});

/* Below is the output
    'Mango', 'Orange', 'Banana', 'Blueberry'
*/

/* ================================================================= */

const employeeData = [
  { name: 'keye', position: 'developer' },
  { name: 'peele', position: 'project manager' },
  { name: 'kevin', position: 'marketing manager' },
];

employeeData.forEach((employee) => {
  console.log(employee);
});

/* Below is the output
  { name: 'keye', position: 'developer' },
  { name: 'peele', position: 'project manager' },
  { name: 'kevin', position: 'marketing manager' },
*/
