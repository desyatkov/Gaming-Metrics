const {Client} = require('pg');
const QUERIES = require('../queries/EPVQueries').queries;
const {
    HOST: host,
    PORT: port,
    DATABASE: database,
    USER: user,
    PASSWORD: password,
} = process.env;

const client = new Client({host, port, database, user, password});

async function getEPV(vertical) {
    await client.connect();
    const {rows} = await client.query(QUERIES[vertical]);
    await client.end();

    return rows.map(row => {
        const {value} = row;
        return {
            ...row,
            color: Number(value) + 0.2
        }
    });
}

module.exports = {
    getEPV
};
