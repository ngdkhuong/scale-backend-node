import express from 'express';
import { emailController } from '../controllers/email.controller.js';
import { smsController } from '../controllers/sms.controller.js';

const router = express.Router();

router.post("/email", emailController);

router.post("/sms", smsController)

export default router;