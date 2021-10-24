const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true // What if someone doesn't want to give their last name ? We could also have a username alternatively
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    wishlist: {
        type: Schema.Type.ObjectId,
        ref: "books"
    } 
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel