import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  productid: { type: String, required: true },
  title: { type: String, required: true },
  color: { type: String, required: true },
  gender: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  image1: { type: String, required: true },
  quantity:{ type: Number, required: true },
  image2: { type: String, required: true },
  image3: { type: String, required: true },
  image4: { type: String, required: true },
  description: { type: String, required: true },
  userid: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  subcategory1: { type: String, required: true },
  details: { type: String, required: true },
});

 export const UserModel = mongoose.model('Cartfororders', UserSchema);

// User Actions
 export const getcartfororders = () => UserModel.find();
 export const detetecart = () => UserModel.deleteMany({});
 export const getCartforordersById = (id) => UserModel.findById(id);
 export const getcartforordersByuserid = (title) => UserModel.findOne({ 'title': title});
 export const createCartfororders = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteCartforordersById = (id) => UserModel.findOneAndDelete({ _id: id });
