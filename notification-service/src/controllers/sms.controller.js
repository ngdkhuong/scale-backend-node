import { sendSMS } from "../services/sms.service.js";

export const smsController = async (req, res) => {
    const { to, message } = req.body

    try {
        await sendSMS(to, message)
        res.status(200).send("SMS sent")
    } catch (err) {
        res.status(500).send("Failed to send SMS")
    }
}