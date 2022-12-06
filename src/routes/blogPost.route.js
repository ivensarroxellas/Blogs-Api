const express = require('express');

const routes = express.Router();
const blogPostController = require('../controllers/blogPost.controller');
const { tokenValidation } = require('../auth/jwtConfig');

routes.get('/', tokenValidation, blogPostController.getAllBlogPost);

module.exports = routes;