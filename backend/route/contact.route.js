import express from 'express';
import { contact } from '../Controller/contact.controller.js';
const router = express.Router();

router.post('/',contact);

export default router;