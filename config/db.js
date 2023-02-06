const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config({ path: 'var.env' });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.DB_NAME
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;