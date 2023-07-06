const fullWordList = ['1', '2', '3', '4', '5'];
const wordsToRemove = ['1', '2', '3'];

const duplicates = fullWordList.filter(word => wordsToRemove.includes(word));

console.log(duplicates);