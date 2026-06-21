// Hardcoded database simulation matching your schemas
const albumsCollection = [
    {
        id: "2144",
        title: "Preachers of the Night",
        band: { name: "Powerwolf", genre: "Power Metal" },
        price: 25.99,
        songs: [
            { track_number: 1, title: "Amen & Attack" },
            { track_number: 2, title: "Secrets of the Sacristy" },
            { track_number: 3, title: "Coleus Sanctus" },
            { track_number: 4, title: "Sacred & Wild" },
            { track_number: 5, title: "Kreuzfeuer" },
            { track_number: 6, title: "Cardinal Sin" },
            { track_number: 7, title: "In the Name of God(Deus Vult)" },
            { track_number: 8, title: "Nochnoi Dozor" },
            { track_number: 9, title: "Lust for Blood" },
            { track_number: 10, title: "Extatum Et Oratum" },
            { track_number: 11, title: "Last of the Living Dead" }
            
        ]
    },
    {
        id: "8891",
        title: "Nightfall in Middle-Earth",
        band: { name: "Blind Guardian", genre: "Power Metal" },
        price: 19.99,
        songs: [
            { track_number: 1, title: "War of Wrath" },
            { track_number: 2, title: "Into the Storm" },
            { track_number: 3, title: "Lammoth"},
            { track_number: 4, title: "Nightfall"},
            { track_number: 5, title: "The Minstrel"},
            { track_number: 6, title: "The Curse of Fëanor"},
            { track_number: 7, title: "Captured"},
            { track_number: 8, title: "Blood Tears"},
            { track_number: 9, title: "Mirror Mirror"},
            { track_number: 10, title: "Face the Truth" },
            { track_number: 11, title: "Noldor (Dead Winter Reigns)" },
            { track_number: 12, title: "Battle of Sudden Flame"},
            { track_number: 13, title: "Time Stands Still (At the Iron Hill)"},
            { track_number: 14, title: "The Dark Elf"},
            { track_number: 15, title: "Thorn"},
            { track_number: 16, title: "The Eldar"},
            { track_number: 17, title: "Nom the Wise"},
            { track_number: 18, title: "When Sorrow Sang"},
            { track_number: 19, title: "Out on the Water"},
            { track_number: 20, title: "The Steadfast"},
            { track_number: 21, title: "A Dark Passage"},
            { track_number: 22, title: "Final Chapter (Thus Ends...)"}

        ]
    },
    {
        id: "3402",
        title: "The Infamous...",
        band: { name: "Mobb Deep", genre: "Hip-Hop" },
        price: 14.99,
        songs: [
            { track_number: 1, title: "The Start of Your Ending (41st Side)" },
            { track_number: 2, title: "The Infamous Prelude" },
            { track_number: 3, title: "Survival of the Fittest" },
            { track_number: 4, title: "Eye for an Eye(Your Beef is Mines)" },
            { track_number: 5, title: "Just Step Prelude" },
            { track_number: 6, title: "Give Up the Goods (Just Step)" },
            { track_number: 7, title: "Temperature's Rising" },
            { track_number: 8, title: "Up North Trip" },
            { track_number: 9, title: "Trife Life" },
            { track_number: 10, title: "Q.U - Hectic" },
            { track_number: 11, title: "Right Back at You" },
            { track_number: 12, title: "The Grave Prelude" },
            { track_number: 13, title: "Cradle to the Grave" },
            { track_number: 14, title: "Drink Away the Pain (Situations)" },
            { track_number: 15, title: "Shook Ones, Pt. II" },
            { track_number: 16, title: "Party's Over" },
        ]
    },
    {
        id: "4412",
        title: "Vulgar Display of Power",
        band: { name: "Pantera", genre: "Thrash Metal" },
        price: 14.99,
        songs: [
            { track_number: 1, title: "Mouth for War" },
            { track_number: 2, title: "A New Level" },
            { track_number: 3, title: "Walk" },
            { track_number: 4, title: "Fucking Hostile" },
            { track_number: 5, title: "This Love" },
            { track_number: 6, title: "Rise" },
            { track_number: 7, title: "No Good(Attack the Radical)" },
            { track_number: 8, title: "Live in a Hole" },
            { track_number: 9, title: "Regular People(Conceit)  " },
            { track_number: 10, title: "By Demons Be Driven" },
            { track_number: 11, title: "Hollow" }
        ]
    }
];


export const musicDAL = {

    findAll: async () => {
        return albumsCollection;
    },


    findById: async (id) => {
        const album = albumsCollection.find(item => item.id === id);
        return album || null;
    },


    findBySongTitle: async (songTitle) => {
        const lowercaseTitle = songTitle.toLowerCase();
        const album = albumsCollection.find(album => 
            album.songs.some(song => song.title.toLowerCase().includes(lowercaseTitle))
        );
        return album || null;
    }
};
