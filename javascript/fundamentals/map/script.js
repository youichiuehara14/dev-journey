/* 
.map(): takes an array, transforms each item, and returns a new array
.map() always returns an array
  but JavaScript won’t keep it unless you store or use it
*/

const cryptocurrency = ['bitcoin', 'ethereum', 'cardano', 'polkadot', 'bnb'];

const cryptoUpperCase = cryptocurrency.map((crypto) => {
  return crypto[0].toUpperCase() + crypto.slice(1);
});

console.log(cryptoUpperCase);

/* Below is the output
['Bitcoin', 'Ethereum', 'Cardano', 'Polkadot', 'Bnb'];
*/
