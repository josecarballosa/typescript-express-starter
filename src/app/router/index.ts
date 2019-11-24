import { Router } from 'express';

import home from './pages';
import api from './api';

const router = Router();

router.use('/', home);
router.use('/api', api);

export default router;
