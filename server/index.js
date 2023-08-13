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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});