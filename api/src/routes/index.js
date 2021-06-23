const { Router } = require('express');
const {getCommits, sayHi} = require('../controllers/commits');

const router = Router();

router.get('/commits', getCommits);
router.get('/', sayHi);



module.exports = router;
