import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config as configDotenv } from 'dotenv';

configDotenv();

const app = express();
app.use(express.json());
// app.use(cors()); 

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
};

connectToDb();

app.post('/register', (req, res) => {
    // Handle user registration logic here
    // For now, let's just send a response
    res.json({ message: 'User registered successfully' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
