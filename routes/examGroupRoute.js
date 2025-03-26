const express = require('express');
const router = express.Router();
  
  // POST /exams - Adds a new exam
  router.post('/exams', (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1;
    exams.push(newExam);
    res.status(201).json(newExam);
  });

  

module.exports = router;
