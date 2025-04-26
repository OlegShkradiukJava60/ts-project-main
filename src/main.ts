import Store from "./Store.ts";

class Employee {
    constructor(public id: string, public name: string, public salary: number) { }
}

const store = new Store<Employee>();

document.getElementById('addEmployeeBtn')?.addEventListener('click', () => {
    const id = (document.getElementById('addId') as HTMLInputElement).value;
    const name = (document.getElementById('addName') as HTMLInputElement).value;
    const salary = parseFloat((document.getElementById('addSalary') as HTMLInputElement).value);

    const newEmployee = new Employee(id, name, salary);
    store.add(newEmployee);

    (document.getElementById('addId') as HTMLInputElement).value = '';
    (document.getElementById('addName') as HTMLInputElement).value = '';
    (document.getElementById('addSalary') as HTMLInputElement).value = '';

    updateResult(`Employee added: ${name} (${id}) with salary ${salary}`);
});

document.getElementById('findEmployeeBtn')?.addEventListener('click', () => {
    const id = (document.getElementById('findId') as HTMLInputElement).value;
    const employee = store.getById(id);

    if (employee) {
        updateResult(`Employee found: ${employee.name}, Salary: ${employee.salary}`);
    } else {
        updateResult("Employee not found.");
    }

    (document.getElementById('findId') as HTMLInputElement).value = '';
});

document.getElementById('removeEmployeeBtn')?.addEventListener('click', () => {
    const id = (document.getElementById('removeId') as HTMLInputElement).value;
    const removedEmployee = store.remove(id);

    if (removedEmployee) {
        updateResult(`Employee removed: ${removedEmployee.name}`);
    } else {
        updateResult("Employee not found for removal.");
    }

    (document.getElementById('removeId') as HTMLInputElement).value = '';
});

document.getElementById('getEmployeeBtn')?.addEventListener('click', () => {
    const id = (document.getElementById('getById') as HTMLInputElement).value;
    const employee = store.getById(id);

    if (employee) {
        updateResult(`Employee details: ID: ${employee.id}, Name: ${employee.name}, Salary: ${employee.salary}`);
    } else {
        updateResult("Employee not found.");
    }

    (document.getElementById('getById') as HTMLInputElement).value = '';
});

function updateResult(message: string) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerHTML = message;
    }
}

store.add(new Employee("1", "Alice", 5000));
store.add(new Employee("2", "Bob", 7000));
store.add(new Employee("3", "Charlie", 3000));
