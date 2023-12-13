import { Conn } from "../lib/dbConnect";
import mongoose from 'mongoose'
const { Schema } = mongoose;

const yourSchema = new Schema({
    size: String
});

Conn()
const Tank = mongoose.model('cars', yourSchema);

const small = new Tank({ size: 'small' });
await small.save();