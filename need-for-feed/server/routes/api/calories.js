const router = require("express").Router();
const caloriesController = require("../../controllers/caloriesController");

// Matches with "/api/calories"
router.route("/")
  .get(caloriesController.findAll)
  .post(caloriesController.create);

// Matches with "/api/calories/:id"
router
  .route("/:id")
  .get(caloriesController.findById)
  .put(caloriesController.update)
  .delete(caloriesController.remove);

module.exports = router;
