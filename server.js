import express from 'express';
import cors from 'cors';
import logger from './utils/logger.js';
import config from './config/index.js';
import router from './routes/index.js';
import loginRoute from './routes/routes.js';
import errorHandler from './middlewares/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', loginRoute); 
app.use('/api', router); 
app.use(errorHandler);

// Use the port from your config object here:
app.listen(config.port, () => {
    logger.info(`Server is running on http://localhost:${config.port}`);
});
