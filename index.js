const app = require('./src/app');
const config = require('./config');

const { app_host: host, app_port } = config;
const port = process.env.PORT || app_port

app.listen(port, () => console.log(`App listening on ${host}:${port}`));
