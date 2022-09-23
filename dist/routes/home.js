"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var imgAPI_1 = __importDefault(require("./imgAPI"));
var home_router = (0, express_1.Router)();
home_router.get('/', function (req, res) {
    res.send('welcome to my image processing API');
});
home_router.use('/api', imgAPI_1.default);
exports.default = home_router;
