"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
const Notification_1 = require("./Notification");
class Certificate {
    constructor(certificateId, content, issuer, signature, template) {
        this.certificateId = certificateId;
        this.content = content;
        this.issuer = issuer;
        this.signature = signature;
        this.template = template;
    }
    generateCertificate() {
        let certificateId = new Certificate(this.certificateId, this.content, this.issuer, this.signature, this.template);
        return certificateId;
    }
    sendCertificateNotification(participant) {
        let NotiCertificate = new Notification_1.Notification(1, "พร้อมให้ดาวน์โหลดแล้วครับ!", participant, "");
    }
    toString() {
        return `Certificate[certificateId = ${this.certificateId}, content = ${this.content}, issuer = ${this.issuer}, signature = ${this.signature}, template = ${this.template}]`;
    }
}
exports.Certificate = Certificate;
