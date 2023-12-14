import { Conn } from "../../lib/dbConnect.js";
import { Invoice } from "../../models/InvoiceModel.js";
import { Contractor } from "../../models/ContractorModel.js";

import { redirect } from '@sveltejs/kit';

Conn()


export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const invoiceNumber = formData.get('invoiceNumber');
        const invoiceDate = formData.get('date');
        const dentMoney = formData.get('dentMoney');
        const numberOfContractors = formData.get('numberOfContractors');
        const contractors = [];
        for (let i = 0; i < numberOfContractors; i++) {
          const contractor = formData.get(`contractor-${i}`);
          contractors.push(contractor);
        }
        const newInvoice = new Invoice({InvoiceNumber:invoiceNumber, InvoiceDate:invoiceDate, DentMoney: dentMoney, NumberOfContractors: numberOfContractors, ContractorNames:contractors});
        const existingInvoice = await Invoice.find({InvoiceNumber:invoiceNumber});


        if (existingInvoice.length > 0) {
            console.log('Invoice Already Exist')
            throw redirect(301, 'http://localhost:5173/invoiceErrorPage');
        }
        await newInvoice.save();

    }
}

export const load = async () => {
    const myData = await Contractor.find({});
    
    let data = myData.map((item) => {
        return JSON.parse(JSON.stringify(item))
    })
    
    return {
        data
    }
}
