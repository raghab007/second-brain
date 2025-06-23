import mongoose from "mongoose";

mongoose.connect('mongodb+srv://pokhrelraghab0:QlMeqCL2XvVLamVa@cluster0.rcxpuj5.mongodb.net/')
.then(()=>{
    console.log("Mongo db connected")
})
.catch((error)=>{
    console.log("Error connecting MongoDb")
    console.log(error)
})

export default mongoose;