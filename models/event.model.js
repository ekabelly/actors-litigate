const mongoose = require('mongoose');
const mongooseLeanId = require('mongoose-lean-id');
const { metaData, required } = require('./helpers');

const EventSchema = mongoose.Schema({
    title: required(String),
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'groups' },
    startDate: Date,
    endDate: Date,
    address: String,
    city: String,
    description: String,
    eventType: String,
    numOfParticipants: Number,
    maxNumOfParticipants: Number,
    minNumOfParticipants: Number,
    metaData
}, {
    strict: true
});

EventSchema.plugin(mongooseLeanId);

module.exports = mongoose.model('events', EventSchema);