const env = process.env.NODE_ENV || 'development';

const configs = {
  default: {
    app_host: 'http://localhost',
    app_port: 3333,
    api_src: 'https://vacinacao-covid19.com/data/bra.json',
  },
  development: {},
  production: {
    app_port: 3335,
  },
};

module.exports = {
  ...configs.default,
  ...configs[env],
};
