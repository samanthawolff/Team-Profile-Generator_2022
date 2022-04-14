const Intern = require('../lib/Intern');

// Creating Intern object
test('create an intern object', () => {
    const intern = new Intern('Samantha', 20, 'samanthawolff07@gmail.com', 'UTSA');

    expect(intern.school).toEqual(expect.any(String));
});


// Test to get interns school 
test('get interns school', () => {
    const intern = new Intern('Samantha', 20, 'samanthawolff07@gmail.com', 'UTSA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


// Test to get interns role
test('get role of employee', () => {
    const intern = new Intern('Samantha', 20, 'samanthawolff07@gmail.com', 'UTSA');

    expect(intern.getRole()).toEqual("Intern");
});