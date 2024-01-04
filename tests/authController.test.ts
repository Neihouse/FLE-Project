import { createSession, destroySession, getSessionData } from '../controllers/authController';
import { Request, Response, NextFunction } from 'express';

// Mocks for Express request and response objects
const mockRequest = (sessionData) => ({
  session: sessionData,
}) as Request;

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const nextFunction: NextFunction = jest.fn();

describe('Auth Controller', () => {
  it('should create a session for a user', () => {
    const req = mockRequest({});
    const res = mockResponse();

    createSession(req, res, nextFunction);
    expect(req.session).toBeDefined();
    expect(res.status).toBeCalledWith(200);
  });

  it('should destroy a session for a user', () => {
    const req = mockRequest({ user: { id: '123' } });
    const res = mockResponse();

    destroySession(req, res, nextFunction);
    expect(req.session).toBeUndefined();
    expect(res.status).toBeCalledWith(200);
  });

  it('should get session data for a user', () => {
    const req = mockRequest({ user: { id: '123', name: 'John Doe' } });
    const res = mockResponse();

    getSessionData(req, res, nextFunction);
    expect(res.json).toBeCalledWith(expect.objectContaining({ id: '123', name: 'John Doe' }));
  });
});
