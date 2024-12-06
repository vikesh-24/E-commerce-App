const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, 'your_jwt_secret', { expiresIn: '1d' });
};

const User = mongoose.model('User1', userSchema);

module.exports = User;
