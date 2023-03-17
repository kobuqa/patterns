/**
 * Problem: when you want to add additional functionality without mutating existing one
 */

const logger = (message) => console.log(message);

function loggerDecorator(logger) {
  return function (message) {
    logger.call(this, message);
    console.log("message logged at:", new Date().toLocaleString());
  };
}

const decoratedLogger = loggerDecorator(logger);
