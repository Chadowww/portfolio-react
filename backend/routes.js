const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/sendmail', async (req, res) => {
    const { email, subject, content } = req.body;
    console.log(email, subject, content);
    const transporter = nodemailer.createTransport({
        host: '127.0.0.1',
        port: 1025,
        secure: false,
    });


    try {
        const info = await transporter.sendMail({
            from: email,
            to: "a.sale@outlook.fr",
            subject: subject,
            text: content,
            html: content,
        });

        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error sending test");
    }
});

module.exports = router;
