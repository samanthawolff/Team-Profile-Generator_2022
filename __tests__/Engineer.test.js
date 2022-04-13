const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer('Samantha', 20, 'samanthawolff07@gmail.com', 'samanthawolff');

    expect(engineer.github).toEqual(expect.any(String));
});