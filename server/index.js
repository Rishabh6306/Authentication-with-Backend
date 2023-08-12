import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config as configDotenv } from 'dotenv';
import emloyeeModel from './models/employee';

configDotenv();

const app = express();
app.use(express.json());
app.use(cors());

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to MongoDB`);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit the process with a non-zero status code
    }
};

connectToDb();

app.post('/', (req, res) => {
     emloyeeModel.create(req.body)
     .then((employees) => res.json())
     .catch((err) => res.json(err))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});