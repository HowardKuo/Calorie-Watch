const path = require("path");
const router = require("express").Router();
const foodRoutes = require("./foods");
const wolfRoutes = require("./wolf");

// Book routes
router.use("/foods", foodRoutes);

// Google Routes
router.use("/wolf", wolfRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
