import mongoose, { Schema, model } from 'mongoose';

// mongoose.Promise = global.Promise;

/* customerSchema will correspond to a customer in your MongoDB database. */
const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

mongoose.models = {};

const Customer = model('Customer', customerSchema);

export default Customer;
