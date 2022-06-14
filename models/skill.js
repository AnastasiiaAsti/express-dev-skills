const skills = [
    { id: 1, skill: 'HTML5', advanced: true },
    { id: 2, todo: 'CSS', advanced: true },
    { id: 3, todo: 'JavaScript', advanced: true },
    { id: 3, skill: 'JavaScript Libraries', advanced: true },
    { id: 4, skill: 'Bootstrap', advanced: true },
    { id: 5, skill: 'Node JS', advanced: true },
    { id: 6, skill: 'Express', advanced: true },
    { id: 7, skill: 'MERN Stack', advanced: true },
    { id: 8, skill: 'JQuery', advanced: true },
    { id: 9, skill: 'Python', advanced: false },
    { id: 10, skill: 'Database knowledge', advanced: true },
    { id: 11, skill: 'Data structures and algorithms', advanced: true },
    { id: 12, skill: 'Source control', advanced: false },
    { id: 13, skill: 'Testing procedures', advanced: true },
    { id: 14, skill: 'Debugging knowledge', advanced: true },
    { id: 15, skill: 'Operating systems', advanced: true },
    { id: 16, skill: 'Text editing software', advanced: true },
    { id: 17, skill: 'Cryptography', advanced: false },
    { id: 18, skill: 'Software frameworks', advanced: true },
    { id: 19, skill: 'Cloud platforms', advanced: false },
    { id: 20, skill: 'Spreadsheet software', advanced: true },
    { id: 21, skill: 'Responsive Web Design', advanced: true },
    { id: 22, skill: 'High stress tolerance', advanced: true },
    { id: 23, skill: 'Detail oriented', advanced: true },
    { id: 24, skill: 'Logical approach', advanced: true },
    { id: 25, skill: 'Project management skills', advanced: true },
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
};