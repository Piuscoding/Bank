
const mongoose = require('mongoose');


const fixedSchema = new mongoose.Schema({
    dePlan:{
        type: String,
    },
    amount: {
        type: String,
    },
    currency:{
        type: String,
    },
    Return_Amount:{
        type: String,
        Default:"Loading"
    },
    Mature_Date:{
        type: String,
        default: "Loading"
    },
    remarks:{
       type: String
    },
    image:{
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

const Livetrading = mongoose.model("livetrade", fixedSchema)
module.exports = Livetrading;