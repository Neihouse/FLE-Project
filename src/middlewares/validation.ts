
import { body, validationResult } from 'express-validator';

// Validation rules for user registration
const userValidationRules = () => {
    return [
        body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
        body('email').isEmail().withMessage('Must be a valid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ];
};

// Validation rules for lead creation
const leadValidationRules = () => {
    return [
        body('facebookLeadId').notEmpty().withMessage('Facebook Lead ID is required'),
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Must be a valid email address'),
        body('phone').notEmpty().withMessage('Phone number is required')
    ];
};

// Middleware to validate the request and return errors if any
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export { userValidationRules, leadValidationRules, validate };
