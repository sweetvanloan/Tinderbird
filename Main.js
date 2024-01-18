// Backend Node.js code (app.js)

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB connection setup
mongoose.connect('mongodb://localhost/tinderbird', { useNewUrlParser: true, useUnifiedTopology: true });

// Need to define MongoDB schemas and API endpoints here
// ...

app.listen(3000, () => {
    console.log('Tinderbird app is running on port 3000');
});
