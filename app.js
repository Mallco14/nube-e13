const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
require('dotenv').config()
const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: '/tmp/',
    debug: true
})),


app.use(express.static('public'))

const contactos = require('./routes/productos')
app.use(contactos)

app.get('/', (req, res)=>{
    res.send('Nothing')
})

app.listen(3000, ()=>{
    console.log('¡Server UP! en http://localhost:3000')
 })