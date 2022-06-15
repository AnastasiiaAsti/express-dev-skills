const skills = [
    { id: 1, skill: 'HTML5', advanced: true },
    { id: 2, skill: 'CSS', advanced: true },
    { id: 3, skill: 'JavaScript', advanced: true },
    { id: 4, skill: 'JavaScript Libraries', advanced: true },
    { id: 5, skill: 'Bootstrap', advanced: true },
    { id: 6, skill: 'Node JS', advanced: true },
    { id: 7, skill: 'Express', advanced: true },
    { id: 8, skill: 'MERN Stack', advanced: true },
    { id: 9, skill: 'JQuery', advanced: true },
    { id: 10, skill: 'Python', advanced: false },
    { id: 11, skill: 'Database knowledge', advanced: true },
    { id: 12, skill: 'Data structures and algorithms', advanced: true },
    { id: 13, skill: 'Source control', advanced: false },
    { id: 14, skill: 'Testing procedures', advanced: true },
    { id: 15, skill: 'Debugging knowledge', advanced: true },
    { id: 16, skill: 'Operating systems', advanced: true },
    { id: 17, skill: 'Text editing software', advanced: true },
    { id: 18, skill: 'Cryptography', advanced: false },
    { id: 19, skill: 'Software frameworks', advanced: true },
    { id: 20, skill: 'Cloud platforms', advanced: false },
    { id: 21, skill: 'Spreadsheet software', advanced: true },
    { id: 22, skill: 'Responsive Web Design', advanced: true },
    { id: 23, skill: 'High stress tolerance', advanced: true },
    { id: 24, skill: 'Detail oriented', advanced: true },
    { id: 25, skill: 'Logical approach', advanced: true },
    { id: 26, skill: 'Project management skills', advanced: true }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 100;
    // New todos wouldn't be done :)
    skill.advanced = false;
    skills.push(skill);
}


function deleteOne(id) {
    //all properties attached to req.params are strings
    id = parseInt(id);
    //find idx number based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    //start at idx, deleteCount - 1
    skills.splice(idx, 1);
}