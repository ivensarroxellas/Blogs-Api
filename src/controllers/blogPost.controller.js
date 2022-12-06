const blogPostService = require('../services/blogPost.service');

const getAllBlogPost = async (_req, res) => { 
  const blogPost = await blogPostService.getAllBlogPost();
  return res.status(200).json(blogPost);
};

module.exports = {
  getAllBlogPost,
};