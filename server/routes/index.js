const path = require("path");
const router = require("express").Router();
const apirouter = require("./api");

// API router
router.use("/api", apirouter);

// If no API router are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
