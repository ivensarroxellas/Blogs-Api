const { User } = require('../models');

const getLogin = async (email, password) => {
  const login = await User.findOne({ where: { email, password } });
  
  return login;
};

module.exports = {
  getLogin,
};