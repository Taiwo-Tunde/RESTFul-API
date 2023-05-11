
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type : 'string',
        require:true
    },
    price :{
        type: 'number',
        require:true
    },
    date : Date
})


const product = mongoose.model('Product', productSchema)

module.exports = product