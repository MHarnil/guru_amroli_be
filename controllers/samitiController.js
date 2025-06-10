const Samiti = require('../models/Samiti');

// CREATE
exports.createSamiti = async (req, res) => {
    try {
        const samiti = new Samiti(req.body);
        await samiti.save();
        res.status(201).json(samiti);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// READ ALL
// exports.getAllSamitis = async (req, res) => {
//     try {
//         const groupedSamitis = await Samiti.aggregate([
//             {
//                 $group: {
//                     _id: "$samiti",
//                     members: {
//                         $push: {
//                             name: "$name",
//                             number: "$number"
//                         }
//                     }
//                 }
//             },
//             {
//                 $project: {
//                     _id: 0,
//                     samiti: "$_id",
//                     members: 1
//                 }
//             },
//             { $sort: { samiti: 1 } }
//         ]);
//
//         res.json(groupedSamitis);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
exports.getAllSamitis = async (req, res) => {
    try {
        const groupedSamitis = await Samiti.find();

        res.json(groupedSamitis);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// READ SINGLE
exports.getSamitiById = async (req, res) => {
    try {
        const samiti = await Samiti.findById(req.params.id);
        if (!samiti) return res.status(404).json({ error: 'Not found' });
        res.json(samiti);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// UPDATE
exports.updateSamiti = async (req, res) => {
    try {
        const samiti = await Samiti.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!samiti) return res.status(404).json({ error: 'Not found' });
        res.json(samiti);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE
exports.deleteSamiti = async (req, res) => {
    try {
        const samiti = await Samiti.findByIdAndDelete(req.params.id);
        if (!samiti) return res.status(404).json({ error: 'Not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
