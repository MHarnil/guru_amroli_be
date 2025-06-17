const mongoose = require('mongoose');

const samitiSchema = new mongoose.Schema({
    samiti: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: String, required: true },
    color: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Samiti', samitiSchema);
