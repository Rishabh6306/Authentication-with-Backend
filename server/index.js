import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config as configDotenv } from 'dotenv';
import employeeModel from './models/employee.js';

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

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingEmployee = await employeeModel.findOne({ email: email });
        if (existingEmployee) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        const newEmployee = await employeeModel.create({ name, email, password });
        res.json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    employeeModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.json('No record existed');
            }

            if (user.password.trim() === password) {
                res.json('Success!');
            } else {
                res.json('Incorrect password');
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