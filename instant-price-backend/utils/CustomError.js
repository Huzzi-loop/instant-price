class CustomError extends Error {
    constructor(message, responseCode = 500) {
      super(message);
      this.responseCode = responseCode;
    }
  }
  
  module.exports = CustomError;
  