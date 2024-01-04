"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var leadSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    created_time: { type: Date, required: true },
    field_data: [{
            field: { type: String, required: true },
            value: { type: String, required: true }
        }]
});
var Lead = mongoose_1["default"].model('Lead', leadSchema);
exports["default"] = Lead;
