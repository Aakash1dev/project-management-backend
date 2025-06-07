const express = require("express");
const router = express.Router();

const { registerUser, loginUser, getProfile} = require("../controllers/authController");


const protect = require("../middleware/authMiddleware");

const validate = require("../middleware/validate");

const { registerSchema, loginSchema } = require("../validators/userValidator");

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);
router.get("/profile", protect, getProfile);

module.exports = router;
