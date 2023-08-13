import mongoose from 'mongoose';

// Define the structure of the employee schema
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], // Field must have a value
    },
    email: {
        type: String,
        required: [true, 'Email is required'], // Field must have a value
    },
    password: {
        type: String,
        required: [true, 'Password is required'], // Field must have a value
    },
});

// Create a Mongoose model based on the defined schema
const employeeModel = mongoose.model('employees', employeeSchema);

// Export the Mongoose model for use in other parts of the application
export default employeeModel;