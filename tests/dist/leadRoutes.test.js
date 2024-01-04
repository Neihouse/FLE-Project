"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var app_1 = require("../app"); // Assuming the Express app is exported from this file
var server;
// Start the server before all tests
beforeAll(function (done) {
    server = app_1["default"].listen(3001, done);
});
// Stop the server after all tests
afterAll(function (done) {
    server.close(done);
});
describe('Lead Routes', function () {
    it('should fetch all leads', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get('http://localhost:3001/api/leads')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(Array.isArray(response.data)).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    // Test for creating a new lead
    it('should create a new lead', function () { return __awaiter(void 0, void 0, void 0, function () {
        var newLead, createResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newLead = {
                        id: 'test-lead-id',
                        created_time: new Date().toISOString(),
                        field_data: [{ field: 'email', value: 'test@example.com' }]
                    };
                    return [4 /*yield*/, axios_1["default"].post('http://localhost:3001/api/leads', newLead)];
                case 1:
                    createResponse = _a.sent();
                    expect(createResponse.status).toBe(201);
                    expect(createResponse.data.id).toBe(newLead.id);
                    // Cleanup after test
                    return [4 /*yield*/, axios_1["default"]["delete"]("http://localhost:3001/api/leads/" + newLead.id)];
                case 2:
                    // Cleanup after test
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Test for updating a lead
    it('should update a lead', function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateData, updateResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateData = {
                        field_data: [{ field: 'email', value: 'updated@example.com' }]
                    };
                    return [4 /*yield*/, axios_1["default"].put('http://localhost:3001/api/leads/test-lead-id', updateData)];
                case 1:
                    updateResponse = _a.sent();
                    expect(updateResponse.status).toBe(200);
                    expect(updateResponse.data.field_data).toEqual(updateData.field_data);
                    return [2 /*return*/];
            }
        });
    }); });
    // Test for deleting a lead
    it('should delete a lead', function () { return __awaiter(void 0, void 0, void 0, function () {
        var deleteResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"]["delete"]('http://localhost:3001/api/leads/test-lead-id')];
                case 1:
                    deleteResponse = _a.sent();
                    expect(deleteResponse.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
