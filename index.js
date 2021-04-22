const app = require('./src/app');
const config = require('./config');

const { app_host: host, app_port: port } = config;

app.listen(port, () => console.log(`App listening on ${host}:${port}`));
