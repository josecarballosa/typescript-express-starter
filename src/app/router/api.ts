import { Router } from 'express';

const router = Router();

router.route('/').get((req, res) => {
  res.send({ message: 'Welcome to API' });
});

export default router;
