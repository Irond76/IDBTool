import { Conn } from "../../lib/dbConnect.js";
import { Invoice } from "../../models/InvoiceModel.js";
import { Contractor } from "../../models/ContractorModel.js";

import { redirect } from '@sveltejs/kit';

Conn();

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const invoiceNumber = formData.get('invoiceNumber');
        const invoiceDate = formData.get('date');
        const dentMoney = parseFloat(formData.get('dentMoney'));
        const numberOfContractors = parseInt(formData.get('numberOfContractors'), 10);
        const contractors = [];
        const contractorPercentages = [];

        for (let i = 0; i < numberOfContractors; i++) {
            const contractor = formData.get(`contractor-${i}`);
            contractors.push(contractor);
        
            const percentage = formData.get(`contractorPercent-${i}`);
            
            // Check if percentage is a valid number
            if (percentage === null || isNaN(parseFloat(percentage))) {
                console.error(`Invalid percentage for contractor-${i}:`, percentage);
            }
        
            contractorPercentages.push(percentage);
        }
   // Validate input values
const isValidInput = [dentMoney, ...contractorPercentages].every(value => !isNaN(value));

if (!isValidInput) {
    throw new Error('Invalid input values. Please check your input.');
}

// Ensure that contractorPercentages contains valid numeric values
const sanitizedContractorPercentages = contractorPercentages.map(p => {
    const numericValue = parseFloat(p);
    return isNaN(numericValue) ? 0 : numericValue;
});


        // Calculate the amount each contractor should receive
const contractorTotalAmounts = sanitizedContractorPercentages.map(percentage =>
    parseFloat((dentMoney / numberOfContractors * percentage / 100).toFixed(2))
);

// Calculate the total amount paid to contractors
const totalContractorAmount = contractorTotalAmounts.reduce((acc, amount) => acc + amount, 0);

// Calculate shopMoney as the remaining balance after paying contractors
const shopMoney = parseFloat((dentMoney - totalContractorAmount).toFixed(2));

// Create a newInvoice object with sanitized values
const newInvoice = new Invoice({
    InvoiceNumber: invoiceNumber,
    InvoiceDate: invoiceDate,
    DentMoney: parseFloat(dentMoney.toFixed(2)),
    ShopMoney: shopMoney,
    NumberOfContractors: numberOfContractors,
    ContractorNames: contractors,
    ContractorPercent: sanitizedContractorPercentages.map(p => parseFloat(p.toFixed(2))),
    ContractorTotalAmounts: contractorTotalAmounts,
});

        const existingInvoice = await Invoice.find({ InvoiceNumber: invoiceNumber });

        if (existingInvoice.length > 0) {
            console.log('Invoice Already Exist')
            throw redirect(301, 'http://localhost:5173/invoiceErrorPage');
        }

        await newInvoice.save();
        throw redirect(301, 'http://localhost:5173/');
    },
};

export const load = async () => {
    const myData = await Contractor.find({});

    let data = myData.map((item) => {
        return JSON.parse(JSON.stringify(item))
    });

    return {
        data
    };
};





