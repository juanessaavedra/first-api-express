const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const todoRoutes = require('./routes/todoRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;