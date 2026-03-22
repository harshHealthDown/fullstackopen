const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.set('strictQuery',false)

mongoose.connect(url,{family:4})
    .then(result => console.log('connected to MONGODB'))
    .catch(error => console.log('failed to connect to mongoDB',error))

const validator = (val) => {
    return /^\d{2,3}-\d+$/.test(val)
}

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        required:true,
    },
    number:{
        type:String,
        validate: [validator,'invalid PhoneNumber'],
        minLength:8,
        required:true,
    }
})

personSchema.set('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = new mongoose.model('Person',personSchema)