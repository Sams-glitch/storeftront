// import Product from '../../models/Product';
import User from '../../models/User';
import data from '../../utils/data';
import dbConnect from '../../utils/dbConnect';

const handler = async (req, res) => {
  await dbConnect();
  await User.deleteMany();
  await User.insertMany(data.users);
  // await Product.deleteMany();
  // await Product.insertMany(data.products);
  await dbConnect.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
