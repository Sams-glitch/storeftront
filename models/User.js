import mongoose, { Schema, model } from 'mongoose';

// mongoose.Promise = global.Promise;

/* userSchema will correspond to a collection in your MongoDB database. */
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

mongoose.models = {};

const User = model('User', userSchema);

export default User;
