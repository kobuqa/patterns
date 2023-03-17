/**
 * Problem: If you have tree-like entities and u want to work with them recursively
 */
// Factory for avoid manually hardcoded employees XD
var employeeFactory = function (salary, subordinates) {
    return {
        salary: salary,
        subordinates: subordinates,
        getSalary: function () {
            return (this.salary +
                this.subordinates.reduce(function (total, employee) { return total + employee.getSalary(); }, // magic is here
                0));
        }
    };
};
var lowEmployeeJs = employeeFactory(100, []); // Leaf (Employee)
var lowEmployeeJava = employeeFactory(100, []); // Leaf (Employee)
var middleEmployeeJs = employeeFactory(200, [lowEmployeeJs]); // Composite (Employee)
var middleEmployeeJava = employeeFactory(200, [lowEmployeeJava]); // Composite (Employee)
var headOfDepartment = employeeFactory(1000, [
    middleEmployeeJs,
    middleEmployeeJava,
]); // Composite (Employee)
var totalSalary = headOfDepartment.getSalary(); // Power of composite - recursively counts total value
console.log(totalSalary);
