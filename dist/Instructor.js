"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const User_1 = require("./User");
class Instructor extends User_1.User {
    constructor(username, password, name, role, email) {
        super(username, password, name, role, email);
    }
    createActivity() {
    }
    approveParticipant(participant) {
    }
    issueCertificate() {
    }
    searchActivity() {
    }
    toString() {
        return `Instructor[${super.toString}]`;
    }
}
exports.Instructor = Instructor;
