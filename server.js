const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const samitiRoutes = require('./routes/samitiRoutes');
const acharyaRoutes = require('./routes/acharyaRoutes');
const adhyakshRoutes = require('./routes/adhyakshRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/samitis', samitiRoutes);
app.use('/api/acharyas', acharyaRoutes);
app.use('/api/adhyakshs', adhyakshRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...............`));
