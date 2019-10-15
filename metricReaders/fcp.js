const {Client} = require('pg');
const QUERIES = require('../queries/FCPQueries').queries;
const {
    HOST: host,
    PORT: port,
    DATABASE: database,
    USER: user,
    PASSWORD: password,
} = process.env;

const client = new Client({host, port, database, user, password});

async function getFCP() {
    await client.connect();
    const {rows} = await client.query(QUERIES.FCP);
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
    getFCP
};
