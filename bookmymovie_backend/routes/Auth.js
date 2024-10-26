const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const errorHandler = require('../middleware/errorMiddleware');
const authTokenHandler = require('../middleware/checkAuthToken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

// Test Route
router.get('/test', async (req, res) => {
    res.json({
        message: "Auth API is working"
    });
});

// Utility function to create response
function createResponse(ok, message, data) {
    return {
        ok,
        message,
        data,
    };
}

// Register Route
router.post('/register', async (req, res, next) => {
    try {
        const { name, email, password, city } = req.body;
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json(createResponse(false, 'Email already exists'));
        }

        const newUser = new User({
            name,
            password,
            email,
            city
        });

        await newUser.save(); // Await the save operation
        res.status(201).json(createResponse(true, 'User registered successfully'));
    } catch (err) {
        next(err);
    }
});

// Login Route
router.post('/login', async (req, res, next) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        console.log('User not found');
        return res.status(400).json(createResponse(false, 'Invalid credentials'));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log('Password not matched');
        return res.status(400).json(createResponse(false, 'Invalid credentials'));
    }

    const authToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '10m' });
    const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: '30m' });
    res.cookie('authToken', authToken, { httpOnly: true, secure: true, sameSite: 'None' });
    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'None' });

    res.status(200).json(createResponse(true, 'Login successful', {
        authToken, // This is where the error might occur
        refreshToken
    }));
});

router.get('/checklogin', authTokenHandler, async (req, res) => {
    res.json({
        userId: req.userId,
        ok: true,
        message: 'User authenticated successfully'
    })
})
// Error handling middleware
router.use(errorHandler);

module.exports = router;
