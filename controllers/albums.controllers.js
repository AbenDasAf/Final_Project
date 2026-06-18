import { getAlbumWithDetailsFromMB } from '../services/musicbrainz.service.js';
import * as itemsDal from '../DAL/items.dal.js';
import { logger } from '../utils/logger.js';

export const getAllAlbums = async (req, res, next) => {
    try {
        logger("Request received: GET /api/items");
        const { minPrice, maxPrice, genre } = req.query;
        let albums = await itemsDal.readAllItems();

        if (minPrice) {
            albums = albums.filter(album => album.price >= parseFloat(minPrice));
        }

        if (maxPrice) {
            albums = albums.filter(album => album.price <= parseFloat(maxPrice));
        }

        if (genre) {
            albums = albums.filter(album => 
                album.genres && album.genres.some(g => g.toLowerCase() === genre.toLowerCase())
            );
        }

        return res.status(200).json({
            status: "success",
            results: albums.length,
            data: albums
        });
    } catch (error) {
        next(error);
    }
};

export const getAlbumById = async (req, res, next) => {
    try {
        const { id } = req.params;
        logger(`Request received: GET /api/items/${id}`);
        
        const localAlbum = await itemsDal.readItemById(id); 
        if (!localAlbum) {
            return res.status(404).json({ 
                status: "error", 
                message: "Album not found in store database." 
            });
        }

        const musicBrainzData = await getAlbumWithDetailsFromMB(localAlbum.musicBrainzId);

        const enrichedAlbum = {
            storeId: localAlbum.id,
            price: localAlbum.price,
            ...musicBrainzData
        };

        return res.status(200).json({
            status: "success",
            data: enrichedAlbum
        });
    } catch (error) {
        next(error);
    }
};

export const getRandomMusicFact = async (req, res, next) => {
    try {
        logger("Request received: GET /api/items/fact/random");
        const randomMbid = await itemsDal.getRandomMusicBrainzId();
        
        if (!randomMbid) {
            return res.status(404).json({ 
                status: "error", 
                message: "No albums available to fetch facts." 
            });
        }

        const musicBrainzData = await getAlbumWithDetailsFromMB(randomMbid);
        
        return res.status(200).json({
            status: "success",
            data: {
                albumName: musicBrainzData.albumName,
                artistName: musicBrainzData.artistName,
                totalTracks: musicBrainzData.totalTracks,
                genres: musicBrainzData.genres
            }
        });
    } catch (error) {
        next(error);
    }
};
