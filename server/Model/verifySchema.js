
const mongoose = require('mongoose');


const paymentMoneySchema = new mongoose.Schema({
    
    amount: {
        type: String,
    },
    sender:{
        type:String,
    },

    receiver:{
        type: String,
    },

    currency:{
        type: String,
    },
    desc:{
       type: String
    },
    status: {
        type: String,
        default: 'pending'
    },

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        // required: true
    }
}, {timestamps: true});


const Verify = mongoose.model('verify', paymentMoneySchema);

module.exports = Verify;