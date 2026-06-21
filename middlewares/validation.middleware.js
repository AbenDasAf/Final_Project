const validateBodyAsync = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.details ? error.details.map(d => d.message) : error.message
      });
    }
  };
};

export { validateBodyAsync };
