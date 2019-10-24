const {Client} = require('pg');
const QUERIES = require('../../queries/gaming/FIDQueries').queries;
const {
    HOST: host,
    PORT: port,
    DATABASE: database,
    USER: user,
    PASSWORD: password,
} = process.env;

async function getFID(vertical) {
    const client = new Client({host, port, database, user, password});
    await client.connect();
    const {rows} = await client.query(QUERIES[vertical]);
    await client.end();

    return rows.map(row => {
        const {
            industry,
            vertical,
            metric,
            value
        } = row;
        return {
            industry,
            metric,
            vertical,
            value: value / 100.0,
            color: value / 100.0 < 0.10 ? 1 : 0.1
        }
    });
}

module.exports = {
    getFID
};
