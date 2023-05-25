const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Data Base Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error init database');
    }
}

module.exports = {
    dbConnection,
}