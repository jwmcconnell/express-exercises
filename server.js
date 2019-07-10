const app = require('./lib/app');

const PORT = process.env.port || 8080;

app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});
