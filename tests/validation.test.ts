import { validate, userValidationRules, leadValidationRules } from '../middlewares/validation';
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// Mocks for Express request and response objects
const mockRequest = (bodyData) => ({
  body: bodyData,
}) as Request;

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const nextFunction: NextFunction = jest.fn();

describe('Validation Middleware', () => {
  describe('User Validation Rules', () => {
    it('should pass with valid registration fields', () => {
      const req = mockRequest({
        username: 'validUser',
        email: 'user@example.com',
        password: 'password123',
      });
      const res = mockResponse();

      userValidationRules()(req, res, nextFunction);
      expect(validationResult(req).isEmpty()).toBeTruthy();
      expect(nextFunction).toBeCalled();
    });

    it('should fail with invalid email', () => {
      const req = mockRequest({
        username: 'validUser',
        email: 'not-an-email',
        password: 'password123',
      });
      const res = mockResponse();

      userValidationRules()(req, res, nextFunction);
      expect(validationResult(req).isEmpty()).toBeFalsy();
      expect(res.status).toBeCalledWith(400);
    });
  });

  // Additional detailed test cases for leadValidationRules and validate function...
});
