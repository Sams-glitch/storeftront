import mongoose, { Schema, model } from 'mongoose';

// mongoose.Promise = global.Promise;

/* orderSchema will correspond to a order in your MongoDB database. */
const orderSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
      {
        name: { type: String, required: true },
        quantiry: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: [
      {
        fullName: { type: String, required: true },
        address: { type: Number, required: true },
        city: { type: String, required: true },
        postalCcode: { type: Number, required: true },
      },
    ],
    payñentMethod: { type: Number, required: true },
    paymentResult: { id: String, status: String, email_address: String },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
    isDelivered: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

mongoose.models = {};

const Order = model('Order', orderSchema);

export default Order;
