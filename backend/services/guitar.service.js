const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const {body, validationResult} = require('express-validator');
const {Guitar} = require("../entity/guitar");

router.post("/create-guitar", body('brand').isString().isLength({min: 5}), body('name').isString().isLength({min: 5}), body('price').isNumeric(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const guitar = new Guitar({
        brand: req.body.brand,
        name: req.body.name,
        price: req.body.price,
    });
    guitar.save((err, doc) => {
        if (!err) {
            res.status(200).send(doc);
        } else {
            console.log("Error in guitar save: " + JSON.stringify(err, undefined, 2));
        }
    });

});

router.get("/get-guitars", (req, res) => {
    Guitar.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log("Err: " + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post("/get-guitar", (req, res) => {
    if (!ObjectId.isValid(req.body.id)) {
        return res.status(400).send(`Guitar Id not found:  ${req.body.id}`);
    }

    Guitar.findById(req.body.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Create error: " + JSON.stringify(err, undefined, 2));
        }
    });
});

router.patch("/update-guitar", body('brand').isString().isLength({min: 5}), body('name').isString().isLength({min: 5}), body('price').isNumeric(), (req, res) => {
    if (!ObjectId.isValid(req.body.id)) {
        return res.status(400).send(`Id not found:  ${req.body.id}`);
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    var guitar = {
        brand: req.body.brand,
        name: req.body.name,
        price: req.body.price,
    };


    Guitar.findByIdAndUpdate(req.body.id, {$set: guitar}, {new: true}, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error in guitar update: " + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete("/delete-guitar/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No user with given id:  ${req.params.id}`);
    }

    Guitar.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error in guitar delete: " + JSON.stringify(err, undefined, 2));
        }
    });
});
module.exports = router;
