const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JS' },
    { id: 2, name: 'Jasmin Meyers', age: 42, department: 'Marketing', salary: 47000, specialization: 'Social Media' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Accounting' },
    { id: 4, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Recruiting' },
    //... More employee records can be added here
];

// Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization} </p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

// Function to calculate the total salaries
// acc = accumulator (starts at 0)
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display employees details based on department (HR)
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization} </p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to display employees details based on ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => {
        return employee.id === employeeId;
    });
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization} </p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}

// Function to display employees details based on specialization (JS)
function findEmployeeBySpecialization(specialization) {

    const jsEmployees = employees.filter(employee => employee.specialization === 'JS');
    const jsEmployeesDisplay = jsEmployees.map((employee, specialization) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization} </p>`).join('');
    document.getElementById('employeesDetails').innerHTML = jsEmployeesDisplay;
}
