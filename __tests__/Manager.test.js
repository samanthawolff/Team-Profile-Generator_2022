const Manager = require('../lib/Manager');

// Creating Managers object
test('creates a manager object', () => {
    const manager = new Manager('Samantha', 20, 'samanthawolff07@gmail.com', 9);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


// Test to get managers role
test('get role of employee', () => {
    const manager = new Manager('Samantha', 20, 'samanthawolff07@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
});

