import mongoose from 'mongoose'
let Schema = mongoose.Schema;
const CakeSchema = new Schema({
   cover: String,
   pictures:[],
   name: String,
   description: String,
   store: Number,
   price: Number,
   standards:[],
   isPromotion:Boolean,
   promotionUrl: String,
   onSale: Boolean,
   sales: Number,
   category: String
},{ collection: 'cake' });
const cake = mongoose.model('Cake', CakeSchema);

export default cake;
