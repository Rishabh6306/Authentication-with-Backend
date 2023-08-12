import mongoose, { Mongoose, Schema, mongo } from "mongoose";

const emloyeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    paasword: String
})

const emloyeeModel = mongoose.model('employees', emloyeeSchema)

export default emloyeeModel;