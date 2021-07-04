const Router = require("express");
const commentsController = require("../controllers/commentsController");
const router = new Router();
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", /*checkRole("ADMIN"),*/ commentsController.create);
router.delete("/:id", /*checkRole("ADMIN"),*/ commentsController.delete);
router.get("/:id", commentsController.getAll);

module.exports = router;
