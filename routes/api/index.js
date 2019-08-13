const router = require("express").Router();
const foodRoutes = require("./foods");
const userRoutes = require("./users")

// Book routes
router.use("/foods", foodRoutes);
router.use("/users", userRoutes);





module.exports = router;
