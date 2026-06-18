import { Router } from 'express';


const router = Router();


router.get('/health', (req, res) => {
    res.json({ status: "Server is fully operational" });
});

export default router;
