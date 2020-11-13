const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Album = require('./albums');
const User = require('./users');
const Photo = require('./photos');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

mongoose.connect('mongodb+srv://ameeksha:oenYSqdvqpYcAXaL@cluster0.1j2uu.mongodb.net/demo-api?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.get('/users', function (req, res) {
    User.find().then((data) => {
        res.json(data);
    })
});

app.post('/users', jsonParser, function (req, res) {
    const data = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        phone: req.body.phone,
        website: req.body.website,

    });
    data.save().then((result) =>
        res.status(201).json(result)
    )
        .catch((error) => console.warn(error))
})

app.get('/users/:userId/albums', function (req, res) {
    Album.find(req.params).then((data) => {
        res.json(data);
    })
});

app.get('/albums', function (req, res) {
    Album.find().then((data) => {
        res.json(data);
    })
});

app.post('/albums', jsonParser, function (req, res) {
    const data = new Album({
        _id: new mongoose.Types.ObjectId(),
        userId: req.body.userId,
        title: req.body.title
    });
    data.save().then((result) =>
        res.status(201).json(result)
    )
        .catch((error) => console.warn(error))
})

app.get('/albums/:albumId/photos', function (req, res) {
    Photo.find(req.params).then((data) => {
        res.json(data);
    })
});

app.get('/photos', function (req, res) {
    Photo.find().then((data) => {
        res.json(data);
    })
});

app.post('/photos', jsonParser, function (req, res) {
    const data = new Photo({
        _id: new mongoose.Types.ObjectId(),
        albumId: req.body.albumId,
        title: req.body.title,
        url: req.body.url,
        thumbnailUrl: req.body.thumbnailUrl
    });
    data.save().then((result) =>
        res.status(201).json(result)
    )
        .catch((error) => console.warn(error))
});
app.listen(4000)