const Acharya = require('../models/Acharya');

// CREATE
exports.createAcharya = async (req, res) => {
    try {
        const acharya = new Acharya(req.body);
        await acharya.save();
        res.status(201).json(acharya);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// READ ALL
exports.getAllAcharyas = async (req, res) => {
    try {
        const acharyas = await Acharya.find();
        res.json(acharyas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ ONE
exports.getAcharyaById = async (req, res) => {
    try {
        const acharya = await Acharya.findById(req.params.id);
        if (!acharya) return res.status(404).json({ error: 'Not found' });
        res.json(acharya);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// UPDATE
exports.updateAcharya = async (req, res) => {
    try {
        const acharya = await Acharya.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!acharya) return res.status(404).json({ error: 'Not found' });
        res.json(acharya);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE
exports.deleteAcharya = async (req, res) => {
    try {
        const acharya = await Acharya.findByIdAndDelete(req.params.id);
        if (!acharya) return res.status(404).json({ error: 'Not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
