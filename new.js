document.addEventListener('DOMContentLoaded', function() {
    fetch('employees.json') // Assuming the employee data is stored in a JSON file
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var table = document.getElementById('employee-table');

            // Add table rows dynamically based on the employee data
            data.forEach(function(employee) {
                var row = table.insertRow();
                row.insertCell().textContent = employee.Name;
                row.insertCell().textContent = employee.Age;
                row.insertCell().textContent = employee.Department;
                row.insertCell().textContent = employee.Salary;
            });
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
});
