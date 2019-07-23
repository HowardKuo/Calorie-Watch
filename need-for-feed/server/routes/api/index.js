const router = require('express').Router();
const calorierouter = require('./calories');

// calorie router
router.use('/calories', calorierouter);

module.exports = router;
