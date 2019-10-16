const {Client} = require('pg');
const QUERIES = require('../queries/commissionQueries').queries;
const {
    HOST: host,
    PORT: port,
    DATABASE: database,
    USER: user,
    PASSWORD: password,
} = process.env;

const client = new Client({host, port, database, user, password});

async function getCommission(vertical) {
    await client.connect();
    const {rows} = await client.query(QUERIES[vertical]);
    await client.end();

    return rows.map(row => {
        const {trend} = row;
        return {
            ...row,
            color: Number(trend) + 0.65
        }
    });
}

module.exports = {
    getCommission
};
