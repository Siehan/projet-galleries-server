const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({


    username: {
        type: String,
        trim: true,
        required: [true, "Username is Required"],
    },

    password: {
        type: String,
        trim: true,
        required: [true, "Password is Required"],
        validate: [
            function (input) {
                return input.length >= 6;
            },
          "Password should be longer."
        ]
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    role: {
        type: String,       
        enum: ["admin", "editor", "user"],
        default: "user"
    },

    firstName: String,
    lastName: String,

    location: {
        numberStreet: Number,
        street: String,
        city: String,
        country: String,
    },

    age: Number,
    biography: String,
    url: String,
         
    galleries: [{
     type: Schema.Types.ObjectId,
     ref: "Gallery"
    }],
    
    avatar: {
        type: String,
        default: "https://cdn.onlinewebfonts.com/svg/img_476068.png"
        
        //"https://cdn.onlinewebfonts.com/svg/img_205356.png"
    },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;