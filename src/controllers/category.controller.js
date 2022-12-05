const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await categoryService.createCategory({ name });

  return res.status(201).json(category);
};

const getAllCategory = async (_req, res) => { 
  const category = await categoryService.getAllCategory();
  return res.status(200).json(category);
};

module.exports = {
  createCategory,
  getAllCategory,
};