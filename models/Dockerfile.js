let mongoose = require('mongoose');

/* The schema describing the collection in mongo database */
let schema = new mongoose.Schema({
    name: String,
    content: String
});

/* We export the model to use it in dockerfiles.js routes file */
module.exports = mongoose.model('Dockerfile', schema);
