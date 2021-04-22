const allStates = require('./get-all-states')();

const getDefaultData = () => {
  const today = new Date().toISOString().slice(0, 10);

  return allStates.map((state) => {
    const uf = state.uf.toLowerCase();

    return {
      data_atualizacao: today,
      segunda_dose: '0',
      uf,
      vacinados: '0',
    };
  });
};

module.exports = getDefaultData;
