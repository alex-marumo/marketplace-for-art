const Artist = require('./models/Artist');

// Create a new artist
router.post('/artists', async (req, res) => {
    const artist = new Artist(req.body);
    await artist.save();
    res.send(artist);
});

// Get all artists
router.get('/artists', async (req, res) => {
    const artists = await Artist.find();
    res.send(artists);
});
