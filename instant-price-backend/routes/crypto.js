const router = require("express").Router();

const { getCryptoPrices, getCryptoList } = require("../controller/crypto");

router.get("/crypto", getCryptoPrices);
router.get("/crypto-list", getCryptoList);

module.exports = router;
