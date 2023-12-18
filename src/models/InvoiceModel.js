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
        type: Number,
        required: true
    },
    ShopMoney: {
        type: Number,
        required: true,
        default: 0
    },
    NumberOfContractors: {
        type: Number
    },
    ContractorNames: [{
        type: String,
        ref: 'contractor'
    }],
    ContractorPercent: [{
        type: Number,
        ref: 'Contractor'
    }],
    ContractorTotalAmounts: [{
        type: [Number],
        default: [0,0,0]
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const invoice = mongoose.models.Invoice || mongoose.model('invoice', invoiceSchema);

export const Invoice = invoice;
