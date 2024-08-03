// Define a middleware function for searching
const search = (req, res, next) => {
  // Get the search query from the request query parameters
  const searchQuery = req.query.searchQuery;

  // Add the search query to the query
  req.query.search = `%${searchQuery}%`;

  // Call next() to pass control to the next middleware function
  next();
};

module.exports = search;
