const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'Batatinha';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15min',
};

const createToken = (user) => {
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};