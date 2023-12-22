const router = express.Router();
const phonesJson = require("../data/phones.json")

router.get("/phones", (req, res, next) => {
    res.json(phonesJson)
      
  });