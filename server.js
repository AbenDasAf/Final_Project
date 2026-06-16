import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { logger } from './utils/logger.js';
import router from './routes/index.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
    logger.info(`${req.method} request received at ${req.url}`);
    next();
});


app.use('/api', router);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});


app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});
