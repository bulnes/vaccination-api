const env = process.env.NODE_ENV || 'development';

const configs = {
  default: {
    app_host: 'http://localhost',
    app_port: 3000,
    api_src: 'https://core.vacinacao-covid19.com/api/vaccination.json',
    // api_src: 'https://vacinacao-covid19.com/data/bra.json',
  },
  development: {},
  production: {},
};

module.exports = {
  ...configs.default,
  ...configs[env],
};
