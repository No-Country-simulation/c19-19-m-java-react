const { Router } = require('express');

const router = Router();

router.use("/post", require("./postRouter"));
router.use("/user", require("./userRouter"))
router.use("/auth", require("./authRouter"))

module.exports = router;