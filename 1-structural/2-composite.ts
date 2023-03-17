/**
 * Problem: If you have tree-like entities and u want to work with them recursively
 */

interface Employee {
  subordinates: Employee[];
  salary: number;
  getSalary(): number;
}

// Factory for avoid manually hardcoded employees XD
const employeeFactory = (
  salary: number,
  subordinates: Employee[]
): Employee => {
  return {
    salary,
    subordinates,
    getSalary() {
      return (
        this.salary +
        this.subordinates.reduce(
          (total: number, employee: Employee) => total + employee.getSalary(), // magic is here
          0
        )
      );
    },
  };
};
const lowEmployeeJs = employeeFactory(100, []); // Leaf (Employee)
const lowEmployeeJava = employeeFactory(100, []); // Leaf (Employee)

const middleEmployeeJs = employeeFactory(200, [lowEmployeeJs]); // Composite (Employee)

const middleEmployeeJava = employeeFactory(200, [lowEmployeeJava]); // Composite (Employee)

const headOfDepartment = employeeFactory(1000, [
  middleEmployeeJs,
  middleEmployeeJava,
]); // Composite (Employee)

const totalSalary = headOfDepartment.getSalary(); // Power of composite - recursively counts total value(1600)
