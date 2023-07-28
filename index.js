const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.get('/pfp/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const url = `https://cdn.discordapp.com/avatars/${userId}/.png`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Invalid Discord User ID or PFP not found.');
    }

    const buffer = await response.buffer();
    res.set('Content-Type', 'image/png');
    res.send(buffer);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});






