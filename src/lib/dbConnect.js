import mongoose from 'mongoose'
import { MONGO_URL } from '$env/static/private'

const connection = () => {
    try {
        
        const conn = mongoose.connect(MONGO_URL);
        console.log('connect to db')
        return conn
    } catch (error) {
        console.log(error)
    }
} 


export const Conn = connection



