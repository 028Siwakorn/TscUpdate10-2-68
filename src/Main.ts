import { User } from "./User"
import { Participant } from "./Participant"
//import { Activity } from "./Activity"
import { Registration } from "./Registration"
import { Certificate } from "./Certificate"
import { Instructor } from "./Instructor"
import { Notification } from "./Notification"
console.log("################# User ##################")
const user1 = new User("Siwakorn", "123", "First", "student", "664259028@webmail.npru.ac.th")
console.log(user1.toString())
console.log("#############################################")
console.log("################# Participant ##################")
const participant1 = new Participant("Siwakorn", "123", "First", "student", "664259028@webmail.npru.ac.th")
console.log(participant1.toString())
console.log("#############################################")
console.log("################# Registration ##################")
//const registration1 = new Registration("1", participant1, activity1, "student")
//console.log(registration1.toString())
console.log("#############################################")
console.log("################# Certificate ##################")
const certificate1 = new Certificate(1, "กิจกรรม", new Instructor(), "Siwakorn", "")
console.log(certificate1.toString())
console.log("#############################################")
console.log("################# Notification ##################")
const notification1 = new Notification(1, "ถึงกำหนดการแล้วครับ!", participant1, "Alive")
console.log(notification1.toString())
console.log("#############################################")