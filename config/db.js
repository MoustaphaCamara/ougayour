const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO_URI);

    } catch (error) {
        console.log(error);
        process.exit();
    } finally {
        console.log("connected to mongodb")
    }
}

module.exports = connectDB;