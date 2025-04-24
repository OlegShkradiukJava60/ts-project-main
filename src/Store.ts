import Identifiable from "./Identifiable";
import Predicate from "./Predicate";

export default class Store<T extends Identifiable> {
    items: T[] = [];
    add(item: T):void {
       //TODO
       //adds new item with validation of unique id value
       //if item with the given id exists the method throws exception 
    }
    getById(id: string): T | undefined {
        //TODO
        //returns item with the given id or undefined if such item doesn't exist
        return undefined;
    }
    find(predicate: Predicate<T>): T[] {
        //TODO
        //returns array of items matching the given predicate
        return [];
    }
    remove(id: string): T | undefined {
        //TODO
        //removes item with the given id value
        //returns a reference to being removed item or undefined if an item doesn't exist
        return undefined;
    }
}