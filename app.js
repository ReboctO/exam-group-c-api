const express = require('express');
const app = express();
const examGroupRoute = require('./routes/examGroupRoute');

// Use the exam group route
app.use('/exam-group', examGroupRoute);

// Set the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
