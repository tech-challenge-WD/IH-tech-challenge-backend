
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

router.get("/:id", (req, res, next) => {
  const {id} = req.params
  const foundPhone = phonesJson.find(phone => phone.id === id);
  if (foundPhone) {
    res.json(foundPhone);
  } else {
    next(new Error('Phone not found'));
  }
});

const phoneRoutes = require("../routes/phone.routes")
router.use("/phones", phoneRoutes)

module.exports = router;
