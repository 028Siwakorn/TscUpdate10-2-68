import { User } from "./User";
import { Participant } from "./Participant";
import { Activity } from "./Activity";
export class Instructor extends User {

    constructor(username: string, password: string, name: string, role: string, email: string) {
        super(username, password, name, role, email)
    }
    public createActivity(): void {

    }
    public approveParticipant(participant: Participant): void {

    }
    public issueCertificate(): void {

    }
    public searchActivity() {

    }
    public toString(): string {
        return `Instructor[${super.toString}]`
    }
}