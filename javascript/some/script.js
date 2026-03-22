/* 
.some() checks if at least one item matches a condition.
- It goes through each item in the array
- If it finds a match → returns true and stops immediately
- If no match is found → returns false after checking all items
*/

const songList = [
  { title: 'Till I Collapse', artist: 'Eminem' },
  { title: 'Runaway', artist: 'Kanye West' },
  { title: 'The Search', artist: 'NF' },
];

const hasNF = songList.some((song) => song.artist === 'NF');

console.log(hasNF); // true
