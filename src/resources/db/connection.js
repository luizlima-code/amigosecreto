const mongoose = require('mongoose')

let conn = null

const URI = 'mongodb+srv://secret:yzx9p0hZ45XONzGA@cluster0.2s4pk.mongodb.net/secret?retryWrites=true&w=majority'

module.exports = async () => {
    if (!conn) {
        conn = mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        await conn
    }
}