import mongoose, { Schema, model } from 'mongoose';

// mongoose.Promise = global.Promise;

/* customerSchema will correspond to a collection in your MongoDB database. */
const customerSchema = new Schema({
  title: { type: String },
  imageUrl: { type: String },
  slug: { type: String },
});

mongoose.models = {};

const Customer = model('Customer', customerSchema);

export default Customer;
