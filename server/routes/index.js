const Router = require("express");
const router = new Router();
const itemRouter = require("./itemRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");
const commentsRouter = require("./commentsRouter");
router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/collection", itemRouter);
router.use("/comments", commentsRouter);
module.exports = router;
