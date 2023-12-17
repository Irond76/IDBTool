import { Conn } from "../../lib/dbConnect.js";
import { Invoice } from "../../models/InvoiceModel.js";
import { Contractor } from "../../models/ContractorModel.js";

import { redirect } from '@sveltejs/kit';

Conn()


export const load = async () => {
    const myData = await Invoice.find({});
    const moreData = await Contractor.find({});
    
    let data = myData.map((item) => {
        return JSON.parse(JSON.stringify(item))
    })
    let data2 = moreData.map((item) => {
        return JSON.parse(JSON.stringify(item))
    })
    
    return {
        data:data,
        data2:data2
    }
}