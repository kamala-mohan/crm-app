const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
    service: "gmail",
    debug: true,
    auth: {
        user: 'kamala123mohan@gmail.com',
        pass: 'qkgbistahmjlqyrv'
    }
})