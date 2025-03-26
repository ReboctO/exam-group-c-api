const express = require('express');
const router = express.Router();

// GET /exam-group route
router.get('/', (req, res) => {
  res.json({ message: 'Group group C API' });
});

module.exports = router;
