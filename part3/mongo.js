const mongoose = require('mongoose')

if (process.argv.length<5) {
    console.log('provide sufficient information necessary for connecting to mongodb and sending data');
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3] //if name contain whitespace, it must be enclosed in double quotes
const number = process.argv[4]
const url = `mongodb+srv://harshp572004_db_user:${password}@cluster0.84qrjm3.mongodb.net/phonebook?appName=Cluster0`

mongoose.set('strictQuery',false)
mongoose.connect(url,{family:4})

const personSchema = new mongoose.Schema({
    name:String,
    number:String
})

const Person = mongoose.model('Person',personSchema)

let person = new Person({name,number})

person.save().then(result => {
    console.log(`added ${result.name} ${result.number} to Phonebook`)
    mongoose.connection.close()
})