const express = require("express");
const router = express.Router();
const { savePreferences, getPreferences } = require("../controllers/preferencesController");
const protect = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");
const { preferencesSchema } = require("../validators/preferencesValidator");

router.post("/", protect, validate(preferencesSchema), savePreferences);

router.post("/", protect, savePreferences);
router.get("/", protect, getPreferences);

module.exports = router;
