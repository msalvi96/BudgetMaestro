const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0.1
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    category: {
        type: String,
        required: true,
        default: 'Other'
    }
})

const Transaction = mongoose.model('transactions', transactionSchema);

module.exports = {
    Transaction
}