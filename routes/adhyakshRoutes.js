const express = require('express');
const router = express.Router();
const {
    createAdhyaksh,
    getAllAdhyakshs,
    getAdhyakshById,
    updateAdhyaksh,
    deleteAdhyaksh
} = require('../controllers/adhyakshController');

router.get('/', getAllAdhyakshs);
router.get('/:id', getAdhyakshById);
router.post('/', createAdhyaksh);
router.put('/:id', updateAdhyaksh);
router.delete('/:id', deleteAdhyaksh);

module.exports = router;
