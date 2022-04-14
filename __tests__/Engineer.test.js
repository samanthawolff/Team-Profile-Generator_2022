const Engineer = require('../lib/Engineer');

// Creating the engineer object
test('create an engineer object', () => {
    const engineer = new Engineer('Samantha', 20, 'samanthawolff07@gmail.com', 'samanthawolff');

    expect(engineer.github).toEqual(expect.any(String));
});


// Test to get engineers github
test('get engineer github', () => {
    const engineer = new Engineer('Samantha', 20, 'samanthawolff07@gmail.com', 'samanthawolff');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


// test to get engineers role
test('get role of employee', () => {
    const engineer = new Engineer('Samantha', 20, 'samanthawolff07@gmail.com', 'samanthawolff');

    expect(engineer.getRole()).toEqual("Engineer");
});