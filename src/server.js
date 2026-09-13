require('dotenv').config();

const app = require('./app');

const port = Number.parseInt(process.env.PORT || '3000', 10);
const server = app.listen(port, () => {
  console.log(`SorriMed running on port ${port}`);
});

function shutdown(signal) {
  console.log(`Received ${signal}. Shutting down.`);
  server.close((error) => {
    if (error) {
      console.error(error);
      process.exitCode = 1;
    }
  });
}

process.once('SIGINT', () => shutdown('SIGINT'));
process.once('SIGTERM', () => shutdown('SIGTERM'));