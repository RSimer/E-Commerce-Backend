// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
    foreignKey:'ecommerce_db',
    onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'ecommerce_db',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through:{
    model: ProductTag,
    unique: false
  },
  as: 'tag_price'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through:{
    model: ProductTag,
    unique: false
  },
  as: 'tag_products'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
