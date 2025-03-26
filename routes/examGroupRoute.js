const express = require('express');
const router = express.Router();

// GET /exams route - Returns a hardcoded list of exams
router.get('/exams', (req, res) => {
    const exams = [
      { id: 1, subject: 'Math', date: '2025-04-01' },
      { id: 2, subject: 'English', date: '2025-04-03' }
    ];
    res.json(exams);
  });
  
module.exports = router;
