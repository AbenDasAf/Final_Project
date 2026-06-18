const localAlbumsDatabase = [
    {
        id: "3001",
        price: 29.99,
        musicBrainzId: "0bbfda42-b0df-4f46-95ff-521b2df5057b"
    },
    {
        id: "3002",
        price: 49.99,
        musicBrainzId: "3a5d9bb8-8e19-379d-b294-ee8fcf743f77"
    },
    {
        id: "3003",
        price: 39.99,
        musicBrainzId: "628178c6-47e1-4db6-a775-0d1307841ca3"
    }
];

export const readAllItems = async () => {
    return [...localAlbumsDatabase];
};

export const readItemById = async (id) => {
    const album = localAlbumsDatabase.find(item => item.id === String(id));
    if (!album) return null;
    return { ...album };
};

export const getRandomMusicBrainzId = async () => {
    if (localAlbumsDatabase.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * localAlbumsDatabase.length);
    return localAlbumsDatabase[randomIndex].musicBrainzId;
};
