
import Container from "./Container";
import Rectangle from "./Rectangle";
import Shape from "./Shape";
import Square from "./Square";


const shape: Shape = new Rectangle(3, 4);
console.log(shape.width, shape.square(), shape.perimeter());
const shape2: Shape = new Square(4);
console.log(shape2.height, shape2.perimeter(), shape2.square());
const shape3: Shape = new Container([shape, shape2]);
console.log(shape3.height, shape3.perimeter(), shape3.square());
shape3 instanceof Container && console.log(shape3.size())
shape2 instanceof Container && console.log(shape2.size())
shape instanceof Container && console.log(shape.size())





