import { Router } from 'express';
import { albumsController } from '../controllers/albums.controller.js';

const router = Router();


router.get('/', albumsController.getAllAlbums);


router.get('/:id', albumsController.getAlbumById);


router.get('/:id/fact', albumsController.getAlbumFact);

export default router;
