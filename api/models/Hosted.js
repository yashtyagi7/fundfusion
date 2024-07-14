const mongoose = require('mongoose');

const HostedSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: String,
    photos: [String],
    description: String,
    pitchDeck: String,
    date: String,
    location: String, // Add location field
    startupName: String, // Add startupName field
});

const HostedModel = mongoose.model('Hosted', HostedSchema);
module.exports = HostedModel;
