const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    carName:{
        type:String,
    },
    carModel:{
        type:String,
    },
    carYear:{
        type:Number
    },
    carWeight: {
        type:Number
    },
    carHorsepower: {
        type:Number
    },
    carHorsepower: {
        type:Number
    }


})

const Car = mongoose.model("Car",carSchema)

module.exports = Car