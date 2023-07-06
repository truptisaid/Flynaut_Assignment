const word = '00000111110101001111100001001';

let currentSequence = 1;
let longestSequence = 1;

for (let i = 1; i < word.length; i++) {
  if (word[i - 1] === word[i]) {
    currentSequence++;
  } else {
    currentSequence = 1;
  }

  if (currentSequence > longestSequence) {
    longestSequence = currentSequence;
  }
}

console.log(longestSequence);
