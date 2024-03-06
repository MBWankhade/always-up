const express = require('express');
const axios = require('axios');
const cron = require('node-cron');

const app = express();
const PORT = 3000;

// Schedule a job to run every minute
cron.schedule('* * * * *', async () => {
  try {
    // Make a request to the specified URL
    const response = await axios.get('https://job-quest.onrender.com/all-jobs');
    const selfResponse = await axios.get("https://always-up.onrender.com/internships");
    console.log(`Job executed at ${new Date().toISOString()}. Status code: ${response.status}`);
  } catch (error) {
    console.error(`Error occurred: ${error.message}`);
  }
});

app.get('/internships', async (req, res) => {
  try {
    console.log("hello from always up");
  } catch (error) {
    console.log(error);
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
