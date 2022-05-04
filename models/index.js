// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
});

// Products belongToMany Tags (through ProductTag)
Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
});
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

// Tags belongToMany Products (through ProductTag)
Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
});
Tag.belongsTo(ProductTag, {
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
