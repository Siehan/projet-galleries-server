const express = require('express')
const router = new express.Router();
const galleryModel = require("../models/Gallery");
const uploader = require("../config/cloudinary")

router.post("/galleries", uploader.single("background"), (req, res) => {
    console.log(req.body, "toto")
    galleryModel
        .create(req.body)
        .then(createdGallery => {
            res.status(200).json({
                createdGallery
            })
        })
        .catch(err => res.status(500).json(err))
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