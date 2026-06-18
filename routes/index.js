import { Router } from 'express';
import albumRoutes from './albumRoutes/album.routes.js';

const router = Router();
router.use('/items', albumRoutes);

export default router;
