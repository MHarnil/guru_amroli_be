const mongoose = require('mongoose');

const adhyakshSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    color: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Adhyaksh', adhyakshSchema);
