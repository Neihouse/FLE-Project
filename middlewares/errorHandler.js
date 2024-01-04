// Error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log the error for debugging purposes
  console.error(err.stack);

  // Set the status code and send the error message
  res.status(500).json({
    message: 'An unexpected error occurred',
    error: err.message,
  });
};

module.exports = errorHandler;
