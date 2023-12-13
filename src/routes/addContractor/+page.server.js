import { Conn } from "../../lib/dbConnect.js";
import { Employee } from "../../models/ContractorModel.js";


Conn()
export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const empName = formData.get('name');
        const empJob = formData.get('job');
        const newEmployee = new Employee({name:empName, job: empJob})
        await newEmployee.save();
    }
    
}
export const load = async () => {
    const myData = await Employee.find({});
    
    let data = myData.map((item) => {
        return JSON.parse(JSON.stringify(item))
    })
    console.log(`my data is: ${myData}`);
    
    return {
        data
    }
}
