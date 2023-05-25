require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Creating server
const app = express();

// DataBase
dbConnection();

// CORS
app.use(cors());

// Public Directory
app.use(express.static('public'));

// Parse request
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Listening request
app.listen(process.env.PORT, () => {
    console.log(`Calendar Servie runing on ${process.env.PORT}`);
});