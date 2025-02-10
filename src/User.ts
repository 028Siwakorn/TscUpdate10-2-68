export class User {
    private username: string
    private password: string
    private name: string
    private role: string
    private email: string

    constructor(username: string, password: string, name: string, role: string, email: string) {
        this.username = username
        this.password = password
        this.name = name
        this.role = role
        this.email = email
    }
    public register(username: string, password: string): boolean { //ต้องไปต่อ Database เพื่อให้สอดคล้องกับฐานข้อมูล
        console.log("Register Succesfully!!")
        return true
    }
    public login(username: string, password: string) {
        if (this.username === username && this.password === password) {
            console.log("Login Succesfully!!")
            return true
        } else {
            console.log("Login Failure!!")
            return false
        }
    }
    public logout(): boolean {
        console.log("Logout Succesfully!!")
        return true
    }
    public updateProfile(name: string, email: string): void {
        this.name = name
        this.email = email
    }
    public toString(): string {
        return `User[username = ${this.username}, password = ${this.password}, name = ${this.name}, role = ${this.role}, email = ${this.email}]`
    }
}