const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config(); // For environment variables (e.g., MONGO_URI, JWT_SECRET)

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for cross-origin requests

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// UserAuth Schema and Model (Single Collection for both Signup & Signin)
const userAuthSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving to DB
userAuthSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to check password
userAuthSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UserAuth = mongoose.model('UserAuth', userAuthSchema);

// Sign Up Route
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const userExists = await UserAuth.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create a new user
  const newUser = new UserAuth({
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Sign In Route (to generate token)
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserAuth.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    return res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err); // Log any errors
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});
// Fetch All Users (Admin only)
app.get('/api/users', async (req, res) => {
    try {
      // You may want to add admin authentication and authorization here
      const users = await UserAuth.find(); // Get all users
      res.status(200).json({ users });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  });
  
  // Fetch a Single User by ID (Admin only)
  app.get('/api/users/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await UserAuth.findById(id); // Find user by ID
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  });
  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
