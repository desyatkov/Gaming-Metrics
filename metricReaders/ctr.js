const {Client} = require('pg');
const QUERIES = require('../queries/CTRQueries').queries;
const {
    HOST: host,
    PORT: port,
    DATABASE: database,
    USER: user,
    PASSWORD: password,
} = process.env;

const client = new Client({host, port, database, user, password});

async function getCTR(industry) {
    await client.connect();
    const {rows} = await client.query(QUERIES[industry]);
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
    getCTR
};
