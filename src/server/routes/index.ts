import * as express from 'express';
import authRouter from './auth';
import apiRouter from './api';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);

export default router;