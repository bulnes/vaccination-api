const defaultData = require('../data/get-default-data')();
const convertData = require('../helpers/convert-data');

describe('Helper: Convert Data', () => {
  it('should be able to return the one formated data', () => {
    const data = convertData([
      {
        state: 'São Paulo',
        iso_code: 'sp',
        total_vaccinations: {
          1: '5251547',
          2: '1938591',
        },
        vaccines: [
          'Sinovac/Butantan',
          'Oxford/AstraZeneca',
        ],
        last_update_date: '2021-04-08',
        people_vaccinated_per_hundred: '11.35',
        people_fully_vaccinated_per_hundred: '4.19',
        daily_vaccinations_raw: 74441,
        daily_vaccinations: 133447,
        daily_vaccinations_per_million: 2883,
        source_name: 'Governo do estado de São Paulo',
        source_website: 'https://vacinaja.sp.gov.br/',
      },
    ]);

    const formatedData = defaultData.map((d) => {
      if (d.uf.toLowerCase() === 'sp') {
        return {
          data_atualizacao: '2021-04-08',
          segunda_dose: '1938591',
          uf: 'sp',
          vacinados: '5251547',
        };
      }

      return d;
    });

    expect(data).toEqual(formatedData);
  });

  it('should be able to return the multiple formated data', () => {
    const data = convertData([
      {
        state: 'Minas Gerais',
        iso_code: 'mg',
        total_vaccinations: {
          1: '2086750',
          2: '639426',
        },
        vaccines: [
          'Sinovac/Butantan',
          'Oxford/AstraZeneca',
        ],
        last_update_date: '2021-04-08',
        people_vaccinated_per_hundred: '9.80',
        people_fully_vaccinated_per_hundred: '3.00',
        daily_vaccinations_raw: 72102,
        daily_vaccinations: 81073,
        daily_vaccinations_per_million: 3808,
        source_name: 'Governo do estado de Minas Gerais',
        source_website: 'https://coronavirus.saude.mg.gov.br/vacinometro',
      },
      {
        state: 'Rio de Janeiro',
        iso_code: 'rj',
        total_vaccinations: {
          1: '1523538',
          2: '433198',
        },
        vaccines: [
          'Sinovac/Butantan',
          'Oxford/AstraZeneca',
        ],
        last_update_date: '2021-04-08',
        people_vaccinated_per_hundred: '8.77',
        people_fully_vaccinated_per_hundred: '2.49',
        daily_vaccinations_raw: 148260,
        daily_vaccinations: 52576,
        daily_vaccinations_per_million: 3027,
        source_name: 'Governo do estado do Rio de Janeiro',
        source_website: 'https://vacinacaocovid19.saude.rj.gov.br/vacinometro',
      },
    ]);

    const formatedData = defaultData.map((d) => {
      if (d.uf.toLowerCase() === 'mg') {
        return {
          data_atualizacao: '2021-04-08',
          segunda_dose: '639426',
          uf: 'mg',
          vacinados: '2086750',
        };
      }

      if (d.uf.toLowerCase() === 'rj') {
        return {
          data_atualizacao: '2021-04-08',
          segunda_dose: '433198',
          uf: 'rj',
          vacinados: '1523538',
        };
      }

      return d;
    });

    expect(data).toEqual(formatedData);
  });

  it('should be able to return default object to wrong data', () => {
    const data = convertData([{
      a: 0,
      b: 1,
      c: 2,
    }]);

    expect(data).toEqual(defaultData);
  });
});
