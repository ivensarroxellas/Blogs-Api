module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true 
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true
     },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
     as: 'BlogPost',
     through: PostCategory,
     foreignKey: 'category_id',
     otherKey: 'post_id'
    });
    models.BlogPost.belongsToMany(models.Category, {
     as: 'Category',
     through: PostCategory,
     foreignKey: 'post_id',
     otherKey: 'category_id'
    });
  };

  return PostCategory;
};
