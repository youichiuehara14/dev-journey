/* 
The Intended Design: Return a new array with only items that pass a condition (true/false).
When to Use It (The Green Light):
1. Searching (e.g., active users)
2. Removing unwanted data (e.g., deleted items)
Common Misuse (The Red Light):
Forgetting to return a boolean → results become empty or wrong
Using it when you only need one item → should use find()
Learning Lab Example:
*/

const employees = [
  { name: 'Karina', role: 'dev' },
  { name: 'Felix', role: 'marketing' },
  { name: 'BangChan', role: 'dev' },
  { name: 'Winter', role: 'project manager' },
  { name: 'Giselle', role: 'dev' },
];

const devEmployees = employees.filter((dev) => dev.role === 'dev');
console.log(devEmployees);
