
const express = require('express');
const router = express.Router();
const phonesJson = require("../data/phones.json")

router.get("/phones", (req, res, next) => {
  res.json(phonesJson)

});



router.get("/:phoneId", (req, res, next) => {
  const { phoneId } = req.params
  const foundPhone = phonesJson.find(phone => phone.id === parseInt(phoneId));
  if (foundPhone) {
    res.json(foundPhone);
  } else {
    next(new Error('Phone not found'));
  }

});

module.exports = router;