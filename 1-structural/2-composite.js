/**
 * Problem: If you have tree-like entities and u want to work with them recursively
 */
// Factory for avoid manually hardcoded employees XD
var employeeFactory = function (salary) {
    return {
        salary: salary,
        subordinates: [],
        getSalary: function () {
            return (this.salary +
                this.subordinates.reduce(function (total, employee) { return total + employee.getSalary(); }, // magic is here
                0));
        },
        addSubordinates: function (employees) {
            this.subordinates = this.subordinates.concat(employees);
        }
    };
};
var lowEmployeeJs = employeeFactory(100); // Leaf (Employee)
var lowEmployeeJava = employeeFactory(100); // Leaf (Employee)
var middleEmployeeJs = employeeFactory(200); // Composite (Employee)
middleEmployeeJs.addSubordinates([lowEmployeeJs]);
var middleEmployeeJava = employeeFactory(200); // Composite (Employee)
middleEmployeeJava.addSubordinates([lowEmployeeJava]);
var headOfDepartment = employeeFactory(1000); // Composite (Employee)
headOfDepartment.addSubordinates([middleEmployeeJava, middleEmployeeJs]);
var totalSalary = headOfDepartment.getSalary(); // Power of composite - recursively counts total value(1600)
console.log(totalSalary);
