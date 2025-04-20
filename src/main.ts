// unoin
function kgToGr(kg: number | string) {
  // Narrowing type
  if (typeof kg === 'string') {
    kg = parseFloat(kg);
  }
  return kg = 1000;
}
//  literals types

let a: 50 | 75 | 100 | "abc";

//  intersection types 

type A = { a: string };
type B = { b: number };
type C = string & number;
let obj: C = { a: "hello", b: 42 };
type D = string & number;

type Product = {
  id: number;
  name: string;
  price: number;
}

let productKey: keyof Product;
productKey = "id";
