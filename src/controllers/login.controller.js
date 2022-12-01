const loginService = require('../services/login.service');
const { createToken } = require('../auth/jwtConfig');

const getLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginService.getLogin(email, password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
    }
  const token = createToken({ email });

  return res.status(200).json({ token });
  };
module.exports = {
  getLogin,
};