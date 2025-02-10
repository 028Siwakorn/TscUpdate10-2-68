"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Participant_1 = require("./Participant");
const Certificate_1 = require("./Certificate");
const Instructor_1 = require("./Instructor");
const Notification_1 = require("./Notification");
console.log("################# User ##################");
const user1 = new User_1.User("Siwakorn", "123", "First", "student", "664259028@webmail.npru.ac.th");
console.log(user1.toString());
console.log("#############################################");
console.log("################# Participant ##################");
const participant1 = new Participant_1.Participant("Siwakorn", "123", "First", "student", "664259028@webmail.npru.ac.th");
console.log(participant1.toString());
console.log("#############################################");
console.log("################# Registration ##################");
//const registration1 = new Registration("1", participant1, activity1, "student")
//console.log(registration1.toString())
console.log("#############################################");
console.log("################# Certificate ##################");
const certificate1 = new Certificate_1.Certificate(1, "กิจกรรม", new Instructor_1.Instructor(), "Siwakorn", "");
console.log(certificate1.toString());
console.log("#############################################");
console.log("################# Notification ##################");
const notification1 = new Notification_1.Notification(1, "ถึงกำหนดการแล้วครับ!", participant1, "Alive");
console.log(notification1.toString());
console.log("#############################################");
