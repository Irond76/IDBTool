import mongoose from "mongoose";
import { Contractor } from "../models/ContractorModel";
const { Schema } = mongoose;

const invoiceSchema = new Schema({
    InvoiceNumber: {
        type: Number,
        required: true
    },
    InvoiceDate: {
        type: Date,

    },
    DentMoney: {
        type:Number,
        required: true
    },
    NumberOfContractors: {
        type: Number
    },
    ContractorNames: []

});




const invoice = mongoose.models.Invoice || mongoose.model('invoice', invoiceSchema);


export const Invoice = invoice;