import { albumsService } from '../services/albums.service.js';

export const albumsController = {

    getAllAlbums: async (req, res, next) => {
        try {

            const filters = req.query;
            const albums = await albumsService.getAlbums(filters);
            
            return res.status(200).json({
                status: "success",
                count: albums.length,
                data: albums
            });
        } catch (error) {
            next(error);
        }
    },


    getAlbumById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const album = await albumsService.getAlbumById(id);

            if (!album) {
                return res.status(404).json({
                    status: "error",
                    message: `Album with ID ${id} not found.`
                });
            }

            return res.status(200).json({
                status: "success",
                data: album
            });
        } catch (error) {
            next(error);
        }
    },

    getAlbumFact: async (req, res, next) => {
        try {
            const { id } = req.params;
            const enrichedAlbum = await albumsService.getAlbumWithExternalFact(id);

            if (!enrichedAlbum) {
                return res.status(404).json({
                    status: "error",
                    message: `Album with ID ${id} could not be found to fetch trivia.`
                });
            }

            return res.status(200).json({
                status: "success",
                data: enrichedAlbum
            });
        } catch (error) {
            next(error);
        }
    }
};

import { getAlbumWithDetailsFromMB } from '../services/musicbrainz.service.js';

export const getAlbumById = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const localAlbum = await albumService.getAlbumByLocalId(id); 
        
        if (!localAlbum) {
            return res.status(404).json({ 
                status: "error", 
                message: "Album not found in our store database." 
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

