const axios = require('axios');

const fetchChecklistData = async () => {
    const url = 'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639';
    const { data } = await axios.get(url);
    return data;
};

module.exports = { fetchChecklistData };
