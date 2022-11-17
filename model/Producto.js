const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productoSchema = new Schema ({
    nombre: String,
    description: String,
    stock : Number,
    categoria: String,
    precio:Number,
    foto: String
  
}, {versionKey:false})
module.exports = mongoose.model('productos', productoSchema)
