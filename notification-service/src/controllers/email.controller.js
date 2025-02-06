import {sendEmail} from "../services/email.service.js"

export const emailController = async (req, res) => {
    const { to, subject, text } = req.body

    try {
        await sendEmail(to, subject, text)
        res.status(200).send("Email sent")
    } catch (err) {
        res.status(500).send("Failed to send email")
    }
}
