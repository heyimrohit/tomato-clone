import mongoose from "mongoose";

const connectDB = async () =>{
    await mongoose.connect('mongodb://localhost:27017/tomato')
    .then(()=>console.log('Database connected'))
    .catch((err)=>console.log(err));
}
export default connectDB;