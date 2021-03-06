import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected successfully: ${conn.connection.host}`.grey.underline)
    } catch (error) {
        console.error(`Error: ${error}`.red.bold)
        process.exit(1)
    }
}
export default connectDB