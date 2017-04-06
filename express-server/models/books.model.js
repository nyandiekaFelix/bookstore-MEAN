const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    uploaded: {
        type: Date,
        default: Date.now  
    },
    ownerId: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    // thumbnail: {
    //     type: String,
    //     default: '' // Placeholder image url here
    // },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Books', BookSchema);