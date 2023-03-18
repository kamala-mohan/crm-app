const mongoose = require('mongoose')


// Run the following line to connect
mongoose.connect("mongodb://127.0.0.1:27017/twitter",
    () => { console.log("Connected To MongoDB") },
    err => { console.log("Error :", err.message) })


let engineSchema = mongoose.Schema({ horsePower: Number, cc: Number })


let carSchema = mongoose.Schema({
    brand: String,
    model: {
        type: String,
        validate: {
            validator: s => s.length > 5,
            message: props => `${props.value} model name is too short`
        }
    },
    engine: engineSchema         //We are using nested Schema in this
})




let cars = mongoose.model('Cars', carSchema)  //Creating the model, based on Schema

cars.create({
    brand: "Maruti",
    model: "Altoss",
}).then(data => console.log(data))
    .catch(err => console.log(err))


let id = mongoose.Types.ObjectId("63dbbf3e90ec70338c7cff3d")     //id of Maruti

let update = cars.updateOne({_id:id},    
    {brand:"Audi",$inc:{__v:1}})    //updating based on id and incrementing version

update.then(console.log)
      .catch(console.log)


//Using async/await to search based on id
const search = async function (id) {                        
    try {
        const myCar = await cars.findOne({ _id: id })

        console.log(myCar)
    } catch (err) {
        console.log(err)
    }
}

search(id).then(() => console.log("found!!"))
