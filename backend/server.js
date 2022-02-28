import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

const app = express()

dotenv.config()
connectDB()

app.get('/', (req, res) => {
    res.send('Backend is running...')
})

app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.MODE} mode at port ${PORT}`.blue.bold))