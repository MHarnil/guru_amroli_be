const Adhyaksh = require('../models/Adhyaksh');

// CREATE
exports.createAdhyaksh = async (req, res) => {
    try {
        const adhyaksh = new Adhyaksh(req.body);
        await adhyaksh.save();
        res.status(201).json(adhyaksh);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// READ ALL
exports.getAllAdhyakshs = async (req, res) => {
    try {
        const adhyakshs = await Adhyaksh.find();
        res.json(adhyakshs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ ONE
exports.getAdhyakshById = async (req, res) => {
    try {
        const adhyaksh = await Adhyaksh.findById(req.params.id);
        if (!adhyaksh) return res.status(404).json({ error: 'Not found' });
        res.json(adhyaksh);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// UPDATE
exports.updateAdhyaksh = async (req, res) => {
    try {
        const adhyaksh = await Adhyaksh.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!adhyaksh) return res.status(404).json({ error: 'Not found' });
        res.json(adhyaksh);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE
exports.deleteAdhyaksh = async (req, res) => {
    try {
        const adhyaksh = await Adhyaksh.findByIdAndDelete(req.params.id);
        if (!adhyaksh) return res.status(404).json({ error: 'Not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
