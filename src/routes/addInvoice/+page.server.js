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

            const percentage = parseFloat(formData.get(`contractorPercent-${i}`));
            contractorPercentages.push(percentage);
        }

        // Calculate the amount each contractor should receive
        const contractorTotalAmounts = contractorPercentages.map(percentage =>
            parseFloat((dentMoney / numberOfContractors * percentage / 100).toFixed(2))
        );

        // Calculate the total amount paid to contractors
        const totalContractorAmount = contractorTotalAmounts.reduce((acc, amount) => acc + amount, 0);

        // Calculate shopMoney as the remaining balance after paying contractors
        const shopMoney = parseFloat((dentMoney - totalContractorAmount).toFixed(2));

        const newInvoice = new Invoice({
            InvoiceNumber: invoiceNumber,
            InvoiceDate: invoiceDate,
            DentMoney: parseFloat(dentMoney.toFixed(2)),
            ShopMoney: shopMoney,
            NumberOfContractors: numberOfContractors,
            ContractorNames: contractors,
            ContractorPercent: contractorPercentages.map(p => parseFloat(p.toFixed(2))),
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





