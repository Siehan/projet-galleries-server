const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({

    name: String, //The title of the image
    shootingDate: Date,
    location: {
        city: String,
        country: String,
    },
    
    description: String, // Description of the image
    tags: Array,

    url: String,
    favorite: Boolean,
    
});

    const imageModel = mongoose.model("Image", imageSchema);

    module.exports = imageModel;