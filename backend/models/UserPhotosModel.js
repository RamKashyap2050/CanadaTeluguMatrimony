const mongoose = require("mongoose");

const UserPhotosSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    user_photo: {
        data:Buffer,
        ContentType: String,
        required: true
    },
  },
  {
    collection: "UserPhotos",
    timestamp: true,
  }
);

module.exports = mongoose.model("UserPhotos", UserPhotosSchema);
