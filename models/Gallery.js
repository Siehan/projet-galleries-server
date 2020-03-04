const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    
    name: String,
    description: String, // The description of the album in the gallery
    
    date: {
        type: Date,
        default: Date.now,
    },

    views: Number, // The number of image views
    
    images: [{
        type: Schema.Types.ObjectId,
        ref: "Image"
    }],

    background: String,
    

    category: {
        type: String,
        enum: ["color", "b&w", "portrait", "landscape", "arts", "street", "decoration"]
    },
     
    style: {
         type: String,
         enum: ["circle", "square", "rectangle", "octagon"]
     },

});

const galleryModel = mongoose.model("Gallery", gallerySchema);

module.exports = galleryModel;