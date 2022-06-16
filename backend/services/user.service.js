const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const {body, validationResult} = require('express-validator');
const {User} = require("../entity/user");

router.post("/create-user", body('username').isString(), body('password').isLength({min: 5}), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const user = new User({
        username: req.body.username, password: req.body.password,
    });
    user.save((err, doc) => {
        if (!err) {
            res.status(200).send(doc);
        } else {
            console.log("Could not save user: " + JSON.stringify(err, undefined, 2));
        }
    });

},);

router.get("/get-users", (req, res) => {
    User.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log("Error get all users: " + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post("/get-user", (req, res) => {
    if (!ObjectId.isValid(req.body.id)) {
        return res.status(400).send('User id not found:  ${req.body.id}');
    }

    User.findById(req.body.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error in returned user id: " + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get("/login", (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    User.findOne({username: username, password: password}, (err, docs) => {
        if (docs === null) {
            return res.json(null);
        } else {
            return res.json(docs);
        }
    });
});

router.patch("/update-user", body('username').isString(), body('password').isLength({min: 5}), (req, res) => {
    if (!ObjectId.isValid(req.body._id)) {
        return res.status(400).send(`No record with given id:  ${req.body._id}`);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    var user = {
        username: req.body.username,
        password: req.body.password,
    };

    User.findByIdAndUpdate(req.body._id, {$set: user}, {new: true}, (err, doc) => {
        if (!err) {
            console.log(doc);
            res.send(doc);
        } else {
            console.log("Update failed: " + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete("/delete-user/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`User not found:  ${req.params.id}`);
    }

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error in user delete: " + JSON.stringify(err, undefined, 2));
        }
    });
});
module.exports = router;
