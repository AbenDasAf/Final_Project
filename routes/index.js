import { Router } from 'express';
import albumRouter from './albumRoutes/album.routes.js';

const router = Router();

router.get('/health', (req, res) => {
    res.json({ status: "Server is fully operational" });
});

router.use('/albums', albumRouter);

export default router;
