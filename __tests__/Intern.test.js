const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern('Samantha', 20, 'samanthawolff07@gmail.com', 'UTSA');

    expect(intern.school).toEqual(expect.any(String));
});

test('get interns school', () => {
    const intern = new Intern('Samantha', 20, 'samanthawolff07@gmail.com', 'UTSA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});