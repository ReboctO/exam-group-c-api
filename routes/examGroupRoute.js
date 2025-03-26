const express = require('express');
const router = express.Router();

router.get('/exams', (req, res) => {
    const exams = [
      { id: 1, subject: 'Math', date: '2025-04-01' },
      { id: 2, subject: 'English', date: '2025-04-03' }
    ];
    res.json(exams);
  });
  let exams = [
    { id: 1, subject: 'Math', date: '2025-04-01' },
    { id: 2, subject: 'English', date: '2025-04-03' }
  ];
  
  // POST /exams - Adds a new exam
  router.post('/exams', (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1;
    exams.push(newExam);
    res.status(201).json(newExam);
  });

  

module.exports = router;
