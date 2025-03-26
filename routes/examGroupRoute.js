const express = require('express');
const router = express.Router();
  
  // POST /exams - Adds a new exam
  router.post('/exams', (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1;
    exams.push(newExam);
    res.status(201).json(newExam);
  });

<<<<<<< HEAD
  

=======
// GET /exams route - Returns a hardcoded list of exams
router.get('/exams', (req, res) => {
    const exams = [
      { id: 1, subject: 'Math', date: '2025-04-01' },
      { id: 2, subject: 'English', date: '2025-04-03' }
    ];
    res.json(exams);
  });
  
>>>>>>> Bonbon
module.exports = router;
