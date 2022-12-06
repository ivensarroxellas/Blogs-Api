const { BlogPost, User, Category } = require('../models');

const getAllBlogPost = async () => {
  const AllBlogPost = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'category', through: { attributes: [] } },
    ],
  });
     
    return AllBlogPost;
};

module.exports = {
  getAllBlogPost,
};