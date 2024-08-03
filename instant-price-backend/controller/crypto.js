async function getCryptoPrices(req, res) {
  try {
  } catch (err) {
    console.log(err);

    return res.status(err.responseCode || 500).json({
      error: err.message.replace(/\n/g, ""),
    });
  }
}

module.exports = {
  getCryptoPrices,
};
