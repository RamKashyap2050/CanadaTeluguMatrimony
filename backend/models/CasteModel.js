const mongoose = require('mongoose');

const CasteSchema = mongoose.Schema({
  caste_name: {
    type: String,
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Community",
  }
}, {
  collection: 'Caste',
  timestamp: true
});

module.exports = mongoose.model('Caste', CasteSchema);