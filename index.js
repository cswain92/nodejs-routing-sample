const express = require('express');
const app = express();
const PORT = 3000;

// Route 1: Home Page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

// Route 2: About Page
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});
// Route 3: About Page
app.get('/next', (req, res) => {
    res.send('<h1>About Next Page</h1>');
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
