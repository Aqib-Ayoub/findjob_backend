const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  skill: { type: String, require: true },
});

module.exports = mongoose.model("Skill", SkillSchema);
