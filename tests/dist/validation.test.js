"use strict";
exports.__esModule = true;
var validation_1 = require("../middlewares/validation");
var express_validator_1 = require("express-validator");
// Mocks for Express request and response objects
var mockRequest = function (bodyData) { return ({
    body: bodyData
}); };
var mockResponse = function () {
    var res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};
var nextFunction = jest.fn();
describe('Validation Middleware', function () {
    describe('User Validation Rules', function () {
        it('should pass with valid registration fields', function () {
            var req = mockRequest({
                username: 'validUser',
                email: 'user@example.com',
                password: 'password123'
            });
            var res = mockResponse();
            validation_1.userValidationRules()(req, res, nextFunction);
            expect(express_validator_1.validationResult(req).isEmpty()).toBeTruthy();
            expect(nextFunction).toBeCalled();
        });
        it('should fail with invalid email', function () {
            var req = mockRequest({
                username: 'validUser',
                email: 'not-an-email',
                password: 'password123'
            });
            var res = mockResponse();
            validation_1.userValidationRules()(req, res, nextFunction);
            expect(express_validator_1.validationResult(req).isEmpty()).toBeFalsy();
            expect(res.status).toBeCalledWith(400);
        });
    });
    // Additional detailed test cases for leadValidationRules and validate function...
});
