const LoginVerify = (req, res, next) => {
  const { email, password } = req.body;
  if (!email.length || !password.length) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = LoginVerify;