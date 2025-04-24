//TODO
//Write simple test based on console.log functionality for testing Store class methods

import Store from "./Store";



//For example T msay be class Employee like
class Employee {
    constructor(public id: string, public name: string, public salary: number) {

    }
}
const store = new Store<Employee> ();
//some test methods