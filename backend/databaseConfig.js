const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://marcibazsi:avXOCEXyQ9m2fx1e@cluster0.gbqil.mongodb.net/myFirstDatabase2?retryWrites=true&w=majority", (err) => {
    if (!err) {
        console.log("Connection successful.");
    } else {
        console.log("Error in DB connection: " + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;
