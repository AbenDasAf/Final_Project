import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();


router.get('/login', (req, res) => {
    const userPayload = {
        id: "test-user-123",
        username: "developer"
    };

    const secretKey = process.env.JWT_SECRET || "supersecretkey123";

    const token = jwt.sign(userPayload, secretKey, { expiresIn: '1h' });

    res.json({
        success: true,
        token: token
    });
});


export default router;
