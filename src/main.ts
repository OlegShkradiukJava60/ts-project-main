function displayNumberOccurrences(numbers: number[]): void {
  const occurrencesObj: {[key: number]: number} = getOccurrencesObject(numbers);
  const outputRes: string[] = getOutputResult(occurrencesObj);
  displayResult(outputRes);

}
function getOccurrencesObject(numbers: number[]): {[key: number]: number} {
  const res: {[key: number]: number} = {};
  return numbers.reduce((acc, cur) => ({...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1}), res);
}

function getOutputResult(occurrencesObj: { [key: number]: number; }): string[] {
  const entriesArr:[string, number][] = Object.entries(occurrencesObj).sort(([key1, value1],
     [key2, value2]) =>
     value1 == value2 ? +key1 - +key2 : value2 - value1)
  return entriesArr.map(e => `${e[0]} => ${e[1]}`)
}
function displayResult(outputRes: string[]) {
  outputRes.forEach(r => console.log(r))
}
displayNumberOccurrences([20, 3, 3, 20, 20, 1, 1])
function isAnagram(word: string, anagram: string): boolean {
  let res: boolean = false;
  if (word.length === anagram.length && word !== anagram) {
    const countersObj: {[key: string]: number} = getCountersObj(word);
    res = anagramCheck(countersObj, anagram);
  }
  return res;
}
function getCountersObj(word: string): {[key: string]: number} {
  const res: {[key: string]: number} = {};
  return Array.from(word).reduce((acc, cur) => ({...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1}), res);
}
function anagramCheck(countersObj: { [key: string]: number }, anagram: string): boolean {
  return Array.from(anagram).every(c => --countersObj[c] >= 0)
}
const wordAnagram: [string, string, boolean][] = [
  ['hello', 'olleh', true],
  ['hello', 'oleh', false],
  ['hello', 'helll', false],
  ['ellectricity', 'ityrictelcel', true],
  ['ellectricity', 'ityrictelcal', false],
]
const anagramRes = wordAnagram.map(e => `word: ${e[0]}; anagram: ${e[1]}; expected: ${e[2]}; actual: ${isAnagram(e[0], e[1])}`)
displayResult(anagramRes);