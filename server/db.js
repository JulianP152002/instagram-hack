import mongoose from 'mongoose'

export const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost/merndb')
        console.log('connecte')
    }catch(error){
        console.error(error)    
    }

    
}
