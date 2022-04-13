const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Samantha', 20, 'samanthawolff07@gmail.com', 9);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

