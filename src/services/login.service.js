const { User } = require('../models');

const getLogin = async (email) => {
  const login = await User.findOne({ where: { email } });
  
  return login;
};

module.exports = {
  getLogin,
};