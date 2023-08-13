import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config as configDotenv } from 'dotenv';
import employeeModel from './models/employee.js'; // Adjust the path and extension as needed

configDotenv();

const app = express();
app.use(express.json());

// Adjust the CORS configuration to allow connections from localhost:5173
app.use(cors({ origin: 'http://localhost:5173' }));

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
}

connectToDb();



app.post('/register', (req, res) => {
    employeeModel.create(req.body)
        .then((employee) => res.json(employee))
        .catch((err) => res.status(500).json({ error: err }));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    employeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password.trim() === password) {
                    res.json('Success!');
                } else {
                    res.json('Incorrect password');
                }
            } else {
                return res.json('No record existed');
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});