const Preferences = require("../models/Preferences");

exports.savePreferences = async (req, res) => {
  const { theme, layout } = req.body;
  const userId = req.userId;

  try {
    let preferences = await Preferences.findOne({ user: userId });

    if (preferences) {
      preferences.theme = theme;
      preferences.layout = layout;
    } else {
      preferences = new Preferences({ user: userId, theme, layout });
    }

    await preferences.save();
    res.status(200).json({ message: "Preferences saved", preferences });
  } catch (err) {
    res.status(500).json({ message: "Failed to save preferences" });
  }
};

exports.getPreferences = async (req, res) => {
  const userId = req.userId;

  try {
    const preferences = await Preferences.findOne({ user: userId });
    if (!preferences) {
      return res.status(404).json({ message: "No preferences found" });
    }

    res.json(preferences);
  } catch (err) {
    res.status(500).json({ message: "Failed to get preferences" });
  }
};
