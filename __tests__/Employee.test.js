const Employee = require('../lib/Employee');

// Creating the employee object
test('creates an employee object', () => {
    const employee = new Employee('Samantha', 20, 'samanthawolff07@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


// Test to get the employees name
test('get employee name', () => {
    const employee = new Employee('Samantha', 20, 'samanthawolff07@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


// Test to get the employees ID
test('get employee id', () => {
    const employee = new Employee('Samantha', 20, 'samanthawolff07@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});


// Test to get the employees email
test('get employee email', () => {
    const employee = new Employee('Samantha', 20, 'samanthawolff07@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


// Test to get the employees Role
test('get role of employee', () => {
    const employee = new Employee('Samantha', 20, 'samanthawolff07@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});