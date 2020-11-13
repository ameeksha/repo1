const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    albumId: String,
    title: String,
    url: String,
    thumbnailUrl: String
});
module.exports = mongoose.model('photos', userSchema);