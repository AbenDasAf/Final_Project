import { Router } from 'express';
import { getAllAlbums, getAlbumById, getRandomMusicFact } from '../../controllers/albums.controllers.js';

const router = Router();

router.get('/', getAllAlbums);

router.get('/fact/random', getRandomMusicFact);

router.get('/:id', getAlbumById);

export default router;
