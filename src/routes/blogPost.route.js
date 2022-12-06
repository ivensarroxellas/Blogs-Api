const express = require('express');

const routes = express.Router();
const blogPostController = require('../controllers/blogPost.controller');

routes.post('/', blogPostController.createCategory);

module.exports = routes;