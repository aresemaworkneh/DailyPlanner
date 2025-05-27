const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  date: { type: String, required: true }, // format: YYYY-MM-DD
  content: { type: String, required: true }
});

module.exports = mongoose.model('Log', LogSchema);
