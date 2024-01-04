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
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var axios_1 = require("axios");
var LeadManagement_1 = require("../components/LeadManagement");
jest.mock('axios', function () { return ({
    get: jest.fn(function () { return Promise.resolve({ data: [] }); }),
    post: jest.fn(function () { return Promise.resolve({ data: { id: 'new-lead-id' } }); }),
    put: jest.fn(function () { return Promise.resolve(); }),
    "delete": jest.fn(function () { return Promise.resolve(); })
}); });
describe('LeadManagement Component', function () {
    it('renders the component', function () {
        react_2.render(react_1["default"].createElement(LeadManagement_1["default"], null));
        expect(react_2.screen.getByText('Lead Management')).toBeInTheDocument();
    });
    it('allows the user to create a new lead', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, getByLabelText, getByText, emailInput, createButton;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = react_2.render(react_1["default"].createElement(LeadManagement_1["default"], null)), getByLabelText = _a.getByLabelText, getByText = _a.getByText;
                    emailInput = getByLabelText('Email');
                    createButton = getByText('Create Lead');
                    react_2.fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
                    react_2.fireEvent.click(createButton);
                    return [4 /*yield*/, react_2.waitFor(function () { return expect(axios_1["default"].post).toHaveBeenCalled(); })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('allows the user to update a lead', function () { return __awaiter(void 0, void 0, void 0, function () {
        var leadData, _a, getByText, getAllByText, editButton;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    leadData = [
                        { id: 'test-lead-id', created_time: new Date().toISOString(), field_data: [{ field: 'email', value: 'test@example.com' }] }
                    ];
                    // Mock axios get to resolve with leadData
                    axios_1["default"].get.mockResolvedValueOnce({ data: leadData });
                    _a = react_2.render(react_1["default"].createElement(LeadManagement_1["default"], null)), getByText = _a.getByText, getAllByText = _a.getAllByText;
                    editButton = getAllByText('Edit')[0];
                    // Simulate clicking the edit button
                    react_2.fireEvent.click(editButton);
                    // Assert that the put request was made
                    return [4 /*yield*/, react_2.waitFor(function () { return expect(axios_1["default"].put).toHaveBeenCalled(); })];
                case 1:
                    // Assert that the put request was made
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('allows the user to delete a lead', function () { return __awaiter(void 0, void 0, void 0, function () {
        var leadData, getAllByText, deleteButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    leadData = [
                        { id: 'test-lead-id', created_time: new Date().toISOString(), field_data: [{ field: 'email', value: 'test@example.com' }] }
                    ];
                    // Mock axios get to resolve with leadData
                    axios_1["default"].get.mockResolvedValueOnce({ data: leadData });
                    getAllByText = react_2.render(react_1["default"].createElement(LeadManagement_1["default"], null)).getAllByText;
                    deleteButton = getAllByText('Delete')[0];
                    // Simulate clicking the delete button
                    react_2.fireEvent.click(deleteButton);
                    // Assert that the delete request was made
                    return [4 /*yield*/, react_2.waitFor(function () { return expect(axios_1["default"]["delete"]).toHaveBeenCalled(); })];
                case 1:
                    // Assert that the delete request was made
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Additional tests for updating and deleting leads will go here
});
