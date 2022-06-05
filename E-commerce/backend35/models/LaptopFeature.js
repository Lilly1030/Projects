const mongoose = require('mongoose')

const laptopFeatureSchema = new mongoose.Schema({
    categoryID:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Category'
    },
    RAM: {
        type: String,
        required: true
    },
    Storage: {
        type: String,
        required: true
    },
    Color: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('LaptopFeature',laptopFeatureSchema)