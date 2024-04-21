const mongoose= require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Auth_Aura") /// link  from mongosh (new model after / )

const user = new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    contact: {type:Number,required:true},
    password:{type:String,required:true}
},{timestamps:true})

const model = mongoose.model("users",user) /// datas-> collection in mongosh

// const a=await model.create({})   at creation time


module.exports = model