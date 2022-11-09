import mongoose from "mongoose";

const Schema = mongoose.Schema;

const variationSchema = new Schema({
  sku: String,
  url: String,
  price: String,
  price_sale: String,
  sizes_available: [String],
  sizes_not_available: [String]
})

const infoSchema = new Schema({
  date:String,
  name:String,
  location:String
})
const reviewSchema = new Schema({
  title: String,
  rating: Number,
  info: infoSchema,
  body:String
})

const reviewsSchema = new Schema({
  review_count: Number,
  reviews: [reviewSchema],
  rating: Number
})

export const ShoeSchema = new Schema({
  title: String,
  category: String,
  url: String,
  tag: String,
  status: String,
  variations: [variationSchema],
  description: String,
  is_customizable: Boolean,
  reviews:[reviewsSchema]

  
  /* auteur:{
    type:String,
    required:'Enter author'
  }, */
});