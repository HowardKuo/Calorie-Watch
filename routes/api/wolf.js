// TODO Grab the axios package...
// @link https://www.npmjs.com/package/axios
const router = require("express").Router();
const wolfController = require("../../controllers/wolfController");

// Matches with "/api/google"
router
  .route("/")
  .get(wolfController.findAll);

module.exports = router;