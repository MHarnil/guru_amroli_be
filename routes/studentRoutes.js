const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('photo'), studentController.createStudent);
router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', upload.single('photo'), studentController.updateStudent); // also handles photo update
router.delete('/:id', studentController.deleteStudent);

module.exports = router;