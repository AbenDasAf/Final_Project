import axios from 'axios';

const MB_BASE_URL = 'https://musicbrainz.org/ws/2';

const searchAlbumDetails = async (albumTitle, artistName) => {
  try {
    const query = `release:${encodeURIComponent(albumTitle)} AND artist:${encodeURIComponent(artistName)}`;

    const response = await axios.get(`${MB_BASE_URL}/release`, {
      params: {
        query: query,
        fmt: 'json'
      },
      headers: {
        'User-Agent': 'MyMusicStoreApp/1.0.0 ( contact@mymusicstore.com )'
      }
    });

    if (response.data.releases && response.data.releases.length > 0) {
      return response.data.releases[0];
    }

    return null;
  } catch (error) {
    throw new Error(`MusicBrainz API failed: ${error.message}`);
  }
};

export { searchAlbumDetails };
