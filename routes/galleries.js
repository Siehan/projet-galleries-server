const express = require('express')
const router = new express.Router();
const galleryModel = require("../models/Gallery");

router.post("/galleries", (req, res, next) => {
    console.log(req.body)
    // galleryModel.create
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