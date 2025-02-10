"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paticipant = void 0;
const User_1 = require("./User");
const Activity_1 = require("./Activity");
class Paticipant extends User_1.User {
    constructor(username, password, name, role, email) {
    }
    searchActivity() {
        let activity = Activity_1.Activity.searchActivity();
        return activity;
    }
    registerForActivity(activity) {
        this.registration = new Registration(1, this, activity, "Waiting For Verify...");
        return true;
    }
    downloadCertificate(activity) {
        return new Certificate();
    }
}
exports.Paticipant = Paticipant;
