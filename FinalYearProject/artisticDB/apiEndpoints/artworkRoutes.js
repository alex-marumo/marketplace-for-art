const Artwork = require('./models/Artwork');

// Create a new artwork
router.post('/artworks', async (req, res) => {
    const artwork = new Artwork(req.body);
    await artwork.save();
    res.send(artwork);
});

// Get all artworks
router.get('/artworks', async (req, res) => {
    const artworks = await Artwork.find().populate('artistId');
    res.send(artworks);
});
