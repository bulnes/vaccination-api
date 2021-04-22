/* eslint-disable camelcase */
const defaultData = require('../data/get-default-data');

const formatData = (raw) => {
  const { iso_code, total_vaccinations, last_update_date: data_atualizacao } = raw;

  const { 1: vacinados, 2: segunda_dose } = total_vaccinations || { 1: '', 2: '' };
  const uf = iso_code ? `${iso_code}`.toLowerCase() : '';

  return {
    data_atualizacao: data_atualizacao || '',
    segunda_dose,
    uf,
    vacinados,
  };
};

const convertData = (rawData) => defaultData().map((d) => {
  const data = rawData.find((raw) => (raw.iso_code || '').toLowerCase() === d.uf.toLowerCase());
  return data ? formatData(data) : d;
});

module.exports = convertData;
