import "./style.css";

const countBtn = document.getElementById("count-btn");
const numberInput = document.getElementById("number-input") as HTMLInputElement;

if (countBtn && numberInput) {
  countBtn.addEventListener("click", () => {
    const inputValue = numberInput.value;
    const numberArray: number[] = inputValue
      .split(",")
      .map((str) => parseInt(str.trim()))
      .filter((num) => !isNaN(num));

    const output = occurrences(numberArray);

    const numberOutputEl = document.getElementById("number-output");
    if (numberOutputEl) {
      numberOutputEl.innerHTML = output.join("<br>");
    }
  });
}

function occurrences(input: number[] | string[]): string[] {
  const counts: { [key: string]: number } = {};

  input.forEach((item) => {
    const key = String(item);
    counts[key] = (counts[key] || 0) + 1;
  });

  return Object.entries(counts)
    .sort(
      ([aKey, aVal], [bKey, bVal]) => bVal - aVal || aKey.localeCompare(bKey)
    )
    .map(([key, count]) => `${key} => ${count}`);
}

const checkAnagramBtn = document.getElementById("check-anagram-btn");
const wordInput = document.getElementById("word-input") as HTMLInputElement;
const anagramInput = document.getElementById(
  "anagram-input"
) as HTMLInputElement;

if (checkAnagramBtn && wordInput && anagramInput) {
  checkAnagramBtn.addEventListener("click", () => {
    const word = wordInput.value.trim();
    const anagram = anagramInput.value.trim();

    const resultText = isAnagram(word, anagram)
      ? `✅ "${anagram}" is an anagram of "${word}"`
      : `❌ "${anagram}" is NOT an anagram of "${word}"`;

    const anagramOutputEl = document.getElementById("anagram-output");
    if (anagramOutputEl) {
      anagramOutputEl.innerHTML = resultText;
    }
  });
}

function isAnagram(word1: string, word2: string): boolean {
  const normalize = (str: string) => str.replace(/\W/g, "").toLowerCase();
  const normalizedWord1 = normalize(word1);
  const normalizedWord2 = normalize(word2);

  if (normalizedWord1.length !== normalizedWord2.length) {
    return false;
  }

  const count1 = occurrences(normalizedWord1.split(""));
  const count2 = occurrences(normalizedWord2.split(""));

  return count1.every((entry, index) => entry === count2[index]);
}

type Person = {
  id: number;
  name: string;
  age: number;
};

function findBySample<T>(array: T[], searchObj: Partial<T>): T[] {
  return array.filter((item) =>
    Object.entries(searchObj).every(
      ([key, value]) => item[key as keyof T] === value
    )
  );
}

const people: Person[] = [
  { id: 101, name: "Liam", age: 34 },
  { id: 102, name: "Olivia", age: 27 },
  { id: 103, name: "Noah", age: 41 },
  { id: 104, name: "Emma", age: 36 },
  { id: 105, name: "James", age: 29 },
  { id: 106, name: "Sophia", age: 23 },
  { id: 107, name: "Lucas", age: 44 },
  { id: 108, name: "Mia", age: 31 },
];

const result = findBySample(people, { name: "Emma" });
console.log(result);

const result2 = findBySample(people, { age: 29 });
console.log(result2);

function update<T>(original: T, updates: Partial<T>): T {
  return { ...original, ...updates };
}

type PersonWithCity = {
  id: number;
  age: number;
  city: string;
};

const person: PersonWithCity = { id: 201, age: 26, city: "Haifa" };
const updater = { city: "Ashkelon" };
const updatedPerson = update(person, updater);
console.log(updatedPerson);

const person2: PersonWithCity = { id: 202, age: 33, city: "Beersheba" };
const updater2 = { age: 34, city: "Tiberias" };
const updatedPerson2 = update(person2, updater2);
console.log(updatedPerson2);
