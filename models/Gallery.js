const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    
    name: String,
    description: String, // The description of the image in the gallery
    
    date: {
        type: Date,
        default: Date.now,
    },

    views: Number, // The number of image views
    
    images: [{
        type: Schema.Types.ObjectId,
        ref: "Image"
    }],

    background: [{
        type: String,
        default: "https://res.cloudinary.com/daqom8gp8/image/upload/v1583330789/spirale2_ft69zf.png"
    }],

    category: {
        type: String,
        enum: ["various", "b&w", "color", "portrait", "landscape", "arts", "street", "decoration", "architecture"]
    },
     
    style: {
         type: String,
         enum: ["circle", "square", "rectangle", "octagon"]
    },
    
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

});

const galleryModel = mongoose.model("Gallery", gallerySchema);

module.exports = galleryModel;