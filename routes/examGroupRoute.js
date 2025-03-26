const express = require('express');
const router = express.Router();
  
  // POST /exams - Adds a new exam
  router.post('/exams', (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1;
    exams.push(newExam);
    res.status(201).json(newExam);
  
  });
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

  

// GET /exams route - Returns a hardcoded list of exams
router.get('/exams', (req, res) => {
    const exams = [
      { id: 1, subject: 'Math', date: '2025-04-01' },
      { id: 2, subject: 'English', date: '2025-04-03' }
    ];
    res.json(exams);
  });


module.exports = router; 
