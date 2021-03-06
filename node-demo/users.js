const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    email: String,
    address: String,
    city: String,
    phone: String,
    website: String
});
module.exports = mongoose.model('users', userSchema);