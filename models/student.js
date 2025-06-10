const mongoose = require('mongoose');

// Define Counter schema for auto-increment
const counterSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    seq: { type: Number, default: 0 }
});

// Counter model
const Counter = mongoose.model('Counter', counterSchema);

// Student schema
const studentSchema = new mongoose.Schema({
    registerNumber: { type: String, unique: true },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    whatsappNumber: { type: String, required: true },
    center: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    payment: { type: String, enum: ['Yes', 'No']},
    willTeachersFeeBeTaken: { type: String, enum: ['Yes', 'No']},
    photo: { type: String },
    amount: { type: Number },
    donation: { type: Number },
    paymentMode: { type: String, enum: ['Cash', 'Online'] }
}, {
    timestamps: true
});


studentSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const counter = await Counter.findOneAndUpdate(
                { id: 'student_register' },
                { $inc: { seq: 1 } },
                { new: true, upsert: true }
            );
            this.registerNumber = counter.seq.toString();
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

module.exports = mongoose.model('Student', studentSchema);
