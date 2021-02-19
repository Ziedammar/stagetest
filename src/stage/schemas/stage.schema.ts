import * as mongoose from 'mongoose';

export const StageSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,

});
