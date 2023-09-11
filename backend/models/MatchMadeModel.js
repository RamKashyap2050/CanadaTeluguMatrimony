const mongoose = require('mongoose');

const MatchMadeSchema = mongoose.Schema({
  user_one: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  user_two: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  isMatchMade: {
    type:Boolean,
    default: false
  }, 
  isContactInititated: {
    type: Boolean,
    default: true
  }
}, {
  collection: 'MatchMade',
  timestamp: true
});

module.exports = mongoose.model('MatchMade', MatchMadeSchema);