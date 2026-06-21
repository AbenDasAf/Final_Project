import express from 'express';
import { albumsController } from '../../controllers/albums.controllers.js';
import { verifyTokenAsync } from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', verifyTokenAsync, albumsController.getAllAlbums);
router.get('/:id', verifyTokenAsync, albumsController.getAlbumById);
router.get('/:id/fact', verifyTokenAsync, albumsController.getAlbumFact);

export default router;

