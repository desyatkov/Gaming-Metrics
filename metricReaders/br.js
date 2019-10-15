const {Client} = require('pg');
const QUERIES = require('../queries/bounceQueries').queries;
const {
    HOST: host,
    PORT: port,
    DATABASE: database,
    USER: user,
    PASSWORD: password,
} = process.env;

const client = new Client({host, port, database, user, password});

async function getBR(industry) {
    await client.connect();
    const {rows} = await client.query(QUERIES[industry]);
    await client.end();

    return rows.map(row => {
        const {value, trend} = row;
        return {
            ...row,
            color: Number(value) + 0.2,
            trend
        }
    });
}

module.exports = {
    getBR
};
