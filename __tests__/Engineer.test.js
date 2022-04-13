const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer('Samantha', 20, 'samanthawolff07@gmail.com', 'samanthawolff');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github', () => {
    const engineer = new Engineer('Samantha', 20, 'samanthawolff07@gmail.com', 'samanthawolff');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of employee', () => {
    const engineer = new Engineer('Samantha', 20, 'samanthawolff07@gmail.com', 'samanthawolff');

    expect(engineer.getRole()).toEqual("Engineer");
});