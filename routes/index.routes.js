
const express = require('express');
const router = express.Router();
const phonesJson = require("../data/phones.json")

//router.use(express.json())

router.get("/", (req, res, next) => {
  res.json("All good amigo")
  .catch((err) => next(err));
    
});

router.get("/phones", (req, res, next) => {
    res.json(phonesJson)
      
  });

module.exports = router;
