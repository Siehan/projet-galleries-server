const express = require('express')
const router = new express.Router();
const galleryModel = require("../models/Gallery");
const imageModel = require("../models/Image");

const uploader = require("../config/cloudinary")

router.post("/galleries", uploader.single("background"), (req, res) => {

    let images = JSON.parse(req.body.images)[0]; // array format

    const copy = images.map(function (element) {
        return { url: element }
    })
    
    imageModel.insertMany(copy)
        .then(addedImages => {
            const newGallery = req.body
            newGallery.images = addedImages

            galleryModel
                .create(newGallery)
                .then(createdGallery => {
                    res.status(200).json({
                        createdGallery
                    })
                })
                .catch(err => res.status(500).json(err))
        })
        .catch(err=> console.log(err))


});

router.get("/galleries", async (req, res, next) => {
    try {
        res.json({
            galleries: await galleryModel.find()
        });
    } catch (dbErr) {
        next(dbErr);
    }
});

module.exports = router;