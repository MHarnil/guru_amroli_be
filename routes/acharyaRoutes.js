const express = require('express');
const router = express.Router();
const {
    createAcharya,
    getAllAcharyas,
    getAcharyaById,
    updateAcharya,
    deleteAcharya
} = require('../controllers/acharyaController');

router.get('/', getAllAcharyas);
router.get('/:id', getAcharyaById);
router.post('/', createAcharya);
router.put('/:id', updateAcharya);
router.delete('/:id', deleteAcharya);

module.exports = router;
