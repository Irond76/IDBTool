import mongoose from 'mongoose'

const connection = () => {
    try {
        
        const conn = mongoose.connect('mongodb://localhost:27017/Tanks');
        console.log('connect to db')
        return conn
    } catch (error) {
        console.log(error)
    }
} 


export const Conn = connection



