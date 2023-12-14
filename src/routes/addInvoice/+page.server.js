import { Conn } from "../../lib/dbConnect.js";
import { Contractor } from "../../models/ContractorModel.js";
import { redirect } from '@sveltejs/kit';

Conn()


export const load = async () => {
    const myData = await Contractor.find({});
    
    let data = myData.map((item) => {
        return JSON.parse(JSON.stringify(item))
    })
    
    return {
        data
    }
}
