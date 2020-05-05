const express = require('express');
const mongoose = require('mongoose');

let app = express();
app.use(express.json());
// Routes

// Koppling till databas

// Port
app.listen(3000, () => console.log('Server is up and running!'))