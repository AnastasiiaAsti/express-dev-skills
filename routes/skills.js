var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
const skillsCtrl = require('../controllers/skills');


 // All actual paths start with "/todos"

  // GET /skills
router.get('/', skillsCtrl.index);
  
module.exports = router;