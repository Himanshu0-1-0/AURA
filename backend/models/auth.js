const mongoose= require("mongoose")

// mongoose.connect("mongodb+srv://himanshumehta8104:tTS0vp6iYJDDfvJS@cluster1.gqetbta.mongodb.net/Auth?retryWrites=true&w=majority&appName=Cluster1") /// link  from mongosh (new model after / )
mongoose.connect("mongodb://localhost:27017/Auth_Aura");
const user = new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    contact: {type:Number,required:true},
    password:{type:String,required:true}
},{timestamps:true})

const model = mongoose.model("users",user) /// datas-> collection in mongosh

// const a=await model.create({})   at creation time


module.exports = model