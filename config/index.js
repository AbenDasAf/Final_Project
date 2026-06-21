import dotenv from 'dotenv';

// Initialize and load environment variables from your root .env file
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'supersecretkey123',
    nodeEnv: process.env.NODE_ENV || 'development'
};

export default config;
