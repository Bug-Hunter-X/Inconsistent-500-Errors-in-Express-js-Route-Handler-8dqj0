const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation that might fail
    await new Promise(resolve => setTimeout(resolve, 1000));
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a database error or other unexpected issue
      throw new Error('Simulated Database Error');
    }
    res.send('Hello from Express!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});