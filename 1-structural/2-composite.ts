/**
 * Problem: If you have tree-like entities and u want to work with them recursively
 */

interface Employee {
  // Base interface
  subordinates: Employee[];
  salary: number;
  getSalary(): number;
  addSubordinates(employees: Employee[]): void;
}

// Factory for avoid manually hardcoded employees :)
const employeeFactory = (salary: number): Employee => {
  return {
    salary,
    subordinates: [],
    getSalary() {
      return (
        this.salary +
        this.subordinates.reduce(
          (total: number, employee: Employee) => total + employee.getSalary(), // magic is here
          0
        )
      );
    },
    addSubordinates(employees: Employee[]) {
      this.subordinates = this.subordinates.concat(employees);
    },
  };
};
const lowEmployeeJs = employeeFactory(100); // Leaf (Employee)
const lowEmployeeJava = employeeFactory(100); // Leaf (Employee)

const middleEmployeeJs = employeeFactory(200); // Composite (Employee)
middleEmployeeJs.addSubordinates([lowEmployeeJs]);

const middleEmployeeJava = employeeFactory(200); // Composite (Employee)
middleEmployeeJava.addSubordinates([lowEmployeeJava]);

const headOfDepartment = employeeFactory(1000); // Composite (Employee)
headOfDepartment.addSubordinates([middleEmployeeJava, middleEmployeeJs]);

const totalSalary = headOfDepartment.getSalary(); // Power of composite - recursively counts total value(1600)
