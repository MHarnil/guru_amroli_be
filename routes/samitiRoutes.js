const express = require('express');
const router = express.Router();
const {
    createSamiti,
    getAllSamitis,
    getSamitiById,
    updateSamiti,
    deleteSamiti
} = require('../controllers/samitiController');

router.get('/', getAllSamitis);
router.get('/:id', getSamitiById);
router.post('/', createSamiti);
router.put('/:id', updateSamiti);
router.delete('/:id', deleteSamiti);

module.exports = router;
