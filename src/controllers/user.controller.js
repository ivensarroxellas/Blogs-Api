const userService = require('../services/user.service');
const loginService = require('../services/login.service');
const { createToken } = require('../auth/jwtConfig');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const userExist = await loginService.getLogin(email);

  if (userExist) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const user = await userService.createUser({ displayName, email, password, image });
  const { password: _, ...userWithOutPassword } = user.dataValues;
  const token = createToken(userWithOutPassword);

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};