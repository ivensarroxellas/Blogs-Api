const express = require('express');

const routes = express.Router();
const categoryController = require('../controllers/category.controller');
const CategoryValidation = require('../middlewares/categoryValidation');
const { tokenValidation } = require('../auth/jwtConfig');

routes.post('/', tokenValidation, CategoryValidation, categoryController.createCategory);

module.exports = routes;