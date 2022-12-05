const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
    return newUser;
  };

const getAll = async () => {
  const AllUsers = await User.findAll({ attributes: { exclude: ['password'] } });
    return AllUsers;
};

const getUserById = async (id) => {
  const userById = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  return userById;
 };

module.exports = {
  createUser,
  getAll,
  getUserById,
};