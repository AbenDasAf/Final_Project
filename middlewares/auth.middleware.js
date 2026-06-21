import jwt from 'jsonwebtoken';
import logger from '../utils/logger.js';

const verifyTokenAsync = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    logger.error(`JWT verification failed: ${error.message}`);
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

export { verifyTokenAsync };
