require("dotenv").config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require("./../config/mongo");

const galleryModel = require("./../models/Gallery");
const imageModel = require("./../models/Image");
const userModel = require("./../models/User");


async function seedIt() {

    try {

        const user = {
            username: "sylvie",
            password: "123456",
        };


        const userSeed = await userModel.create(user);

        // const gallery = {
        //     name: "",
        //     description: "",
        //     date: "",
        //     views: 0,
        //     images: [],
        //     background: "",
        //     style: "",
        // };


        // const gallerySeed = await galleryModel.create(gallery);

        // const image = {
        //     name: "",
        //     shootingDate: "",
        //     location: "",
        //     category: "",
        //     description: "",
        //     tags: [],
        //     url: "",
        //     favorite: true,
        // }

        // const imageSeed = await imageModel.create(image);


        // console.log("Everything ok");
        // console.log(gallerySeed, imageSeed);

    } catch (err) {
        console.error(err)
    }
}

seedIt()