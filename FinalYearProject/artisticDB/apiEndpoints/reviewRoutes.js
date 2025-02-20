// Create a new review
app.post('/reviews', async (req, res) => {
    const review = new Review(req.body);
    await review.save();
    res.send(review);
});

// Get all reviews
app.get('/reviews', async (req, res) => {
    const reviews = await Review.find().populate('userId').populate('artworkId');
    res.send(reviews);
});
