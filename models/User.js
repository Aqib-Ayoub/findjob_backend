const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, required: false },
    phone: { type: String, required: false },
    updated: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    isAgent: { type: Boolean, default: false },
    skills: { type: Boolean, default: false },
    profile: {
      type: String,
      required: true,
      default:
        "https://avatars.githubusercontent.com/u/52028089?s=400&u=34c2e3cca6ed2b7927934f973d364a51116d4cfa&v=4",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
