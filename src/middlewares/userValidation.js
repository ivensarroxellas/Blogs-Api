const UserVerify = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const regex = /^\S+@\S+\.\S+$/;

  const emailRegex = regex.test(email);

  if (displayName.length < 8) {
    return res.status(400).json({ message:
       '"displayName" length must be at least 8 characters long' });
  }
  
  if (password.length < 6) {
    return res.status(400).json({ message:
       '"password" length must be at least 6 characters long' });
  }

  if (!emailRegex) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  return next();
};

module.exports = UserVerify;