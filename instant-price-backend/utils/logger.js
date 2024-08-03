const fs = require("fs");
const path = require("path");

const logDirectory = path.join(__dirname, "../../logs");
const logFilePath = path.join(logDirectory, "server.log");

// Ensure the log directory exists
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

function logToFile(message) {
  fs.open(logFilePath, "a", (err, fd) => {
    if (err) {
      console.error("Error opening log file:", err);
      return;
    }
    fs.appendFile(fd, message + "\n", (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
      }
      fs.close(fd, (err) => {
        if (err) {
          console.error("Error closing log file:", err);
        }
      });
    });
  });
}

const customConsole = {
  log: function (message) {
    console.log(message); // Log to console
    logToFile("[LOG] " + message); // Log to file
  },
  error: function (message) {
    console.error(message); // Log error to console
    logToFile("[ERROR] " + message); // Log error to file
  },
};

module.exports = customConsole;
