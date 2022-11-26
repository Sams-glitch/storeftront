import mongoose, { Schema, model } from 'mongoose';

// mongoose.Promise = global.Promise;

/* productSchema will correspond to a product in your MongoDB database. */
const productSchema = new Schema({
  title: { type: String },
  imageUrl: { type: String },
  price: { type: Number },
  comparePrice: { type: Number },
  category: { type: String },
  brand: { type: String },
  description: { type: String },
  stockInventory: { type: Number },
  dimensions: { type: String },
  status: { type: String },
  slug: { type: String }
});

mongoose.models = {};

const Product = model("Product", productSchema);

export default Product;