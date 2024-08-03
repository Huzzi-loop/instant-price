const router = require("express").Router();

const { getCryptoPrices } = require("../controller/crypto");

router.get("/crypto", getCryptoPrices);

module.exports = router;
