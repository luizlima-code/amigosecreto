const mongoose = require('mongoose')

const Schema = {
    owner: String,
    ownerEmail: String,
    adminKey: String,
    externalId: String,
    participants: [{
        _id: false,
        externalId: String,
        email: String,
        name: String,
    }],
    drawResult: [{
        _id: false,
        giver: String,
        receiver: String,
    }],
}

module.exports = mongoose.model('Secret', Schema)
