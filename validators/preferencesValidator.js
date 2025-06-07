const Joi = require("joi");

exports.preferencesSchema = Joi.object({
  theme: Joi.string().valid("light", "dark").required(),
  layout: Joi.string().valid("grid", "list").required(),
});
