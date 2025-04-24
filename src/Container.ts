import Shape from "./Shape";

export default class Container implements Shape {
    constructor(private _shapes: Shape[]) {

    }
   get width () {
        return this._shapes.reduce((sum, cur) => sum + cur.width, 0)
    };
    get height() {
        return this._shapes.reduce((sum, cur) => sum + cur.height, 0)
    };
    square(): number {
        return this._shapes.reduce((sum, cur) => sum + cur.square(), 0);
    }
    perimeter(): number {
        return this._shapes.reduce((sum, cur) => sum + cur.perimeter(), 0);
    }
    size(): number {
        return this._shapes.length; //number of the shapes in the container
    }
    
}