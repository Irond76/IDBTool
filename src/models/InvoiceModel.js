import mongoose from "mongoose";
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
    ContractorNames: [{
        type: String,
        ref: 'contractor'
    }],
    ContractorPercent: [{
        type: String,
        ref: 'Contractor'
    }],
    ContractorTotalAmounts: [{
        type: Number,
    }]

});




const invoice = mongoose.models.Invoice || mongoose.model('invoice', invoiceSchema);


export const Invoice = invoice;