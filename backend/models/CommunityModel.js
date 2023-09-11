const mongoose = require('mongoose');

const CommunitySchema = mongoose.Schema({
  community_name: {
    type: String,
    required: true,
  },
  community_image: {
    data:Buffer,
    ContentType: String
  }
}, {
  collection: 'Community',
  timestamp: true
});

module.exports = mongoose.model('Community', CommunitySchema);