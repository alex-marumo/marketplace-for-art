const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', UserSchema);

// Artist Schema
const ArtistSchema = new mongoose.Schema({
    name: String,
    email: String,
    bio: String,
    skills: [String],
    socialLinks: [String],
    profileImage: String,
    createdAt: { type: Date, default: Date.now }
});
const Artist = mongoose.model('Artist', ArtistSchema);

// Artwork Schema
const ArtworkSchema = new mongoose.Schema({
    artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
    title: String,
    description: String,
    category: String,
    price: Number,
    images: [String],
    tags: [String],
    createdAt: { type: Date, default: Date.now },
    isAvailable: Boolean
});
const Artwork = mongoose.model('Artwork', ArtworkSchema);

// Order Schema
const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    artworkIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artwork' }],
    totalAmount: Number,
    status: String,
    orderDate: { type: Date, default: Date.now },
    shippingAddress: String,
    paymentStatus: String
});
const Order = mongoose.model('Order', OrderSchema);

// Review Schema
const ReviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    artworkId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artwork' },
    rating: Number,
    comment: String,
    createdAt: { type: Date, default: Date.now }
});
const Review = mongoose.model('Review', ReviewSchema);

module.exports = { User, Artist, Artwork, Order, Review };
