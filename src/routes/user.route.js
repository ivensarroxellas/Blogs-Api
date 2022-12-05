const express = require('express');

const routes = express.Router();
const userController = require('../controllers/user.controller');
const userValidation = require('../middlewares/userValidation');
const { tokenValidation } = require('../auth/jwtConfig');

routes.post('/', userValidation, userController.createUser);
routes.get('/', tokenValidation, userController.getAll);

module.exports = routes;