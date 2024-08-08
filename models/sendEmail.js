const nodemailer = require('nodemailer');

const sendEmail = (recipient, subject, body) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || "gmail",
        auth: {
            user: process.env.EMAIL_ADDRESS || "stellamysticah12@gmail.com",
            pass: process.env.EMAIL_PASSWORD || "xxrw pcqt oeed zsgc"
        }
    });

    const mailOptions = {
        from: `"SHECANCODE WEBSITE" <${process.env.EMAIL_ADDRESS || "stellamysticah12@gmail.com"}>`,
        to: recipient,
        subject: subject,
        text: body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = sendEmail;
