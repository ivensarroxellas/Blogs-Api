const express = require('express');

const routes = express.Router();
const loginController = require('../controllers/login.controller');
const loginValidation = require('../middlewares/loginValidation');

routes.post('/', loginValidation, loginController.getLogin);

module.exports = routes;