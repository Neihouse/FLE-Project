"use strict";
exports.__esModule = true;
exports.validate = exports.userValidationRules = void 0;
var express_validator_1 = require("express-validator");
// Validation middleware for user registration
var userValidationRules = function () {
    return [
        // Validate and sanitize fields.
        express_validator_1.body('username').isLength({ min: 3 }).trim().escape(),
        express_validator_1.body('email').isEmail().normalizeEmail(),
        express_validator_1.body('password').isLength({ min: 5 }),
    ];
};
exports.userValidationRules = userValidationRules;
// Middleware to check the result of the validation
var validate = function (req, res, next) {
    var errors = express_validator_1.validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    // In case of validation errors, return a 422 status with the errors
    var extractedErrors = [];
    errors.array().map(function (err) {
        var _a;
        return extractedErrors.push((_a = {}, _a[err.param] = err.msg, _a));
    });
    return res.status(422).json({
        errors: extractedErrors
    });
};
exports.validate = validate;
