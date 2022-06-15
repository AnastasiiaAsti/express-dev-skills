var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
const skillsCtrl = require('../controllers/skills');


 // All actual paths start with "/todos"
//index route
router.get('/', skillsCtrl.index);
//new route
//position matters in this case
router.get('/new', skillsCtrl.new)
//show route
router.get('/:id', skillsCtrl.show)

module.exports = router;