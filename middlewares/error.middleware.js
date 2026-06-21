import logger from '../utils/logger.js';

const errorHandler = (err, req, res, next) => {
  logger.error(err.message || 'An error occurred');
  const status = err.status || 500;
  const response = {
    success: false,
    message: err.message || 'Internal Server Error'
  };
  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
  }
  res.status(status).json(response);
};

export default errorHandler;
