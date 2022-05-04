// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Reader, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Reader, {
  foreignKey: 'product_id',
});

// Products belongToMany Tags (through ProductTag)
Tag.hasMany(Reader, {
  foreignKey: 'product_id',
});
Product.belongsTo(Reader, {
  foreignKey: 'tag_id',
});

// Tags belongToMany Products (through ProductTag)
Product.hasMany(Reader, {
  foreignKey: 'product_id',
});
Tag.belongsTo(Reader, {
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
