const express = require('express');
const LoginVerify = require('./middlewares/loginValidation');
const UserVerify = require('./middlewares/userValidation');

const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
// ...

const app = express();

app.use(express.json());

app.post('/login', LoginVerify, loginController.getLogin);
app.post('/user', UserVerify, userController.createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
