const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });
    return newCategory;
  };

const getAllCategory = async () => {
  const AllCategory = await Category.findAll();
    return AllCategory;
};

module.exports = {
  createCategory,
  getAllCategory,
};