let addedItems = [];

const input = document.querySelector('.inputter');
const addBTN = document.querySelector('.add-btn');
const displayBTN = document.querySelector('.display-btn');
const listSection = document.querySelector('.item-list');
const createListItem = document.createElement('li');

addBTN.addEventListener('click', () => {
  const waitingInput = input.value.trim();
  if (!waitingInput) {
    return alert('you didnt enter anything');
  } else {
    addedItems.push(waitingInput);
    return alert(`${waitingInput} is added to the list successfully`);
  }
});

displayBTN.addEventListener('click', () => {
  listSection.innerHTML = '';
  console.log(addedItems);
  addedItems.forEach((item) => {
    const li = document.createElement('li'); // ✅ create INSIDE the loop
    li.textContent = item; // ✅ set the text
    listSection.append(li); // ✅ append to listSection
  });
});
