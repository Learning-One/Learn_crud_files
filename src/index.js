import dotenv from 'dotenv'
import express from 'express'
import dataBase from '../dataBase/db.js'
import bookRoutes from '../routes/bookRoutes.js'


dotenv.config()

dataBase()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json());

app.use('/api/v1/books', bookRoutes);

app.listen(PORT, () =>{
    console.log(`port is running on ${PORT}`)
})