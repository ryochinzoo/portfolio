import 'dotenv/config'

const emailPassword = process.env.mailPassword
const mailPort = process.env.mailPort
const mailHost = process.env.mailHost
const mailUser = process.env.mailUser

export default function ContactApi(req, res) {
    let nodemailer = require('nodemailer')
    console.log(req)
    const transporter = nodemailer.createTransport({
        port: mailPort,
        host: mailHost,
        auth: {
            user: mailUser,
            pass: emailPassword,
        },
        secure: true,
    })
    const mailData = {
        from: req.body.email,
        to: mailUser,
        subject: `Message From ${req.body.userName}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
    })
    res.status(200).json({data: req.body})
}