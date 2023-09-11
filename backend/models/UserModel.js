const { Int32 } = require("bson");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    last_name: {
      type: String,
      required: [true, "Please enter your last name"],
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    image: {
      data: Buffer,
      ContentType: String,
    },
    bio: {
      type: String,
    },
    gender: {
      type: String,
    },
    address: {
      type: Array,
    },
    dateofbirth: {
      type: Date,
    },
    visa_status: {
      type: String,
    },
    community: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
    caste: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Caste",
    },
    AccountStatus: {
      type: Boolean,
      default: true,
    },
    habits: {
      type: Array,
    },
  },
  { collection: "Users", timestamp: true }
);

module.exports = mongoose.model("Users", userSchema);
