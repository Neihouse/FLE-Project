"use strict";
exports.__esModule = true;
var authController_1 = require("../controllers/authController");
// Mocks for Express request and response objects
var mockRequest = function (sessionData) { return ({
    session: sessionData
}); };
var mockResponse = function () {
    var res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};
var nextFunction = jest.fn();
describe('Auth Controller', function () {
    it('should create a session for a user', function () {
        var req = mockRequest({});
        var res = mockResponse();
        authController_1.createSession(req, res, nextFunction);
        expect(req.session).toBeDefined();
        expect(res.status).toBeCalledWith(200);
    });
    it('should destroy a session for a user', function () {
        var req = mockRequest({ user: { id: '123' } });
        var res = mockResponse();
        authController_1.destroySession(req, res, nextFunction);
        expect(req.session).toBeUndefined();
        expect(res.status).toBeCalledWith(200);
    });
    it('should get session data for a user', function () {
        var req = mockRequest({ user: { id: '123', name: 'John Doe' } });
        var res = mockResponse();
        authController_1.getSessionData(req, res, nextFunction);
        expect(res.json).toBeCalledWith(expect.objectContaining({ id: '123', name: 'John Doe' }));
    });
});
