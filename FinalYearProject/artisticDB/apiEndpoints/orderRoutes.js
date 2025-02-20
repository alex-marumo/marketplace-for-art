// Create a new order
app.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.send(order);
});

// Get all orders
app.get('/orders', async (req, res) => {
    const orders = await Order.find().populate('userId').populate('artworkIds');
    res.send(orders);
});
