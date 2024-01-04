
import express from 'express';
import { register, login } from '../controllers/authController';
import { userValidationRules, validate } from '../middlewares/validation';

const router = express.Router();

// Registration endpoint with validation middleware
router.post('/register', userValidationRules(), validate, register);

// Login endpoint
router.post('/login', login);

export default router;
