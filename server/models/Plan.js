const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  date: { type: String, required: true }, // format: YYYY-MM-DD
  tasks: [{ type: String }]
});

module.exports = mongoose.model('Plan', PlanSchema);
