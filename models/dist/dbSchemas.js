"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var bcryptjs_1 = require("bcryptjs");
var userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    createdAt: { type: Date, "default": Date.now },
    roles: [{ type: String, "enum": ['user', 'admin'] }]
});
// Password hash middleware.
userSchema.pre('save', function (next) {
    if (this.isModified('passwordHash')) {
        this.passwordHash = bcryptjs_1["default"].hashSync(this.passwordHash, 8);
    }
    next();
});
// Helper method to check password.
userSchema.methods.checkPassword = function (password) {
    return bcryptjs_1["default"].compareSync(password, this.passwordHash);
};
var User = mongoose_1["default"].model('User', userSchema);
exports["default"] = User;
