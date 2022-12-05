const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
    return newUser;
  };

  const getAll = async () => {
    const newUser = await User.findAll({ attributes: { exclude: ['password'] } });
      return newUser;
    };

module.exports = {
  createUser,
  getAll,
};