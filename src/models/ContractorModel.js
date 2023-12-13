import mongoose from 'mongoose'
const { Schema } = mongoose;

const yourSchema = new Schema({
    name: String,
    job: String
});

const employee = mongoose.model('employee', yourSchema);


export const Employee = employee