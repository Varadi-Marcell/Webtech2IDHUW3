const mongoose = require("mongoose");

var Guitar = mongoose.model("Guitar", {
    brand: {type: String},
    name: {type: String},
    price: {type: Number},
});

module.exports = {
    Guitar,
};
