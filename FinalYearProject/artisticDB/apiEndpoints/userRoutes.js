const express = require('express');
const User = require('./models/User');

const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
});

// Get all users
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

module.exports = router;
