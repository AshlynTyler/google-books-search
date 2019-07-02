

// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;


var Book = new Schema({

    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
})