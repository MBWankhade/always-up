const express = require('express');
const axios = require('axios');
const cron = require('node-cron');

const app = express();
const PORT = 3000;

const internships = [
  { title: 'Software Developer Intern', company: 'ABC Corp', location: 'City, Country' },
  { title: 'Marketing Intern', company: 'XYZ Inc', location: 'Another City, Country' },
  // Add more dummy internship objects as needed
];

// Schedule a job to run every minute
cron.schedule('* * * * *', async () => {
  try {
    const response = await axios.get('https://job-quest.onrender.com/dummyRoute/always-up');
    const selfResponse = await axios.get("https://always-up.onrender.com/internships");
    console.log(`Job executed at ${new Date().toISOString()}. 
      Status code 1: ${response.status}, Status code 2: ${selfResponse.status}`);
  } catch (error) {
    console.error(`Error occurred: ${error.message}`);
  }
});


app.get('/internships', async (req, res) => {
  try {
    console.log("hello from always up");
    res.status(200).json(internships);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
