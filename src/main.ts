//displayNumberOccurrences and isAnagram using single reusable function getOccurrencesObject
function displayNumberOccurrences(numbers: number[]): void {
  const occurrencesObj: { [key: number]: number } =
    getOccurrencesObject(numbers);
  const outputRes: string[] = getOutputResult(occurrencesObj);
  displayResult(outputRes);
}
function getOccurrencesObject(numbers: (string | number)[]): {
  [key: number | string]: number;
} {
  const res: { [key: string]: number } = {};
  return numbers.reduce(
    (acc, cur) => ({ ...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1 }),
    res
  );
}

function getOutputResult(occurrencesObj: { [key: number]: number }): string[] {
  const entriesArr: [string, number][] = Object.entries(occurrencesObj).sort(
    (e1, e2) => (e1[1] == e2[1] ? +e1[0] - +e2[0] : e2[1] - e1[1])
  );
  return entriesArr.map((e) => `${e[0]} => ${e[1]}`);
}
function displayResult(outputRes: string[]) {
  outputRes.forEach((r) => console.log(r));
}
displayNumberOccurrences([20, 3, 3, 20, 20, 1, 1]);
function isAnagram(word: string, anagram: string): boolean {
  let res: boolean = false;
  if (word.length === anagram.length && word !== anagram) {
    const countersObj: { [key: string]: number } = getOccurrencesObject(
      Array.from(word)
    );
    res = anagramCheck(countersObj, anagram);
  }
  return res;
}

function anagramCheck(
  countersObj: { [key: string]: number },
  anagram: string
): boolean {
  return Array.from(anagram).every((c) => --countersObj[c] >= 0);
}
const wordAnagram: [string, string, boolean][] = [
  ["hello", "olleh", true],
  ["hello", "oleh", false],
  ["hello", "helll", false],
  ["ellectricity", "ityrictelcel", true],
  ["ellectricity", "ityrictelcal", false],
];
const anagramRes = wordAnagram.map(
  (e) =>
    `word: ${e[0]}; anagram: ${e[1]}; expected: ${e[2]}; actual: ${isAnagram(
      e[0],
      e[1]
    )}`
);
displayResult(anagramRes);
/*************************************************************************************** */
//reusable find function
function find<T>(array: T[], field: keyof T, value: unknown): T[] {
  return array.filter((item) => item[field] === value);
}
const array: {x: string, y: number}[] = [
    {x: "10", y: 23},
    {x: "2", y: 21},
    {x: "5", y: 40},
    {x: "10", y: 200},
    {x: "10", y: 300},
];
console.log(find(array, "x", 10));
/************************************************************* */
function update<T> (obj: T, updater: Partial<T>): void {
    const objNew =  {...obj,...updater};
    for (let key  in objNew ) {
        obj[key] = objNew[key];
    }
}

type Person = {
  id: number;
  age: number;
  city: string;
};

const person: Person = { id: 123, age: 25, city: "Lod" };
update{person, {age: 26, city: "Rehovot"}};

