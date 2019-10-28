const {Client} = require('pg');
const QUERIES = require('../../queries/betterPlay/BP_CommissionQueries').BP_Queries;
const {
    HOST: host,
    PORT: port,
    DATABASE: database,
    USER: user,
    PASSWORD: password
} = process.env;

async function getCommission(vertical) {
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
        const trend = ((value - pastValue) / (pastValue + 0.1));
        return {
            industry,
            metric: 'Commission',
            vertical,
            value,
            color: Number(trend) + 0.65,
            trend
        };
    });
}

module.exports = {
    getCommission
};
