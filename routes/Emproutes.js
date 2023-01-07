const express = require("express");
const router = express.Router();

const { index, show, store, authenticate, login } = require("../controllers/EmpController");

router.get("/", authenticate, index);
router.get("/show", authenticate, show);
router.post("/store", store);

router.post("/login", login);


module.exports = router;
