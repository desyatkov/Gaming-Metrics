const {Client} = require('pg');
const QUERIES = require('../queries/FIDQueries').queries;
const {
    HOST: host,
    PORT: port,
    DATABASE: database,
    USER: user,
    PASSWORD: password,
} = process.env;

const client = new Client({host, port, database, user, password});

async function getFID() {
    await client.connect();
    const {rows} = await client.query(QUERIES.FID);
    await client.end();

    return rows.map(row => {
        return {
            industry: row.industry,
            metric: row.metric,
            vertical: row.vertical,
            value: row.value / 100.0,
            color: row.value / 100.0 < 0.10 ? 1 : 0.1
        }
    });
}

module.exports = {
    getFID
};
