const {Client} = require('pg');
const QUERIES = require('../queries/trafficQueries').queries;
const {
    HOST: host,
    PORT: port,
    DATABASE: database,
    USER: user,
    PASSWORD: password,
} = process.env;

async function getTraffic(vertical) {
    const client = new Client({host, port, database, user, password});
    await client.connect();
    const {rows} = await client.query(QUERIES[vertical]);
    await client.end();

    return rows.map(row => {
        const {
            last_week: value,
            last_5_weeks: pastValue,
            industry_name: industry,
            vertical
        } = row;
        const trend = ((value - pastValue) / (pastValue + 0.001));
        return {
            metric: 'Traffic',
            industry,
            vertical,
            color: Number(trend) + 0.65,
            trend,
            value
        }
    });
}

module.exports = {
    getTraffic
};
