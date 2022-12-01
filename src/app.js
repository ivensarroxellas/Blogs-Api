const express = require('express');
const LoginVerify = require('./middlewares/loginValidation');

const loginController = require('./controllers/login.controller');
// ...

const app = express();

app.use(express.json());

app.post('/login', LoginVerify, loginController.getLogin);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
