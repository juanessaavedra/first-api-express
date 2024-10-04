require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/database');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Agregar esta línea

// Connect to MongoDB
connectDB();

app.listen(PORT, HOST, () => { // Modifica para usar HOST
  console.log(`Server running on http://${HOST}:${PORT}`);
});
