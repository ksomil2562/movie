const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;

const authRoutes = require('./routes/Auth');
const adminRoutes = require('./routes/Admin');
const movieRoutes = require('./routes/Movie');
const imageuploadRoutes = require('./routes/imageUploadRoutes');
require('dotenv').config();
require('./db')
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);
app.get('/', (req, res) => {
    res.json({ message: 'The API is working' });
});
app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/movie', movieRoutes);
app.use('/image', imageuploadRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});