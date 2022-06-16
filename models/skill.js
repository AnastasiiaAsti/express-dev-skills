const skills = [
    { id: 1, skill: 'HTML5', level: 'advanced' },
    { id: 2, skill: 'CSS', level: 'advanced' },
    { id: 3, skill: 'JavaScript', level: 'advanced' },
    { id: 4, skill: 'JavaScript Libraries', level: 'advanced' },
    { id: 5, skill: 'Bootstrap', level: 'advanced' },
    { id: 6, skill: 'Node JS', level: 'advanced' },
    { id: 7, skill: 'Express', level: 'advanced' },
    { id: 8, skill: 'MERN Stack', level: 'advanced'},
    { id: 9, skill: 'JQuery', level: 'advanced' },
    { id: 10, skill: 'Python', level: 'intermediate' },
    { id: 11, skill: 'Database knowledge', level: 'advanced' },
    { id: 12, skill: 'Data structures and algorithms', level: 'advanced' },
    { id: 13, skill: 'Source control', level: 'intermediate' },
    { id: 14, skill: 'Testing procedures', level: 'advanced' },
    { id: 15, skill: 'Debugging knowledge', level: 'advanced' },
    { id: 16, skill: 'Operating systems', level: 'advanced' },
    { id: 17, skill: 'Text editing software', level: 'advanced' },
    { id: 18, skill: 'Cryptography', level: 'advanced' },
    { id: 19, skill: 'Software frameworks', level: 'advanced' },
    { id: 20, skill: 'Cloud platforms', level: 'intermediate' },
    { id: 21, skill: 'Spreadsheet software', level: 'advanced'},
    { id: 22, skill: 'Responsive Web Design', level: 'advanced' },
    { id: 23, skill: 'High stress tolerance', level: 'advanced' },
    { id: 24, skill: 'Detail oriented', level: 'advanced' },
    { id: 25, skill: 'Logical approach', level: 'advanced' },
    { id: 26, skill: 'Project management skills', level: 'advanced' }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
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

function update(editContent, id) {
    id = parseInt(id)
    const skillUpdate = skills.find(skill => skill.id === id)
    skillUpdate.skill = editContent.skill
    skillUpdate.level = editContent.level
}