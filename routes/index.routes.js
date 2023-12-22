const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone.model")


router.get("/", (req, res, next) => {
  res.json("All good amigo")
    
});
router.get("/phones/:id", (req, res, next) => {
  const {phoneId} = req.body.id
  Phone.findById(phoneId)
    .then((foundPhone) => res.json(foundPhone))
    .catch((err) => next(err));
});

module.exports = router;
