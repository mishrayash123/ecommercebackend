import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  productid: { type: String, required: true },
  userid: { type: String, required: true },
  orderid: { type: String, required: true },
  date: { type: String, required: true },
  ordered: { type: Boolean},
  shipped: { type: Boolean},
  ontheway: { type: Boolean},
  delivered: { type: Boolean},
  quantity: { type: Number, required: true },
  size:{type:String, required:true}
});

 export const UserModel = mongoose.model('orders', UserSchema);

// User Actions
 export const getorders = () => UserModel.find();
 export const getordersById = (id) => UserModel.findById(id);
 export const getproductById = (orderid) => UserModel.findOne({ 'orderid': orderid });
 export const createorders = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteordersById = (id) => UserModel.findOneAndDelete({ _id: id });
