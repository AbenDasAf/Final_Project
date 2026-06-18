import { musicDAL } from '../dal/music.dal.js';

export const albumsService = {


    getAlbums: async (filters) => {
        const { genre, minPrice, maxPrice, song } = filters;
        

        if (song) {
            const albumMatch = await musicDAL.findBySongTitle(song);
            return albumMatch ? [albumMatch] : [];
        }


        let albums = await musicDAL.findAll();


        if (genre) {
            albums = albums.filter(album => 
                album.band.genre.toLowerCase() === genre.toLowerCase()
            );
        }

        if (minPrice) {
            albums = albums.filter(album => album.price >= parseFloat(minPrice));
        }

        if (maxPrice) {
            albums = albums.filter(album => album.price <= parseFloat(maxPrice));
        }

        return albums;
    },


    getAlbumById: async (id) => {
        const album = await musicDAL.findById(id);
        return album;
    },


    getAlbumWithExternalFact: async (id) => {

        const album = await musicDAL.findById(id);
        if (!album) return null;

        try {

            const apiResponse = await fetch('https://adviceslip.com');
            
            if (!apiResponse.ok) {
                throw new Error('External API request failed');
            }

            const apiData = await apiResponse.json();
            const triviaQuote = apiData.slip?.advice || "Keep rocking!";


            return {
                ...album,
                external_critic_advice: triviaQuote,
                fetched_at: new Date().toISOString()
            };

        } catch (error) {

            return {
                ...album,
                external_critic_advice: "Music is the universal language of mankind.",
                error_note: "Could not reach third-party API server"
            };
        }
    }
};
