import { Conn } from "../../lib/dbConnect.js";
import { Contractor } from "../../models/ContractorModel.js";
import { redirect } from '@sveltejs/kit';

Conn()
export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const contractorName = formData.get('name');
        const contractorPhone = formData.get('phone');
        const contractorPercentage = formData.get('percentage');
        const newContractor = new Contractor({Name:contractorName, Phone: contractorPhone, ContractorPercentage: contractorPercentage});
        const existingContractors = await Contractor.find({Name: contractorName });

            if (existingContractors.length > 0) {
                console.log('User Exist')
                throw redirect(301, 'http://localhost:5173/errorPage')
            }
            await newContractor.save();
       
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
