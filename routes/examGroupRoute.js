const express = require('express');
const router = express.Router();

// PUT /exams/:id - Updates an existing exam
router.put('/exams/:id', (req, res) => {
    const { id } = req.params;
    const updatedExam = req.body;
    const index = exams.findIndex(exam => exam.id == id);
  
    if (index !== -1) {
      exams[index] = { ...exams[index], ...updatedExam };
      res.json(exams[index]);
    } else {
      res.status(404).json({ message: 'Exam not found' });
    }
  });

  
  

module.exports = router;
