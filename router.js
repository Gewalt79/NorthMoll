import Router from 'express';
import Controller from './Controller.js';

const router = new Router();

router.get('/get', Controller.getIssue);

export default router;
