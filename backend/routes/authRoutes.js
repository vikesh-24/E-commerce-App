const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User1'); 
const router = express.Router();


router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'User already exists' });
    }


    const newUser = new User({ name, email, password });
    await newUser.save();


    const token = newUser.generateAuthToken();

    res.status(201).send({ message: 'User created successfully', token });
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }

 
    if (user.password !== password) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }


    const token = user.generateAuthToken();

    res.status(200).send({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
});

module.exports = router;
