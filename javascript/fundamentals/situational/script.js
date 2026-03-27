// Write your code here:

const convertToBaby = (animal) => {
  let babyAnimals = [];
  for (let i = 0; i < animal.length; i++) {
    babyAnimals.push(`baby ${animal[i]}`);
  }
  return babyAnimals;
};

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));
