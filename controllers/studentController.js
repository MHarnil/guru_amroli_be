const Student = require('../models/student');
const { uploadFile } = require('../utils/uploadFile');

// Create student with photo upload
exports.createStudent = async (req, res) => {
    try {
        let photoUrl = '';

        // Upload image if exists
        if (req.file) {
            photoUrl = await uploadFile(req.file.buffer);
        }

        const studentData = {
            ...req.body,
            photo: photoUrl
        };

        const student = new Student(studentData);
        const saved = await student.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all students
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get single student by ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ error: 'Student not found' });
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update student (optional: photo update)
exports.updateStudent = async (req, res) => {
    try {
        let updateData = { ...req.body };

        // If new photo uploaded, update it
        if (req.file) {
            const photoUrl = await uploadFile(req.file.buffer);
            updateData.photo = photoUrl;
        }

        const updated = await Student.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updated) return res.status(404).json({ error: 'Student not found' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete student
exports.deleteStudent = async (req, res) => {
    try {
        const deleted = await Student.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Student not found' });
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};