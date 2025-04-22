import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_LINK = process.env.MONGODB_LINK 

function dataBase() {
    mongoose.connect(MONGODB_LINK)
    .then(() =>{
        console.log("Database is connected!")
    })
    .catch((err) =>{
        console.log('Error Name : ',err.name)
        console.log('Error Message : ',err.message)
    })
}

export default dataBase
