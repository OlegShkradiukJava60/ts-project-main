type Person = {
  id: number;
  age: number;
  name?: string;
}
const people : Person[] = [
  {id: 1, age: 25},
  {id: 2, age: 30},
  {id: 3, age: 35}
];


function findPersonById(people: Person[], id: number): Person | undefined {
  return people.find(person => person.id === id)!;
}


const person = findPersonById(people, 20);
  console.log(person?.name?.length);

  function getPersonName({name = "Vasya"}:Person): string {
    return name; 
  }
  console.log(getPersonName(people[0]));
  