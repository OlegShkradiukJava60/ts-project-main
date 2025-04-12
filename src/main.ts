import './style.css';

const countBtn = document.getElementById('count-btn');
const numberInput = document.getElementById('number-input') as HTMLInputElement;

if (countBtn && numberInput) {
  countBtn.addEventListener('click', () => {
    const inputValue = numberInput.value;
    const numberArray: number[] = inputValue
      .split(',')
      .map(str => parseInt(str.trim()))
      .filter(num => !isNaN(num));

    const output = occurrences(numberArray);

    const numberOutputEl = document.getElementById('number-output');
    if (numberOutputEl) {
      numberOutputEl.innerHTML = output.join('<br>');
    }
  });
}

function occurrences(input: number[]): string[] {
  const counts: { [key: number]: number } = {};

  input.forEach(item => {
    counts[item] = (counts[item] || 0) + 1;
  });

  return Object.entries(counts)
    .sort(([aKey, aVal], [bKey, bVal]) => {
      return bVal - aVal || Number(aKey) - Number(bKey);
    })
    .map(([key, count]) => `${key} => ${count}`);
}

const checkAnagramBtn = document.getElementById('check-anagram-btn');
const wordInput = document.getElementById('word-input') as HTMLInputElement;
const anagramInput = document.getElementById('anagram-input') as HTMLInputElement;

if (checkAnagramBtn && wordInput && anagramInput) {
  checkAnagramBtn.addEventListener('click', () => {
    const word = wordInput.value.trim();
    const anagram = anagramInput.value.trim();

    const resultText = isAnagram(word, anagram)
      ? `✅ "${anagram}" is an anagram of "${word}"`
      : `❌ "${anagram}" is NOT an anagram of "${word}"`;

    const anagramOutputEl = document.getElementById('anagram-output');
    if (anagramOutputEl) {
      anagramOutputEl.innerHTML = resultText;
    }
  });
}

function isAnagram(word1: string, word2: string): boolean {
  const normalize = (str: string) => str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
  
  const normalizedWord1 = normalize(word1);
  const normalizedWord2 = normalize(word2);

  return normalizedWord1 === normalizedWord2;
}
