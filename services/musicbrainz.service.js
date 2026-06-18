export async function getAlbumWithDetailsFromMB(mbid) {
    try {
        const headers = {
            'User-Agent': 'MetalMusicStore/1.0.0 ( contact@yourdomain.com )',
            'Accept': 'application/json'
        };

        const url = `https://musicbrainz.org{mbid}?inc=artists+releases+tags&fmt=json`;
        const response = await fetch(url, { headers });
        
        if (!response.ok) {
            throw new Error(`MusicBrainz API responded with status ${response.status}`);
        }
        const data = await response.json();

        const tags = data.tags || [];
        const genres = tags
            .sort((a, b) => b.count - a.count)
            .map(t => t.name.toLowerCase());

        const firstReleaseId = data.releases?.[0]?.id;
        let songs = [];
        let totalTracks = 0;

        if (firstReleaseId) {
            const releaseUrl = `https://musicbrainz.org{firstReleaseId}?inc=recordings&fmt=json`;
            const releaseResponse = await fetch(releaseUrl, { headers });
            const releaseData = await releaseResponse.json();

            const media = releaseData.media?.[0];
            totalTracks = media?.['track-count'] || 0;
            
            if (media?.tracks) {
                songs = media.tracks.map(track => ({
                    trackNumber: track.position,
                    songName: track.title,
                    durationMs: track.length
                }));
            }
        }

        return {
            albumName: data.title,
            artistName: data['artist-credit']?.[0]?.artist?.name || 'Unknown Artist',
            genres: genres,
            totalTracks: totalTracks,
            songs: songs
        };

    } catch (error) {
        console.error("Error fetching data from MusicBrainz:", error);
        throw error;
    }
}
