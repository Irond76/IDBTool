import mongoose from 'mongoose'
const { Schema } = mongoose;

const yourSchema = new Schema({
    Name: {
        type:String,
        required: true
    },
    Phone: {
        type:String,
        required: true
    },
    ContractorPercentage: {
        type: Number,
        required: true
    }
    
});

const contractor = mongoose.models.Contractor || mongoose.model('contractor', yourSchema);;


export const Contractor = contractor
