import { body, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validation middleware for user registration
const userValidationRules = (): ValidationChain[] => {
  return [
    // Validate and sanitize fields.
    body('username').isLength({ min: 3 }).trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 5 }),
    // Add more validation rules as needed
  ];
};

// Middleware to check the result of the validation
const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  // In case of validation errors, return a 422 status with the errors
  const extractedErrors: { [param: string]: string }[] = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
  
  return res.status(422).json({
    errors: extractedErrors,
  });
};

export { userValidationRules, validate };
