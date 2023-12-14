import { Conn } from "../../lib/dbConnect.js";
import { Contractor } from "../../models/ContractorModel.js";


Conn()
export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const contractorName = formData.get('name');
        const contractorPhone = formData.get('phone');
        const contractorPercentage = formData.get('percentage');
        const newContractor = new Contractor({Name:contractorName, Phone: contractorPhone, ContractorPercentage: contractorPercentage})
        await newContractor.save();
    }
    
}
export const load = async () => {
    const myData = await Contractor.find({});
    
    let data = myData.map((item) => {
        return JSON.parse(JSON.stringify(item))
    })
    console.log(`my data is: ${myData}`);
    
    return {
        data
    }
}
