import { Conn } from "../../lib/dbConnect.js";
import { Invoice } from "../../models/InvoiceModel.js";

import { redirect } from '@sveltejs/kit';

Conn()










export const load = async () => {
    const myData = await Invoice.find({});
    
    let data = myData.map((item) => {
        return JSON.parse(JSON.stringify(item))
    })
    
    return {
        data
    }
}