import { Conn } from "../../lib/dbConnect.js";
import { Invoice } from "../../models/InvoiceModel.js";
import { Contractor } from "../../models/ContractorModel.js";

import { redirect } from '@sveltejs/kit';

Conn()

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

            const percentage = parseFloat(formData.get(`contractorPercent-${i}`));
            contractorPercentages.push(percentage);
        }

        // Calculate shopMoney by dividing dentMoney by 2 and rounding to 2 decimal places
        const shopMoney = parseFloat((dentMoney / 2).toFixed(2));

        let contractorTotalAmounts = [];

        if (numberOfContractors === 1) {
            // If there is only one contractor, divide shopMoney by the contractor percentage and round to 2 decimal places
            contractorTotalAmounts.push(parseFloat((shopMoney * contractorPercentages[0] / 100).toFixed(2)));
        } else {
            // If there are multiple contractors, calculate the total percentage
            const totalPercentage = contractorPercentages.reduce((acc, percentage) => acc + percentage, 0);

            // Divide shopMoney by the total percentage and distribute among contractors, rounding to 2 decimal places
            for (let i = 0; i < numberOfContractors; i++) {
                const contractorAmount = parseFloat((shopMoney * contractorPercentages[i] / totalPercentage).toFixed(2));
                contractorTotalAmounts.push(contractorAmount);
            }
        }

        const newInvoice = new Invoice({
            InvoiceNumber: invoiceNumber,
            InvoiceDate: invoiceDate,
            DentMoney: parseFloat(dentMoney.toFixed(2)), // Round dentMoney to 2 decimal places
            ShopMoney: shopMoney,
            NumberOfContractors: numberOfContractors,
            ContractorNames: contractors,
            ContractorPercent: contractorPercentages.map(p => parseFloat(p.toFixed(2))), // Round contractor percentages to 2 decimal places
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
    })
    
    return {
        data
    }
}

