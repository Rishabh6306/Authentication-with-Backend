import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String 
});

const employeeModel = mongoose.model('employees', employeeSchema);

export default employeeModel;