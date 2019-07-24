const router = require('express').Router();
const calorieRoutes = require('./calories');

// Book routes
router.use('/calories', calorieRoutes);

module.exports = router;
